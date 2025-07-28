import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Twinfinity Technologies</div>
            <p className="text-background/80 mb-4 max-w-md">
              Empowering decisions through spatial intelligence. Building smarter, 
              more sustainable futures with cutting-edge geospatial solutions.
            </p>
            <div className="text-sm text-background/60">
              © 2024 Twinfinity Technologies. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">GIS & Remote Sensing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">LiDAR & Drone Mapping</a></li>
              <li><a href="#" className="hover:text-background transition-colors">3D Modeling</a></li>
              <li><a href="#" className="hover:text-background transition-colors">AI Analytics</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Consultancy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Our Services</a></li>
              <li><a href="#approach" className="hover:text-background transition-colors">Our Approach</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-background/60 mb-4 md:mb-0">
            Building the future with spatial intelligence
          </div>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;