import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Droplets, Settings, Wrench, Headset } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceTechnical from "@/assets/service-technical.jpg";
import serviceDrain from "@/assets/service-drain.jpg";
import servicePlumbing from "@/assets/service-plumbing.jpg";

const servicesData = [
  {
    id: 1,
    title: "Grease Trap Cleaning",
    slug: "grease-trap-cleaning",
    image: serviceCleaning,
    icon: Droplets,
    iconColor: "bg-primary",
  },
  {
    id: 2,
    title: "Grease Trap Replacement",
    slug: "grease-trap-installation",
    image: serviceInstallation,
    icon: Droplets,
    iconColor: "bg-primary",
  },
  {
    id: 3,
    title: "One-Stop Grease Trap Repair Services",
    slug: "grease-trap-repair",
    image: serviceRepair,
    icon: Settings,
    iconColor: "bg-cyan-400",
  },
  {
    id: 4,
    title: "Technical Assistance",
    slug: "technical-assistance",
    image: serviceTechnical,
    icon: Headset,
    iconColor: "bg-yellow",
  },
  {
    id: 5,
    title: "Expert Drain Snaking Services",
    slug: "grease-trap-cleaning",
    image: serviceDrain,
    icon: Settings,
    iconColor: "bg-cyan-400",
  },
  {
    id: 6,
    title: "Commercial Plumbing Solutions",
    slug: "technical-assistance",
    image: servicePlumbing,
    icon: Wrench,
    iconColor: "bg-cyan-400",
  },
];

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    subject: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.date || !formData.subject) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    setFormData({
      name: "",
      email: "",
      date: "",
      subject: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-secondary text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>»</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Icon Badge */}
                      <div className={`absolute bottom-4 right-4 ${service.iconColor} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: `url(${serviceDrain})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto bg-white p-10 rounded-lg shadow-2xl">
            <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
              Need urgent help?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              Request an emergency service or schedule an appointment today.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full h-14 px-4 bg-muted/30 border-0 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="relative">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-14 px-4 bg-muted/30 border-0 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="h-14 px-4 bg-muted/30 border-0 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
                
                <Select 
                  value={formData.subject} 
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  required
                >
                  <SelectTrigger className="h-14 px-4 bg-muted/30 border-0 rounded focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="grease-trap-cleaning">Grease Trap Cleaning</SelectItem>
                    <SelectItem value="grease-trap-replacement">Grease Trap Replacement</SelectItem>
                    <SelectItem value="grease-trap-repair">Grease Trap Repair</SelectItem>
                    <SelectItem value="technical-assistance">Technical Assistance</SelectItem>
                    <SelectItem value="drain-snaking">Drain Snaking Services</SelectItem>
                    <SelectItem value="commercial-plumbing">Commercial Plumbing</SelectItem>
                    <SelectItem value="emergency-service">Emergency Service</SelectItem>
                    <SelectItem value="scheduled-maintenance">Scheduled Maintenance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold h-14 text-lg rounded transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Boxes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto shadow-lg">
            {/* Track Service Area */}
            <div className="bg-secondary text-white p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Track Your Service Area</h3>
                <p className="text-white/90">
                  We provide specialized grease trap cleaning for restaurants and food facilities of all sizes.
                </p>
              </div>
              <button className="mt-8 w-12 h-12 bg-yellow rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-secondary text-xl">→</span>
              </button>
            </div>

            {/* Request Quote */}
            <div className="bg-yellow text-navy p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Request a Quote</h3>
                <p className="text-navy/90">
                  Get a fast, no-obligation quote for professional grease trap cleaning tailored to your facility's needs.
                </p>
              </div>
              <button className="mt-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;