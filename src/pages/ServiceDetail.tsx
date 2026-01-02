import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground">{service.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-accent">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="pt-1">{step}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Request This Service?</h3>
                <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                  Get in touch with us today to schedule your {service.title.toLowerCase()} service.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                    Request Service
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;