import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, Lightbulb } from "lucide-react";
import { useState } from "react";

export const QAInterface = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm your health record assistant. Ask me anything about your medical information.",
      timestamp: "Just now"
    }
  ]);

  const sampleQuestions = [
    "What does my cholesterol level mean?",
    "Why am I taking Metformin?",
    "Is my blood pressure concerning?",
    "What should I do about my lab results?"
  ];

  const sampleResponses = {
    "What does my cholesterol level mean?": "Your total cholesterol is 245 mg/dL, which is above the recommended level of 200 mg/dL. This means there's more cholesterol in your blood than ideal, which can increase your risk of heart disease. The good news is this can often be managed through diet changes, exercise, and sometimes medication. I'd recommend discussing a heart-healthy diet with your doctor.",
    "Why am I taking Metformin?": "Metformin is prescribed to help manage your blood sugar levels. It works by reducing the amount of glucose your liver produces and helping your body use insulin more effectively. It's a first-line treatment for type 2 diabetes and is generally well-tolerated. Take it with meals to reduce stomach upset.",
    "Is my blood pressure concerning?": "Your blood pressure reading of 142/88 mmHg is in the 'Stage 1 Hypertension' range. The ideal blood pressure is less than 120/80 mmHg. While this isn't immediately dangerous, it does increase your long-term risk of heart disease and stroke. Your doctor may recommend lifestyle changes like reducing sodium, exercising regularly, and possibly medication.",
    "What should I do about my lab results?": "Based on your recent labs, I see some areas that need attention. Your cholesterol is elevated and your blood pressure is high. Here's what I recommend: 1) Follow up with your doctor to discuss treatment options, 2) Consider dietary changes like reducing saturated fats, 3) Increase physical activity if possible, and 4) Continue taking your prescribed medications as directed."
  };

  const handleSampleQuestion = (question: string) => {
    const newMessages = [
      ...messages,
      { type: "user", message: question, timestamp: "Now" },
      { 
        type: "bot", 
        message: sampleResponses[question as keyof typeof sampleResponses] || "I'd be happy to help explain that! In a real implementation, I would analyze your specific health data and provide personalized explanations.", 
        timestamp: "Now" 
      }
    ];
    setMessages(newMessages);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [
      ...messages,
      { type: "user", message: inputValue, timestamp: "Now" },
      { 
        type: "bot", 
        message: "This is a demo interface. In the full application, I would analyze your question against your actual health records and provide a personalized, medically accurate explanation with sources and disclaimers.", 
        timestamp: "Now" 
      }
    ];
    setMessages(newMessages);
    setInputValue("");
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-secondary" />
              AI Health Assistant
            </CardTitle>
            <CardDescription>
              Ask questions about your health records in plain language
            </CardDescription>
          </div>
          <Badge className="bg-secondary/10 text-secondary border-secondary/20">
            <Bot className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chat Messages */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`p-2 rounded-full ${msg.type === 'user' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                  {msg.type === 'user' ? (
                    <User className="h-4 w-4 text-primary" />
                  ) : (
                    <Bot className="h-4 w-4 text-secondary" />
                  )}
                </div>
                <div className={`p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Questions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Lightbulb className="h-4 w-4" />
            Try asking:
          </div>
          <div className="grid grid-cols-1 gap-2">
            {sampleQuestions.map((question, idx) => (
              <Button 
                key={idx}
                variant="outline" 
                size="sm" 
                className="justify-start text-left h-auto p-2 text-xs"
                onClick={() => handleSampleQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-2 border-t">
          <Input
            placeholder="Ask about your health records..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button 
            variant="medical" 
            size="icon"
            onClick={handleSendMessage}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};