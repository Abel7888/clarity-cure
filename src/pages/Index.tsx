import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { HealthRecordDemo } from "@/components/HealthRecordDemo";
import { QAInterface } from "@/components/QAInterface";
import { Shield, Brain, Users, FileText, Stethoscope, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary-light/10">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">FHIR-LLM Assistant</h1>
                <p className="text-sm text-muted-foreground">Patient-Friendly Health Records</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="hidden sm:inline-flex">
                <Shield className="h-3 w-3 mr-1" />
                HIPAA Compliant
              </Badge>
              <Button variant="medical" asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Problem & Solution */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">The Problem</Badge>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Medical Records Are Hard to Understand
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Patients struggle with medical jargon, lab values, and coded entries that are difficult to interpret.</p>
                <p>This leads to confusion, reduced engagement, and increased burden on clinicians.</p>
                <p>Meanwhile, developers face challenges testing patient-facing apps due to sensitive data restrictions.</p>
              </div>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">Our Solution</Badge>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                AI-Powered Health Record Explanations
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Connect securely to EHR via FHIR APIs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Natural language explanations with AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Synthetic data for safe development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>HIPAA-aligned security & compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Interactive Demo</Badge>
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how patients can easily understand their health records through AI-powered explanations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <HealthRecordDemo />
            <QAInterface />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Key Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Built for Healthcare Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-medical transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">FHIR Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Direct connection to EHR systems via standardized FHIR APIs
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-medical transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-secondary/10 w-fit mx-auto mb-4">
                  <Brain className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">AI Explanations</h3>
                <p className="text-sm text-muted-foreground">
                  Natural language Q&A with context-aware responses
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-medical transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  HIPAA-aligned design with audit logs and consent management
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-medical transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-secondary/10 w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Patient-Centered</h3>
                <p className="text-sm text-muted-foreground">
                  Designed for patients with chronic conditions and complex care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Patient Understanding?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the pilot program to help patients better understand their health records through AI-powered explanations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical" size="lg" asChild>
              <a href="/dashboard">View Dashboard</a>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 FHIR-LLM Assistant. Built for healthcare innovation.</p>
            <p className="mt-2">Pilot Program: $40K-60K • Timeline: 10-12 weeks to working demo</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;