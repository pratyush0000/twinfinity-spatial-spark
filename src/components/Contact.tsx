import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

const Contact = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [pocOpen, setPocOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Let's Build the Future with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Spatial Intelligence
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform your spatial data into actionable insights? 
                Connect with our experts and discover how we can empower your decisions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-muted-foreground">info@twinfinity.tech</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Call Us</div>
                  <div className="text-muted-foreground">+91 7838751387</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Visit Us</div>
                  <div className="text-muted-foreground">Global Headquarters<br />Innovation District</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="group" onClick={() => setDemoOpen(true)}>
                Demonstration
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setConsultationOpen(true)}>
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-medium">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Get Started Today</h3>
                  <p className="text-muted-foreground">
                    Join leading organizations using spatial intelligence for better decisions
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full p-4 h-auto flex flex-col items-start hover:bg-muted/50 transition-colors"
                    onClick={() => setConsultationOpen(true)}
                  >
                    <div className="font-medium text-foreground mb-1">Free Consultation</div>
                    <div className="text-sm text-muted-foreground">
                      Discuss your spatial data challenges with our experts
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full p-4 h-auto flex flex-col items-start hover:bg-muted/50 transition-colors"
                    onClick={() => setDemoOpen(true)}
                  >
                    <div className="font-medium text-foreground mb-1">Custom Demo</div>
                    <div className="text-sm text-muted-foreground">
                      See our solutions in action with your specific use case
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full p-4 h-auto flex flex-col items-start hover:bg-muted/50 transition-colors"
                    onClick={() => setPocOpen(true)}
                  >
                    <div className="font-medium text-foreground mb-1">Proof of Concept</div>
                    <div className="text-sm text-muted-foreground">
                      Test our technology with a small-scale pilot project
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <ConsultationForm 
          isOpen={consultationOpen} 
          onClose={() => setConsultationOpen(false)} 
          type="consultation" 
        />
        <ConsultationForm 
          isOpen={demoOpen} 
          onClose={() => setDemoOpen(false)} 
          type="demo" 
        />
        <ConsultationForm 
          isOpen={pocOpen} 
          onClose={() => setPocOpen(false)} 
          type="poc" 
        />
      </div>
    </section>
  );
};

export default Contact;