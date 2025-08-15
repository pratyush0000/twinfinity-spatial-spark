import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a94170c3-9147-4c15-818d-d76d7ff50ec6.png" 
              alt="Twinfinity Technologies Logo"
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Twinfinity Technologies
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                Pvt Ltd
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#approach" className="text-foreground hover:text-primary transition-colors">Our Approach</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button variant="gradient" size="sm">Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#approach" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Our Approach</a>
            <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Contact</a>
            <div className="px-3 py-2">
              <Button variant="gradient" size="sm" className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;