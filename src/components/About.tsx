import { Card } from "@/components/ui/card";
import { Building, Users, Globe, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, label: "Infrastructure Projects", value: "500+" },
    { icon: Users, label: "Expert Team Members", value: "50+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Target, label: "Success Rate", value: "98%" }
  ];

  const sectors = [
    "Infrastructure Development",
    "Urban Planning & Smart Cities", 
    "Agriculture & Food Security",
    "Environmental Management",
    "Disaster Risk Management",
    "Land Governance & Policy"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Who <span className="bg-gradient-secondary bg-clip-text text-transparent">We Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Twinfinity Technologies is a next-generation geospatial solutions company driven by innovation, 
                  technology, and a deep commitment to transforming how spatial data is used in the real world. 
                  Established with the mission to bridge the gap between complex geospatial intelligence and 
                  practical, decision-ready insights, we thrive at the intersection of geospatial information, 
                  data science and cutting-edge technologies.
                </p>
                <p>
                  Our name, Twinfinity, symbolizes our belief in the infinite possibilities of digital twin 
                  technologies—bringing together physical and digital environments to power smarter, more 
                  sustainable decision-making. We comprise experienced technologists, engineers, data scientists, 
                  and visionaries committed to advancing spatial intelligence.
                </p>
                <p>
                  We believe that transformative solutions stem from combining geographic insight with technology, 
                  providing a foundation for smarter and more sustainable communities. Driven by purpose and 
                  powered by expertise, we transform complex geospatial data into actionable insights for 
                  diverse sectors worldwide.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 border border-border/30">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations and communities through cutting-edge geospatial technologies, 
                  transforming data into decisions for a sustainable, resilient, and connected world. 
                  We are dedicated to delivering digital solutions that not only solve today's challenges 
                  but also shape a smarter, more responsible future.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Sectors We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                      <div className="w-2 h-2 bg-gradient-secondary rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group p-6 text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Impact & Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our portfolio includes impactful collaborations with stakeholders in infrastructure, 
                  land management, agriculture, and environment. Our solutions have resulted in tangible, 
                  measurable improvements—such as improved data accuracy, faster decision cycles, and cost efficiencies.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;