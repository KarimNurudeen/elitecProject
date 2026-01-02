import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to our mailing list.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Logo */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              {/* Logo Geometric Design */}
              <div className="mb-8 flex justify-center items-center">
                <svg 
                  width="400" 
                  height="120" 
                  viewBox="0 0 400 120" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[400px] h-auto"
                >
                  {/* Horizontal line */}
                  <line 
                    x1="15" 
                    y1="60" 
                    x2="385" 
                    y2="60" 
                    stroke="#00baee" 
                    strokeWidth="2.5"
                  />
                  {/* Left diamond - light blue solid */}
                  <path 
                    d="M60 30 L90 60 L60 90 L30 60 Z" 
                    fill="#00baee"
                  />
                  {/* Middle diamond - dark blue solid */}
                  <path 
                    d="M170 30 L200 60 L170 90 L140 60 Z" 
                    fill="#004976"
                  />
                  {/* Right diamond - light blue outline */}
                  <path 
                    d="M280 30 L310 60 L280 90 L250 60 Z" 
                    fill="none"
                    stroke="#00baee"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              {/* Company Name */}
              <h1 className="text-6xl md:text-7xl font-bold text-[#00baee] tracking-tight leading-tight">
                ELITEC GROUP INC.
              </h1>
            </div>
          </div>

          {/* Right - Newsletter Form */}
          <div>
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              Get Updates & Offers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Join our mailing list for the latest news and service deals.
            </h2>
            
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-lg">
              <Input 
                type="email"
                placeholder="Enter email address...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-r-none border-r-0 h-14 text-base"
              />
              <Button 
                type="submit"
                className="rounded-l-none bg-[hsl(45,100%,70%)] hover:bg-[hsl(45,100%,60%)] text-primary font-semibold px-8 h-14"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};