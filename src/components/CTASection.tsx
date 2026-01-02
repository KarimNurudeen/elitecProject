import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-[#f0f4f8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto">
          {/* Left - Navy Block */}
          <div className="bg-[#004976] p-12 flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Track Your Service Area
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We provide specialized grease trap cleaning for restaurants and food facilities of all sizes.
              </p>
            </div>
            <Link 
              to="/services" 
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#f5c85d] flex items-center justify-center hover:bg-[#f5c85d] transition-colors group"
            >
              <ArrowRight className="h-5 w-5 text-[#f5c85d] group-hover:text-[#004976]" />
            </Link>
          </div>

          {/* Right - Yellow Block */}
          <div className="bg-[#f5c85d] p-12 flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#004976] mb-4">
                Request a Quote
              </h3>
              <p className="text-[#004976]/80 text-sm leading-relaxed">
                Get a fast, no-obligation quote for professional grease trap cleaning tailored to your facility's needs.
              </p>
            </div>
            <Link 
              to="/service-request" 
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#004976] flex items-center justify-center hover:bg-[#004976] transition-colors group"
            >
              <ArrowRight className="h-5 w-5 text-[#004976] group-hover:text-[#f5c85d]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
