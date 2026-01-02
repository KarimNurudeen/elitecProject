import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderOverlay } from "./components/Loader";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import ServiceRequest from "./pages/ServiceRequest";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on initial load and briefly on route changes
    setLoading(true);
    // Keep it visible long enough for the animation to fully appear before fading
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoaderOverlay />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-request" element={<ServiceRequest />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
