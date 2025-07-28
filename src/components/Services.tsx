import { Card } from "@/components/ui/card";
import gisIcon from "@/assets/gis-icon.jpg";
import lidarIcon from "@/assets/lidar-icon.jpg";
import modelingIcon from "@/assets/3d-modeling-icon.jpg";
import aiIcon from "@/assets/ai-analytics-icon.jpg";
import consultancyIcon from "@/assets/consultancy-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Custom Solution Development & Digital Platforms",
      description: "Next-generation applications for GIS, Remote Sensing, LiDAR, Photogrammetry, Drone Mapping, and Spatial Data Analytics, tailored to your unique challenges.",
      icon: gisIcon,
      features: ["Custom GIS Applications", "Satellite Data Analysis", "Environmental Monitoring", "Digital Platform Development"]
    },
    {
      title: "LiDAR & Drone Mapping Solutions", 
      description: "High-precision aerial mapping and surveying using cutting-edge LiDAR and drone technologies for comprehensive spatial data acquisition.",
      icon: lidarIcon,
      features: ["Aerial Surveying", "Topographic Mapping", "Infrastructure Inspection", "Precision Agriculture"]
    },
    {
      title: "3D Modeling & Photogrammetry",
      description: "Create detailed 3D models and digital twins using advanced photogrammetry techniques for immersive spatial visualization.",
      icon: modelingIcon,
      features: ["Digital Twin Creation", "3D Reconstruction", "Virtual Reality Models", "Asset Documentation"]
    },
    {
      title: "Advanced Data Analytics & AI",
      description: "Specializing in acquiring, processing, analyzing, visualizing, and managing both spatial and non-spatial data, driven by AI and machine learning.",
      icon: aiIcon,
      features: ["Predictive Analytics", "Pattern Recognition", "Cloud Computing", "Real-time Processing"]
    },
    {
      title: "Project Execution & System Integration",
      description: "End-to-end project oversight, integration, consultancy, and measurable project outcomes from conception to deployment and ongoing support.",
      icon: consultancyIcon,
      features: ["System Integration", "Project Management", "Technical Consulting", "Deployment Support"]
    },
    {
      title: "Capacity Building & Training",
      description: "Knowledge transfer, hands-on training, and workshops to ensure in-house mastery and enduring impact for your team.",
      icon: consultancyIcon,
      features: ["Technical Training", "Knowledge Transfer", "Workforce Development", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Twinfinity Technologies delivers a comprehensive array of services and solutions spanning 
            the entire geospatial value chain. From custom solution development to project execution 
            and capacity building, we provide end-to-end solutions tailored for government agencies, 
            private enterprises, and international organizations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative p-6 h-full bg-gradient-card hover:shadow-medium transition-all duration-500 border-border/50 hover:border-primary/20 hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-secondary/20 p-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
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