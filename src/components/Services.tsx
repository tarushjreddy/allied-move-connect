import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Navigation, Globe, Package, Building, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Local Removals",
    description: "Professional local moving services within your city. Same-day and next-day options available.",
    features: ["Door-to-door service", "Professional packing", "Insurance included", "Same-day options"],
    link: "/local-removals"
  },
  {
    icon: Navigation,
    title: "Interstate Removals",
    description: "Seamless interstate relocations across Australia with our nationwide network.",
    features: ["State-to-state coverage", "Real-time tracking", "Secure transport", "Flexible timing"],
    link: "/interstate-removals"
  },
  {
    icon: Globe,
    title: "International Removals",
    description: "Global relocations to 600+ destinations worldwide with customs assistance.",
    features: ["Customs clearance", "Air & sea freight", "Pet transport", "Document support"],
    link: "/international-removals"
  },
  {
    icon: Package,
    title: "Storage Solutions",
    description: "Secure storage facilities with climate control and 24/7 monitoring.",
    features: ["Climate controlled", "24/7 security", "Short & long term", "Easy access"],
    link: "/storage-solutions"
  },
  {
    icon: Building,
    title: "Business Moves",
    description: "Specialized commercial and office relocations with minimal downtime.",
    features: ["After-hours moves", "IT equipment care", "Minimal downtime", "Project management"],
    link: "/business-moves"
  },
  {
    icon: Building,
    title: "Corporate Services",
    description: "Enterprise-level relocations and employee relocation programs.",
    features: ["Employee programs", "Global coordination", "Dedicated support", "Volume discounts"],
    link: "/corporate-services"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-moving-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-moving-navy mb-6">
            Complete Moving Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From local house moves to international corporate relocations, we provide comprehensive moving services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-moving-blue to-moving-navy rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-moving-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-moving-orange rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-moving-blue group-hover:text-white transition-all duration-300 mt-4">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;