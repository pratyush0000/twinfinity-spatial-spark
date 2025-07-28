import { Card } from "@/components/ui/card";
import { Cloud, Brain, Users, Lightbulb, Leaf, TrendingUp } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable, secure cloud infrastructure for processing and storing massive geospatial datasets."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced algorithms and ML models for automated analysis and intelligent pattern recognition."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces and workflows designed around user needs and real-world applications."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge research and development to push the boundaries of spatial technology."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmentally conscious solutions that promote sustainable development and conservation."
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Data-driven solutions that deliver quantifiable results and tangible business value."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">We Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our approach fuses cloud computing, AI/ML, and user-centric design to build scalable, 
            intuitive platforms that transform complex geospatial data into actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <Card key={index} className="group p-6 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <approach.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 lg:p-12 border border-border/30">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to Transform Your Spatial Data?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through collaboration, innovation, and sustainable practices, we enable organizations 
              to unlock the full potential of their geospatial assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm text-muted-foreground">✓ Scalable Solutions</div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-sm text-muted-foreground">✓ Expert Support</div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-sm text-muted-foreground">✓ Proven Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;