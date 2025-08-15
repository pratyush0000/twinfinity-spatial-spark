import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital twin technology and geospatial mapping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Empowering Decisions Through{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Spatial Intelligence
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Transforming how spatial data powers real-world decisions through cutting-edge geospatial solutions, 
                digital twins, and AI-powered analytics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="text-secondary-foreground">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="relative bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <div className="space-y-4 text-primary-foreground">
                  <h3 className="text-2xl font-semibold">Next-Generation Solutions</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• GIS & Remote Sensing</li>
                    <li>• LiDAR & Drone Mapping</li>
                    <li>• 3D Modeling & Photogrammetry</li>
                    <li>• AI-powered Spatial Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements - drone-like animations */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-drift"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-hover-lift" style={{animationDelay: "2s"}}></div>
      <div className="absolute top-1/2 left-1/6 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-data-pulse" style={{animationDelay: "4s"}}></div>
      <div className="absolute bottom-1/4 right-1/6 w-18 h-18 bg-accent/30 rounded-full blur-xl animate-drift" style={{animationDelay: "6s"}}></div>
    </section>
  );
};

export default Hero;