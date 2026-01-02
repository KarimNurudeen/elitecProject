import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { contactService } from "@/services/contactService";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Mutation for submitting contact form
  const mutation = useMutation({
    mutationFn: contactService.submitContactForm,
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: (error: any) => {
      // Provide helpful error message with alternative contact methods
      const isEmailError = error.message?.includes('nodename') || error.message?.includes('SMTP');

      toast({
        title: isEmailError ? "Email Service Unavailable" : "Error",
        description: isEmailError
          ? "We're experiencing technical difficulties with our contact form. Please email us directly at elitecgroups@gmail.com or call +1 416 273 8471."
          : error.message || "Failed to send message. Please try emailing us directly at elitecgroups@gmail.com",
        variant: "destructive",
        duration: 8000, // Show longer for important message
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Contact</h1>
          <div className="text-center text-white/80">
            <span>Home</span> <span className="mx-2">{">>"}</span> <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Get in touch section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Get in touch with us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Email</h3>
                <p className="text-muted-foreground">elitecgroups@gmail.com</p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Phone Number</h3>
                <p className="text-muted-foreground">+1 416 273 8471</p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                <p className="text-muted-foreground">
                  1355 Wilson Av. Unit4,<br />
                  Toronto, ON., M3M 1H7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Google Map */}
            <div className="w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.3198896038817!2d-79.47590448450068!3d43.72924157911984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b32e0c0b0c0c1%3A0x4b0b5b5b5b5b5b5b!2s1355%20Wilson%20Ave%20%234%2C%20North%20York%2C%20ON%20M3M%201H7!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-navy mb-8">Let's have a chat</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Enter your name</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="pr-10"
                      required
                    />
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Enter your email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="pr-10"
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>


                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Enter subject"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message"
                    rows={5}
                    required
                  />
                </div>



                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={mutation.isPending}
                  className="w-full bg-yellow text-navy hover:bg-yellow/90 font-semibold"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
