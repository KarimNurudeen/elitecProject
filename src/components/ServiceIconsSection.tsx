import { Link } from "react-router-dom";

export const ServiceIconsSection = () => {
  const services = [
    {
      title: "Grease Trap Cleaning",
      icon: (
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 100 100">
          {/* Person */}
          <circle cx="20" cy="25" r="8" />
          <path d="M20 35 L20 55 M20 42 L12 38 M20 42 L28 38 M20 55 L12 70 M20 55 L28 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          
          {/* Truck */}
          <rect x="45" y="40" width="35" height="20" rx="2"/>
          <rect x="75" y="45" width="10" height="15" rx="2"/>
          <circle cx="55" cy="62" r="5"/>
          <circle cx="75" cy="62" r="5"/>
          
          {/* Grease trap under */}
          <ellipse cx="25" cy="75" rx="15" ry="5" opacity="0.7"/>
          <path d="M15 75 Q25 70 35 75" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      slug: "grease-trap-cleaning",
      bgColor: "bg-primary"
    },
    {
      title: "Grease Trap Replacement",
      icon: (
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 100 100">
          {/* Wrench tilted */}
          <path d="M35 25 L45 35 L40 40 L50 50 L45 55 L35 45 L30 50 L20 40 L25 35 Z" />
          <rect x="48" y="48" width="35" height="12" rx="2" transform="rotate(45 65 54)"/>
          
          {/* Pipe/trap element */}
          <path d="M55 70 L55 85 L75 85 L75 70" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="65" cy="72" r="4"/>
        </svg>
      ),
      slug: "grease-trap-repair",
      bgColor: "bg-accent"
    },
    {
      title: "One-Stop Grease Trap Repair Services",
      icon: (
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 100 100">
          {/* Person */}
          <circle cx="30" cy="25" r="8" />
          <path d="M30 35 L30 55 M30 42 L22 38 M30 42 L38 38 M30 55 L22 70 M30 55 L38 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          
          {/* Toolbox */}
          <rect x="55" y="50" width="30" height="20" rx="2"/>
          <rect x="63" y="45" width="14" height="5" rx="1"/>
          <line x1="55" y1="60" x2="85" y2="60" stroke="currentColor" strokeWidth="2"/>
          <circle cx="62" cy="60" r="2"/>
          <circle cx="78" cy="60" r="2"/>
          
          {/* Building/backdrop */}
          <rect x="60" y="20" width="25" height="25" rx="1" opacity="0.6"/>
          <line x1="65" y1="20" x2="65" y2="45" stroke="currentColor" strokeWidth="1"/>
          <line x1="72" y1="20" x2="72" y2="45" stroke="currentColor" strokeWidth="1"/>
          <line x1="79" y1="20" x2="79" y2="45" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      slug: "grease-trap-installation",
      bgColor: "bg-primary"
    },
    {
      title: "Technical Assistance",
      icon: (
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 100 100">
          {/* Gear */}
          <path d="M50 20 L55 35 L70 35 L58 45 L63 60 L50 50 L37 60 L42 45 L30 35 L45 35 Z"/>
          <circle cx="50" cy="45" r="12"/>
          <circle cx="50" cy="45" r="6" fill="none" stroke="currentColor" strokeWidth="3"/>
          
          {/* Wrench overlapping */}
          <path d="M60 55 L75 70 M75 70 L78 67 M75 70 L72 73" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="62" cy="57" r="5" fill="none" stroke="currentColor" strokeWidth="4"/>
        </svg>
      ),
      slug: "technical-assistance",
      bgColor: "bg-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Service Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={`/services/${service.slug}`}
              className="group text-center"
            >
              <div className={`${service.bgColor} w-48 h-48 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-xl`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors px-2">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};