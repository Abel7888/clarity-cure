import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp, Calendar, FileText } from "lucide-react";

export const HealthRecordDemo = () => {
  const healthData = [
    {
      category: "Lab Results",
      icon: <FileText className="h-4 w-4" />,
      items: [
        {
          name: "Cholesterol (Total)",
          value: "245 mg/dL",
          status: "high",
          explanation: "Your total cholesterol is elevated. This increases cardiovascular risk."
        },
        {
          name: "Blood Glucose",
          value: "98 mg/dL",
          status: "normal",
          explanation: "Your blood sugar level is within the healthy range."
        },
        {
          name: "Blood Pressure",
          value: "142/88 mmHg",
          status: "high",
          explanation: "Your blood pressure is elevated. This may require lifestyle changes or medication."
        }
      ]
    },
    {
      category: "Medications",
      icon: <TrendingUp className="h-4 w-4" />,
      items: [
        {
          name: "Metformin",
          value: "500mg twice daily",
          status: "active",
          explanation: "Helps control blood sugar levels in type 2 diabetes."
        },
        {
          name: "Lisinopril",
          value: "10mg daily",
          status: "active",
          explanation: "ACE inhibitor that helps lower blood pressure and protect your heart."
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "high": return "destructive";
      case "normal": return "secondary";
      case "active": return "default";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "high": return <AlertCircle className="h-3 w-3" />;
      case "normal": return <div className="w-3 h-3 rounded-full bg-secondary" />;
      case "active": return <div className="w-3 h-3 rounded-full bg-primary" />;
      default: return null;
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Health Record Sample
            </CardTitle>
            <CardDescription>
              Patient: John Smith • DOB: 01/15/1975 • MRN: 12345
            </CardDescription>
          </div>
          <Badge variant="secondary">Demo Data</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {healthData.map((category, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              {category.icon}
              {category.category}
            </div>
            
            <div className="space-y-2">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusColor(item.status) as any} className="text-xs">
                        {getStatusIcon(item.status)}
                        {item.value}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            View Full Record
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};