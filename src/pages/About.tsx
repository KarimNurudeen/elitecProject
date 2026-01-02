import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import aboutWorker from "@/assets/about-worker.jpg";
import customerSubway from "@/assets/customer-subway.png";
import customerScorch from "@/assets/customer-scorch.png";
import customerGreek from "@/assets/customer-greek.png";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-secondary relative">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About</h1>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>»</span>
              <span>About</span>
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <img 
                  src={aboutWorker}
                  alt="Professional grease trap cleaning service"
                  className="w-full h-[600px] object-cover rounded-lg"
                />
              </div>

              {/* Right - Content */}
              <div>
                <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-wide">
                  About Elitec Groups
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                  We care about clean operations and cleaner outcomes.
                </h2>
                <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
                  At Elitec Groups, we're dedicated to the safe and proper disposal of grease waste to keep your business running without disruption. From restaurants to large-scale food processors, we deliver high-quality grease trap cleaning backed by a commitment to excellence and customer-first service. We take pride in doing the job right every time with environmentally responsible practices and a team that treats your kitchen like their own.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Experienced team</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Weekly, Biweekly, or On-Demand</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Complete Service Solutions</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Book, Manage & Track Services Online</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Goal Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Our Vision */}
              <div className="bg-yellow p-10 rounded-lg">
                <h3 className="text-3xl font-bold text-secondary mb-6">Our Vision</h3>
                <p className="text-secondary/90 mb-8 leading-relaxed">
                  We envision a future where grease trap maintenance is effortless, eco-conscious, and fully integrated into every commercial kitchen's operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">Cleaner, safer kitchens</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">Eco-friendly waste solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">Trusted industry partner</span>
                  </div>
                </div>
              </div>

              {/* Our Mission */}
              <div className="bg-background border-2 border-border p-10 rounded-lg">
                <h3 className="text-3xl font-bold text-secondary mb-6">Our Mission</h3>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  To deliver the most dependable grease trap cleaning services that create real value, ensure compliance, and keep our clients running at full capacity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">Fast, flexible service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">Health code compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">Support that cares</span>
                  </div>
                </div>
              </div>

              {/* Our Goal */}
              <div className="bg-secondary p-10 rounded-lg text-white">
                <h3 className="text-3xl font-bold mb-6">Our Goal</h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  To become the go-to grease trap maintenance partner across Canada and beyond — known for reliability, quality, and environmental responsibility.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Consistent service quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Smarter cleaning solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Strong client relationships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Customers Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-secondary text-sm font-semibold mb-4 uppercase tracking-wide">
              Some of Our Happy Customers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-16">
              Trusted by Businesses Like Yours
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mb-16">
              <img src={customerGreek} alt="Mr. Greek Restaurants" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={customerSubway} alt="Subway" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={customerScorch} alt="The Scorch Spot" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={customerGreek} alt="Mr. Greek Restaurants" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>

            {/* CTA Boxes */}
            <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <div className="bg-secondary p-12 text-white text-left">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  Track Your Service Area
                  <ArrowRight className="w-6 h-6" />
                </h3>
                <p className="text-white/90 text-lg">
                  We provide specialized grease trap cleaning for restaurants and food facilities of all sizes.
                </p>
              </div>
              <div className="bg-yellow p-12 text-left">
                <h3 className="text-3xl font-bold text-secondary mb-4 flex items-center gap-3">
                  Request a Quote
                  <ArrowRight className="w-6 h-6 text-secondary" />
                </h3>
                <p className="text-secondary/90 text-lg">
                  Get a fast, no-obligation quote for professional grease trap cleaning tailored to your facility's needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
