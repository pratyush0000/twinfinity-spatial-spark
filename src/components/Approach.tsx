import { Card } from "@/components/ui/card";
import { Cloud, Brain, Users, Lightbulb, Leaf, TrendingUp } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Users,
      title: "User-Centric Design",
      description: "We build platforms and tools that are intuitive, scalable, and tailored to real user needs, ensuring immediate benefits and long-term value."
    },
    {
      icon: Users,
      title: "Collaborative Partnerships",
      description: "We actively collaborate with industry leaders, academic institutions, and international organizations to drive innovation and global capacity building."
    },
    {
      icon: Brain,
      title: "Technology Transfer & Upskilling",
      description: "We provide training, knowledge sharing, and technical support to build in-house capabilities for our clients and partners."
    },
    {
      icon: TrendingUp,
      title: "Agility and Quality Excellence",
      description: "Our agile workflows, quality benchmarks, and focus on measurable impact ensure timely delivery and long-term value."
    },
    {
      icon: Cloud,
      title: "Advanced Technology Integration",
      description: "We continuously adopt the latest advancements in AI, cloud computing, and spatial analytics to break barriers between complex datasets and real-world impact."
    },
    {
      icon: Leaf,
      title: "Commitment to Sustainability",
      description: "We integrate global sustainability objectives into every engagement, helping organizations demonstrate positive environmental and social impact."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">We Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Innovation is at the heart of everything we do. We combine powerful data science with cloud computing, 
            artificial intelligence, and machine learning to solve real-world challenges. Our methodology is centered 
            around user-centric design, collaborative partnerships, technology transfer, and agility with quality excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <Card key={index} className="group p-6 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <approach.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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