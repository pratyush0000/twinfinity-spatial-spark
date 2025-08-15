import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Zap, Target, Users } from "lucide-react";

const Leadership = () => {
  const leadershipPoints = [
    {
      icon: Zap,
      title: "Innovative Technology Integration",
      description: "We continuously adopt and adapt the latest advancements in artificial intelligence, cloud computing, and spatial analytics. Our solutions break down the barriers between complex datasets and real-world impact, using intelligent automation and user-centric interfaces."
    },
    {
      icon: Award,
      title: "Proven Track Record and Impact",
      description: "Our portfolio includes impactful collaborations with stakeholders in infrastructure, land management, agriculture, and environment. Our solutions have resulted in tangible, measurable improvements—such as improved data accuracy, faster decision cycles, and cost efficiencies."
    },
    {
      icon: Users,
      title: "User-Centric, Scalable Solutions",
      description: "Every Twinfinity platform and service is designed with the end-user in mind, ensuring our tools are intuitive, scalable, and easy to integrate within existing workflows. This enables our clients to realize immediate benefits and long-term value."
    },
    {
      icon: Target,
      title: "End-to-End Expertise",
      description: "Our capability covers the full project life cycle—from initial consultancy through to solution development, deployment, integration, and client training. Our clients rely on us as a single trusted partner for complete digital transformation."
    },
    {
      icon: Globe,
      title: "Global Collaboration & Knowledge Sharing",
      description: "By forging alliances with national and international partners, we ensure the latest knowledge and best practices are brought to every Twinfinity engagement. We support industry growth through active knowledge transfer, mentorship, and capacity-building."
    }
  ];

  const achievements = [
    "Interactive GIS Dashboards",
    "Before-and-After Mapping",
    "Drone Survey Highlights", 
    "AI-Powered Analytics",
    "Client Testimonials",
    "Global Partnerships"
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Makes Us a <span className="bg-gradient-primary bg-clip-text text-transparent">Leader</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Twinfinity Technologies is more than just a solutions provider—we are your partner on the path 
            to spatial intelligence and sustainable change. Here's what sets us apart in the geospatial industry.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {leadershipPoints.map((point, index) => (
            <Card key={index} className="group p-8 bg-gradient-card border-border/50 hover:shadow-large transition-all duration-500 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <point.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-foreground transition-colors duration-300">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 lg:p-12 border border-border/30 animate-fade-in" style={{animationDelay: "0.8s"}}>
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Visual Storytelling and Case Studies
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
                To demonstrate our impact and leadership, we illustrate our journey with compelling 
                visual elements and real case studies that showcase transformation and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Badge key={index} variant="secondary" className="group p-3 text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default animate-fade-in" style={{animationDelay: `${1 + index * 0.1}s`}}>
                  <CheckCircle className="w-4 h-4 mr-2 text-accent group-hover:scale-110 transition-transform" />
                  {achievement}
                </Badge>
              ))}
            </div>
            
            <div className="pt-6">
              <p className="text-lg font-semibold text-foreground">
                Join us as we redefine what's possible with geospatial data, innovation, and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;