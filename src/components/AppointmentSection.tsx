import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import appointmentImage from "@/assets/appointment-grease-trap.png";

export const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    subject: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", email: "", date: "", subject: "" });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Navy Background Block */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#254D70]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Grease Trap Image */}
          <div className="relative flex justify-center">
            <img 
              src={appointmentImage}
              alt="Grease trap equipment"
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>

          {/* Right - Form */}
          <div className="bg-white p-12 rounded-lg shadow-xl max-w-lg mx-auto w-full">
            <p className="text-accent text-sm font-semibold mb-2">
              Make Appointment
            </p>
            <h2 className="text-4xl font-bold text-primary mb-8">
              Make An Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full h-14 px-4 pr-12 bg-white border border-gray-200 rounded-md text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent"
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              
              {/* Email Input */}
              <div className="relative">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full h-14 px-4 pr-12 bg-white border border-gray-200 rounded-md text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date Input */}
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Date"
                    value={formData.date}
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                    className="w-full h-14 px-4 pr-12 bg-white border border-gray-200 rounded-md text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                
                {/* Subject Dropdown */}
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger className="h-14 px-4 bg-white border border-gray-200 rounded-md text-primary focus:ring-0 focus:ring-offset-0 focus:border-accent">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200">
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="home-cleaning">Home Cleaning</SelectItem>
                    <SelectItem value="car-cleaning">Car Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-[#004976] font-bold h-14 text-base rounded-md"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
