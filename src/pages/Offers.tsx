import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Percent, Calendar, Star } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "New Customer Special",
      description: "Get 20% off your first grease trap cleaning service",
      discount: "20% OFF",
      validUntil: "December 31, 2024",
      featured: true,
    },
    {
      id: 2,
      title: "Maintenance Package",
      description: "Sign up for quarterly cleaning and save 15% on all services",
      discount: "15% OFF",
      validUntil: "Ongoing",
      featured: true,
    },
    {
      id: 3,
      title: "Refer a Friend",
      description: "Get $50 off your next service when you refer a new customer",
      discount: "$50 OFF",
      validUntil: "Ongoing",
      featured: false,
    },
    {
      id: 4,
      title: "Emergency Service Discount",
      description: "10% off emergency grease trap repairs for commercial facilities",
      discount: "10% OFF",
      validUntil: "Limited Time",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Save on professional grease trap services with our exclusive promotions
          </p>
        </div>
      </div>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offers.map((offer) => (
              <Card 
                key={offer.id} 
                className={`relative overflow-hidden ${
                  offer.featured ? 'border-2 border-accent' : ''
                }`}
              >
                {offer.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg">
                      <Percent className="h-5 w-5" />
                      <span className="font-bold text-xl">{offer.discount}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="w-full" variant={offer.featured ? "default" : "outline"}>
                      Claim This Offer
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Terms */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-3">Terms & Conditions</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Offers cannot be combined with other promotions</li>
              <li>• New customer discount applies to first-time customers only</li>
              <li>• Referral rewards issued after referred customer completes first service</li>
              <li>• Maintenance package requires minimum 6-month commitment</li>
              <li>• All offers subject to change or cancellation without notice</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;