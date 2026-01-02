import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import customerGreek from "@/assets/customer-greek.png";
import customerSubway from "@/assets/customer-subway.png";
import customerScorch from "@/assets/customer-scorch.png";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import aboutWorker from "@/assets/about-worker.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Restaurant Chain Compliance Success",
      client: "Mr. Greek Restaurants",
      clientLogo: customerGreek,
      category: "Routine Maintenance",
      image: serviceCleaning,
      challenge: "Multiple restaurant locations requiring consistent grease trap maintenance to meet health department regulations.",
      solution: "Implemented a comprehensive scheduled cleaning program across all locations with automated reminders and compliance reporting.",
      results: [
        "100% compliance rate maintained across all locations",
        "50% reduction in emergency service calls",
        "Improved kitchen efficiency and reduced downtime",
      ],
      metrics: {
        locations: "15+",
        frequency: "Monthly",
        satisfaction: 5,
      },
      testimonial: "Elitec Groups has been instrumental in keeping all our locations compliant. Their proactive approach has eliminated emergency issues and reduced our operational costs significantly.",
      author: "Operations Manager, Mr. Greek Restaurants",
    },
    {
      id: 2,
      title: "Fast-Food Franchise Emergency Response",
      client: "Subway",
      clientLogo: customerSubway,
      category: "Emergency Service",
      image: serviceInstallation,
      challenge: "Critical grease trap backup during peak business hours threatening to shut down operations.",
      solution: "Deployed emergency response team within 2 hours, performed immediate cleaning and system assessment, then implemented preventive maintenance plan.",
      results: [
        "2-hour emergency response time",
        "Zero business interruption",
        "Preventive maintenance plan established",
      ],
      metrics: {
        response: "< 2 hours",
        downtime: "0 minutes",
        satisfaction: 5,
      },
      testimonial: "Their emergency response team saved us from a potential shutdown. Professional, fast, and thorough. We now have them on retainer for all our locations.",
      author: "Facility Manager, Subway Franchise",
    },
    {
      id: 3,
      title: "New Restaurant Installation",
      client: "The Scorch Spot",
      clientLogo: customerScorch,
      category: "Installation",
      image: aboutWorker,
      challenge: "New restaurant opening required grease trap installation and setup for ongoing maintenance compliance.",
      solution: "Complete grease trap installation, system design consultation, and establishment of maintenance schedule from day one.",
      results: [
        "Turnkey installation completed on schedule",
        "Compliance achieved before opening",
        "Automated maintenance schedule established",
      ],
      metrics: {
        installTime: "3 days",
        compliance: "100%",
        satisfaction: 5,
      },
      testimonial: "From installation to ongoing maintenance, Elitec Groups made the process seamless. We opened on time with full compliance, and they continue to provide excellent service.",
      author: "Owner, The Scorch Spot",
    },
    {
      id: 4,
      title: "Food Processing Facility Overhaul",
      client: "Industrial Food Processor",
      category: "Large Scale Cleaning",
      image: serviceCleaning,
      challenge: "Large-scale food processing facility with severely neglected grease traps requiring extensive cleaning and system upgrades.",
      solution: "Comprehensive deep cleaning, system assessment, and implementation of custom maintenance program for industrial-scale operations.",
      results: [
        "95% improvement in grease trap efficiency",
        "Compliance with all environmental regulations",
        "Reduced maintenance costs by 40%",
      ],
      metrics: {
        capacity: "5,000+ gallons",
        improvement: "95%",
        satisfaction: 5,
      },
      testimonial: "The team handled our large-scale operation with expertise. The improvement in our system efficiency and compliance has been remarkable.",
      author: "Facilities Director, Food Processing Plant",
    },
    {
      id: 5,
      title: "Hotel Chain Maintenance Program",
      client: "Luxury Hotel Group",
      category: "Scheduled Maintenance",
      image: serviceInstallation,
      challenge: "Hotel chain with multiple kitchen operations needing coordinated maintenance across properties.",
      solution: "Centralized maintenance program with synchronized scheduling, comprehensive reporting, and dedicated account management.",
      results: [
        "Coordinated service across 8 properties",
        "Centralized compliance documentation",
        "25% cost reduction through program optimization",
      ],
      metrics: {
        properties: "8",
        costSavings: "25%",
        satisfaction: 5,
      },
      testimonial: "Managing maintenance across multiple properties was a challenge until Elitec Groups. Their centralized program has simplified everything and saved us significant costs.",
      author: "Property Manager, Hotel Chain",
    },
    {
      id: 6,
      title: "School District Compliance Initiative",
      client: "Metro School District",
      category: "Institutional",
      image: aboutWorker,
      challenge: "Multiple school cafeterias requiring regular grease trap maintenance to meet health department standards.",
      solution: "Coordinated maintenance program across all district locations with scheduling that avoids disruption to school operations.",
      results: [
        "100% compliance across all schools",
        "No disruption to school schedules",
        "Comprehensive reporting for district records",
      ],
      metrics: {
        schools: "25+",
        compliance: "100%",
        satisfaction: 5,
      },
      testimonial: "Elitec Groups works around our school schedules perfectly. Their attention to compliance and documentation has been excellent for our district requirements.",
      author: "Food Services Director, School District",
    },
  ];

  const categories = ["All", "Routine Maintenance", "Emergency Service", "Installation", "Large Scale Cleaning", "Scheduled Maintenance", "Institutional"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Case Studies</h1>
          <div className="text-center text-white/80">
            <span>Home</span> <span className="mx-2">{">>"}</span> <span>Case Studies</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">10,000+</div>
              <div className="text-muted-foreground">Services Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses across various industries maintain compliance, improve efficiency, and reduce costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-white">
                      {study.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {study.clientLogo && (
                      <img 
                        src={study.clientLogo} 
                        alt={study.client}
                        className="h-8 w-auto object-contain"
                      />
                    )}
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm font-medium text-navy">
                    {study.client}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-navy mb-2">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-navy mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-navy mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-navy">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(study.metrics.satisfaction)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow text-yellow" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "{study.testimonial}"
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        — {study.author}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Elitec Groups for their grease trap maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Get Started Today
              </Button>
            </Link>
            <Link to="/service-request">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
