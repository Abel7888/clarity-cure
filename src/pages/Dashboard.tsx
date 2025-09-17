import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Calendar, 
  AlertTriangle, 
  Activity, 
  Pill, 
  FileText, 
  MessageSquare,
  Send,
  TrendingUp,
  Heart,
  Stethoscope,
  ArrowLeft,
  Shield,
  ToggleLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "assistant",
      content: "Hello! I'm here to help explain your health records in simple terms. What would you like to know?",
      timestamp: "10:30 AM"
    }
  ]);
  const [isLiveData, setIsLiveData] = useState(true);
  const [activeTab, setActiveTab] = useState("labs");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: "user", content: message, timestamp: "Now" },
      { 
        type: "assistant", 
        content: "Based on your latest lab results, your cholesterol level of 195 mg/dL is within the borderline range (190-239 mg/dL). This means it's slightly elevated but not in the high-risk category yet. Consider discussing dietary changes with your doctor.",
        timestamp: "Now"
      }
    ]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary-light/10">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-xl font-bold">Your Health Dashboard</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Live Data</span>
                <Switch 
                  checked={isLiveData} 
                  onCheckedChange={setIsLiveData}
                />
                <span className="text-sm text-muted-foreground">Demo Mode</span>
              </div>
              <Badge variant={isLiveData ? "default" : "secondary"}>
                <Shield className="h-3 w-3 mr-1" />
                {isLiveData ? "Live Data" : "Synthetic Demo"}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b bg-background/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-3">
            <Button variant="ghost" className="bg-primary/10 text-primary font-medium">
              Dashboard
            </Button>
            <Button variant="ghost">Insights</Button>
            <Button variant="ghost">Sandbox Mode</Button>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column - Data Explorer */}
          <div className="space-y-6">
            
            {/* Patient Snapshot */}
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Patient Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-semibold">42 years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Visit</p>
                    <p className="font-semibold">March 15, 2024</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Conditions</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Type 2 Diabetes</Badge>
                    <Badge variant="outline">Hypertension</Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Allergies</p>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="text-sm">Penicillin, Shellfish</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Record Viewer */}
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle>Health Records (FHIR Data)</CardTitle>
                <CardDescription>View your medical data organized by category</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="labs">Labs</TabsTrigger>
                    <TabsTrigger value="meds">Medications</TabsTrigger>
                    <TabsTrigger value="visits">Visits</TabsTrigger>
                    <TabsTrigger value="allergies">Allergies</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="labs" className="space-y-4 mt-4">
                    <div className="grid gap-4">
                      <div className="p-4 border rounded-lg bg-card">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Total Cholesterol</h4>
                          <TrendingUp className="h-4 w-4 text-secondary" />
                        </div>
                        <p className="text-2xl font-bold">195 <span className="text-sm font-normal text-muted-foreground">mg/dL</span></p>
                        <p className="text-sm text-muted-foreground">Borderline (Normal: &lt;180 mg/dL)</p>
                      </div>
                      
                      <div className="p-4 border rounded-lg bg-card">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">HbA1c</h4>
                          <Heart className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-2xl font-bold">7.2<span className="text-sm font-normal text-muted-foreground">%</span></p>
                        <p className="text-sm text-muted-foreground">Above target (Target: &lt;7.0%)</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="meds" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
                        <Pill className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">Metformin</p>
                          <p className="text-sm text-muted-foreground">500mg twice daily</p>
                        </div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
                        <Pill className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">Lisinopril</p>
                          <p className="text-sm text-muted-foreground">10mg once daily</p>
                        </div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="visits" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 border rounded-lg bg-card">
                        <Calendar className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Follow-up Visit</p>
                          <p className="text-sm text-muted-foreground">March 15, 2024 • Dr. Smith</p>
                          <p className="text-sm mt-1">Diabetes management review. Lab results discussed.</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="allergies" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        <div>
                          <p className="font-medium">Penicillin</p>
                          <p className="text-sm text-muted-foreground">Severe reaction - rash, difficulty breathing</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Insights & Q&A */}
          <div className="space-y-6">
            
            {/* Q&A Chat Assistant */}
            <Card className="shadow-trust">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                  Ask Your Health Assistant
                </CardTitle>
                <CardDescription>
                  Ask questions about your health records in plain language
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat Messages */}
                  <div className="h-64 overflow-y-auto space-y-3 p-3 border rounded-lg bg-muted/10">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs p-3 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-background border'
                        }`}>
                          <p className="text-sm">{msg.content}</p>
                          <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Input */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about your health records..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Safety Disclaimer */}
                  <div className="text-xs text-muted-foreground p-2 bg-muted/50 rounded border-l-4 border-secondary">
                    💡 This assistant provides educational information only. Always consult your healthcare provider for medical advice.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Insights Summary */}
            <Card className="shadow-trust">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-secondary" />
                      Your Health in Plain Language
                    </CardTitle>
                    <CardDescription>Key insights from your recent health data</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Patient View</span>
                    <Switch defaultChecked />
                    <span className="text-xs text-muted-foreground">Clinician View</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">📊 Lab Results Summary</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Your cholesterol is slightly elevated - consider heart-healthy foods</li>
                      <li>• Diabetes control needs improvement - discuss with your doctor</li>
                      <li>• Blood pressure medications are working well</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                    <h4 className="font-medium text-secondary mb-2">💊 Medication Insights</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Taking 2 medications for diabetes and blood pressure</li>
                      <li>• All medications are active and up to date</li>
                      <li>• Remember to take Metformin with meals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;