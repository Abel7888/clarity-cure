import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit">
                Healthcare Innovation
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Make Medical Records
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Patient-Friendly
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                AI-powered explanations help patients understand their health records. 
                Connect via FHIR APIs and transform complex medical data into clear, actionable insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg px-8">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">10-12</div>
                <div className="text-sm text-muted-foreground">Weeks to Demo</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">$40K-60K</div>
                <div className="text-sm text-muted-foreground">Pilot Cost</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">HIPAA</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <img 
                src={heroImage} 
                alt="Healthcare dashboard showing patient records and AI explanations"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-background rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Processing Health Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};