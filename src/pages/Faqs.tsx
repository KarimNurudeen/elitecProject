import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CTASection } from "@/components/CTASection";
import { User, Mail, MessageSquare, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const Faqs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Question Submitted!",
      description: "We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "What services does Elitec Groups offer?",
      answer: "We specialize in grease trap cleaning and preventive maintenance for restaurants, food processing facilities, and other commercial kitchens. Our services include one-time cleanings, scheduled maintenance, emergency response, and compliance reporting."
    },
    {
      question: "How often should I clean my grease trap?",
      answer: "The frequency of cleaning depends on the size of your grease trap and your kitchen's usage. Generally, smaller traps (up to 500 gallons) need cleaning every 1-3 months, while larger traps may need cleaning monthly or more frequently. We can assess your specific needs and recommend a maintenance schedule."
    },
    {
      question: "Do you provide emergency grease trap services?",
      answer: "Yes, we offer 24/7 emergency grease trap cleaning services. If you have a backup or overflow, call us immediately and we'll dispatch a team to your location as quickly as possible."
    },
    {
      question: "What types of businesses do you serve?",
      answer: "We serve restaurants, cafes, food trucks, commercial kitchens, food processing facilities, hotels, hospitals, schools, and any business that requires grease trap maintenance."
    },
    {
      question: "Are your cleaning methods environmentally friendly?",
      answer: "Yes, we use environmentally safe cleaning methods and dispose of waste according to all local and federal regulations. We're committed to protecting the environment while providing effective cleaning services."
    },
    {
      question: "Can I schedule services online?",
      answer: "Yes, you can schedule services through our online service request form or by calling us directly. We'll confirm your appointment and provide reminders before your scheduled service."
    },
    {
      question: "Do you offer service reports or documentation?",
      answer: "Yes, we provide detailed service reports after each cleaning, including photos, measurements, and compliance documentation. These reports can help you maintain compliance with local health and safety regulations."
    },
    {
      question: "Is your team trained and certified?",
      answer: "Absolutely. All our technicians are fully trained, certified, and insured. We stay up-to-date with the latest industry standards and regulations to ensure the highest quality service."
    },
    {
      question: "What areas do you currently serve?",
      answer: "We primarily serve the Greater Toronto Area and surrounding regions. Contact us to confirm if we service your specific location, as we're expanding our service area regularly."
    },
    {
      question: "How do I get a quote?",
      answer: "You can request a quote by filling out our online form, calling us at 416-273-8471, or emailing us. We'll provide a detailed, no-obligation quote within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Faq's</h1>
          <div className="text-center text-white/80">
            <span>Home</span> <span className="mx-2">{">>"}</span> <span>Faq's</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - FAQ Accordion */}
            <div>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger
                        className={cn(
                          "flex flex-1 items-center justify-between py-6 font-semibold text-navy hover:no-underline transition-all group"
                        )}
                      >
                        <span className="text-left pr-4">{faq.question}</span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-navy group-data-[state=open]:hidden">
                          <Plus className="h-5 w-5" />
                        </div>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-navy hidden group-data-[state=open]:flex">
                          <Minus className="h-5 w-5" />
                        </div>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right - Contact Form */}
            <div>
              <p className="text-accent text-sm font-semibold mb-2">Ask Here</p>
              <h2 className="text-3xl font-bold text-navy mb-8">Don't Get Answers Then Ask Here.</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-navy">Enter your name</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="bg-accent/10 border-accent/20 pl-10"
                      required
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-navy">Enter your email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="bg-accent/10 border-accent/20 pl-10"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-navy">Enter your message</Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message"
                      className="bg-accent/10 border-accent/20 pl-10 min-h-[120px]"
                      required
                    />
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-accent" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-yellow text-navy hover:bg-yellow/90 font-semibold"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Faqs;
