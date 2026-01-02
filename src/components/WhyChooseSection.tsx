import whyChoose1 from "@/assets/why-choose-1.jpg";
import whyChoose2 from "@/assets/why-choose-2.png";
import whyChoose3 from "@/assets/why-choose-3.jpg";

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              Why Choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              We Keep Kitchens Clean, Compliant, and Operational Always
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Whether you run a bustling restaurant or a large-scale food processing facility, Elitec Groups provides expert grease trap cleaning services that keep your operation running smoothly. Our professional team works around your schedule, ensuring your kitchen stays efficient, hygienic, and fully compliant with health regulations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Commercial Kitchen Compliance Cleaning</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Routine & Emergency Services</h3>
              </div>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={whyChoose1}
                alt="Grease trap equipment"
                className="w-full h-56 object-cover rounded-lg"
              />
              <img 
                src={whyChoose3}
                alt="In-ground grease trap installation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={whyChoose2}
                alt="Grease trap cutaway view"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src={whyChoose1}
                alt="Professional grease trap service"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};