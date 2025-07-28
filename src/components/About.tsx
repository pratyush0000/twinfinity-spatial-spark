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
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Who <span className="bg-gradient-secondary bg-clip-text text-transparent">We Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Twinfinity Technologies is a next-generation geospatial solutions company dedicated to 
                  transforming how spatial data powers real-world decisions. At the heart of our identity 
                  is the belief in the limitless potential of digital twins—blending physical and digital 
                  environments to build smarter, more sustainable futures.
                </p>
                <p>
                  Our multidisciplinary team combines expertise in GIS, Remote Sensing, LiDAR, Photogrammetry, 
                  Drone Mapping, and Spatial Analytics to create cutting-edge solutions for complex spatial challenges.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Sectors We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full"></div>
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-border/50">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering government bodies, enterprises, and global organizations to turn complex 
                  geospatial data into actionable insights—driving measurable impact and smarter decisions 
                  for a sustainable future.
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