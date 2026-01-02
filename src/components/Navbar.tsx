import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const resourcesItems = [
    { name: "Blog", href: "/blog" },
    { name: "FAQ's", href: "/faqs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Elitec Group Inc." className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent transition-colors"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-40 bg-white border border-border rounded-lg shadow-lg py-2">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-navy hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/service-request"
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isActive('/service-request') ? "text-accent" : "text-navy"
              }`}
            >
              Service Request
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-accent/10 text-accent"
                    : "text-navy hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Resources */}
            <div className="px-4">
              <div className="text-sm font-semibold text-navy mb-2">Resources</div>
              {resourcesItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block pl-4 py-2 text-sm text-navy hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/service-request"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/service-request')
                  ? "bg-accent/10 text-accent"
                  : "text-navy hover:bg-muted"
              }`}
            >
              Service Request
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};