import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      {/* Decorative top bars */}
      <div className="flex">
        <div className="w-1/2 h-8 bg-primary"></div>
        <div className="w-1/2 h-8 bg-[hsl(45,85%,65%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Services Column */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-navy mb-6 border-l-4 border-accent pl-3">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/grease-trap-cleaning" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Grease Trap Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/services/grease-trap-replacement" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Grease Trap Replacement</span>
                </Link>
              </li>
              <li>
                <Link to="/services/grease-trap-repair" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>One-Stop Grease Trap Repair Services</span>
                </Link>
              </li>
              <li>
                <Link to="/services/technical-assistance" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Technical Assistance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Column */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-navy mb-6 border-l-4 border-accent pl-3">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Case Studies</span>
                </Link>
              </li>
              <li>
                <div className="flex items-center text-navy group">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  <span>Resources</span>
                </div>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Link to="/blog" className="flex items-center text-navy/70 hover:text-accent transition-colors group">
                      <ChevronRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="flex items-center text-navy/70 hover:text-accent transition-colors group">
                      <ChevronRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span>Faq's</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/service-request" className="flex items-center text-navy hover:text-accent transition-colors group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>Service Request</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="md:col-span-6">
            <h3 className="text-xl font-bold text-navy mb-6 border-l-4 border-accent pl-3">
              Contact Us
            </h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div>
                <p className="text-navy font-semibold mb-2">
                  1355 Wilson Av. Unit4,<br />
                  Toronto, ON M3M 1H7
                </p>
                <Link to="#" className="flex items-center text-navy hover:text-accent transition-colors group mt-2">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  <span>Get Direction</span>
                </Link>
              </div>

              {/* Phone & Email */}
              <div className="space-y-2">
                <p className="text-navy">
                  <span className="font-semibold">T:</span> +1 416 273 8471
                </p>
                <p className="text-navy">
                  <span className="font-semibold">E:</span> elitecgroups@gmail.com
                </p>
              </div>

              {/* CTA Box */}
              <div className="bg-accent text-white p-6 inline-block">
                <p className="text-sm mb-2">Get Free Estimate</p>
                <p className="text-3xl font-bold">416-273-8471</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-navy hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-navy hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-navy hover:text-accent transition-colors">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
                <a href="#" className="text-navy hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-navy hover:text-accent transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm text-navy">
          <p>Copyright ©{new Date().getFullYear()} Elitec Groups Inc. All Rights Reserved | Designed by: Severs World Network</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};