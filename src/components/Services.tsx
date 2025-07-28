import { Card } from "@/components/ui/card";
import gisIcon from "@/assets/gis-icon.jpg";
import lidarIcon from "@/assets/lidar-icon.jpg";
import modelingIcon from "@/assets/3d-modeling-icon.jpg";
import aiIcon from "@/assets/ai-analytics-icon.jpg";
import consultancyIcon from "@/assets/consultancy-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Custom GIS & Remote Sensing Software",
      description: "Tailored geospatial applications and remote sensing solutions for complex spatial challenges.",
      icon: gisIcon,
      features: ["Custom GIS Applications", "Satellite Data Analysis", "Environmental Monitoring", "Land Use Planning"]
    },
    {
      title: "LiDAR & Drone Mapping", 
      description: "High-precision aerial mapping and surveying using cutting-edge LiDAR and drone technologies.",
      icon: lidarIcon,
      features: ["Aerial Surveying", "Topographic Mapping", "Infrastructure Inspection", "Precision Agriculture"]
    },
    {
      title: "3D Modeling & Photogrammetry",
      description: "Create detailed 3D models and digital twins using advanced photogrammetry techniques.",
      icon: modelingIcon,
      features: ["Digital Twin Creation", "3D Reconstruction", "Virtual Reality Models", "Asset Documentation"]
    },
    {
      title: "AI-powered Spatial Analytics",
      description: "Leverage machine learning and AI to extract actionable insights from spatial data.",
      icon: aiIcon,
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Classification", "Real-time Processing"]
    },
    {
      title: "Consultancy, Training & Capacity Building",
      description: "Expert guidance and knowledge transfer to empower your team with spatial intelligence.",
      icon: consultancyIcon,
      features: ["Strategic Consulting", "Technical Training", "Workflow Optimization", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end geospatial solutions across the entire value chain—from data acquisition 
            and analysis to visualization, integration, and impact delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative p-6 h-full bg-gradient-card hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-secondary/20 p-2">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;