import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Wrench, Headset, Settings } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: string;
}

const iconMap: { [key: string]: any } = {
  Droplets,
  Wrench,
  Headset,
  Settings,
};

export const ServiceCard = ({ title, description, slug, icon }: ServiceCardProps) => {
  const Icon = iconMap[icon] || Droplets;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
      <CardHeader>
        <div className="mb-4 bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="h-7 w-7 text-accent" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={`/services/${slug}`}>
          <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
            <span className="text-accent font-semibold">Learn More</span>
            <ArrowRight className="h-4 w-4 ml-2 text-accent group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};