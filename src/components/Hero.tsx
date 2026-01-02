import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";

export const Hero = () => {
  return (
    <div className="relative bg-[#f8f8f8] text-foreground overflow-hidden min-h-[640px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elitec Group Service Truck"
          className="w-full h-full object-cover"
        />
        {/* Fade to white on the left to match design */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/85 to-white" />
      </div>

      {/* Decorative circles */}
      <div className="absolute left-[-6rem] top-[30%] w-72 h-72 rounded-full bg-white/70 blur-3xl pointer-events-none" />
      <div className="absolute left-[6%] top-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-accent/90" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-wide">
            Commercial Grease Trap
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-navy leading-tight">
            Cleaning &<br />
            Maintenance
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/services">
              <Button
                size="lg"
                className="gap-2 rounded-full px-8 bg-accent hover:bg-secondary text-white font-semibold shadow-md"
              >
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold shadow-md"
              >
                Get A Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};