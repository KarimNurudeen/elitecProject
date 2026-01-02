export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: string[];
  benefits: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "grease-trap-cleaning",
    title: "Grease Trap Cleaning",
    shortDescription: "Professional grease trap cleaning services to keep your commercial kitchen compliant and efficient.",
    fullDescription: "Our certified technicians provide comprehensive grease trap cleaning services for restaurants, hotels, and commercial kitchens. We ensure your facility stays compliant with local regulations while maintaining optimal performance.",
    features: [
      "EPA-compliant disposal methods",
      "Complete cleaning and sanitization",
      "Detailed service reports",
      "Scheduled maintenance programs",
      "24/7 emergency service available"
    ],
    process: [
      "Initial assessment and inspection",
      "Complete pump-out of grease and solids",
      "High-pressure cleaning of trap interior",
      "Inspection of all components",
      "Documentation and compliance reporting"
    ],
    benefits: [
      "Prevent costly backups and overflows",
      "Maintain health code compliance",
      "Extend equipment lifespan",
      "Eliminate foul odors",
      "Reduce environmental impact"
    ],
    icon: "Droplets"
  },
  {
    id: "2",
    slug: "grease-trap-repair",
    title: "Grease Trap Repair",
    shortDescription: "Expert repair services to restore your grease trap to peak operating condition.",
    fullDescription: "When your grease trap shows signs of wear or damage, our experienced technicians provide fast, reliable repair services to get your system back online quickly.",
    features: [
      "Comprehensive diagnostics",
      "Quality replacement parts",
      "Same-day emergency repairs",
      "Warranty on all repairs",
      "Preventive maintenance recommendations"
    ],
    process: [
      "System diagnosis and assessment",
      "Identification of problem areas",
      "Repair or replacement of damaged components",
      "System testing and verification",
      "Follow-up inspection"
    ],
    benefits: [
      "Minimize downtime",
      "Avoid costly replacements",
      "Restore optimal performance",
      "Prevent future issues",
      "Expert guidance on maintenance"
    ],
    icon: "Wrench"
  },
  {
    id: "3",
    slug: "technical-assistance",
    title: "Technical Assistance",
    shortDescription: "On-demand technical support and consultation for all your grease trap systems.",
    fullDescription: "Get expert advice and hands-on technical assistance for troubleshooting, optimization, and compliance questions related to your grease management systems.",
    features: [
      "Remote and on-site support",
      "Compliance consulting",
      "System optimization recommendations",
      "Training for staff",
      "Emergency troubleshooting"
    ],
    process: [
      "Initial consultation",
      "System evaluation",
      "Solution development",
      "Implementation support",
      "Ongoing assistance"
    ],
    benefits: [
      "Expert problem-solving",
      "Cost-effective solutions",
      "Regulatory compliance assurance",
      "Improved system efficiency",
      "Peace of mind"
    ],
    icon: "Headset"
  },
  {
    id: "4",
    slug: "installation",
    title: "Installation Services",
    shortDescription: "Professional installation of new grease trap systems for commercial facilities.",
    fullDescription: "From design consultation to final installation, we provide complete grease trap installation services that meet all local codes and regulations.",
    features: [
      "Custom system design",
      "Code-compliant installation",
      "Quality materials and equipment",
      "Comprehensive testing",
      "Staff training included"
    ],
    process: [
      "Site assessment and planning",
      "System design and approval",
      "Professional installation",
      "System testing and commissioning",
      "Documentation and training"
    ],
    benefits: [
      "Proper sizing for your needs",
      "Full code compliance",
      "Efficient operation from day one",
      "Reduced maintenance requirements",
      "Long-term reliability"
    ],
    icon: "Settings"
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};