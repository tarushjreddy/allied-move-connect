import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, MapPin, Award } from "lucide-react";
import heroImage from "@/assets/hero-moving-truck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Professional Removalists & Moving Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Australia's most trusted moving company with 40+ locations nationwide. 
            From local moves to international relocations, we deliver excellence every time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3 h-auto">
              Get Your Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-moving-navy">
              Browse Services
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 p-4 text-center">
              <Star className="h-8 w-8 text-moving-orange mx-auto mb-2" />
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm text-white/80">Customer Rating</div>
            </Card>
            <Card className="bg-white/10 border-white/20 p-4 text-center">
              <Users className="h-8 w-8 text-moving-orange mx-auto mb-2" />
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </Card>
            <Card className="bg-white/10 border-white/20 p-4 text-center">
              <MapPin className="h-8 w-8 text-moving-orange mx-auto mb-2" />
              <div className="text-2xl font-bold">40+</div>
              <div className="text-sm text-white/80">AU Locations</div>
            </Card>
            <Card className="bg-white/10 border-white/20 p-4 text-center">
              <Award className="h-8 w-8 text-moving-orange mx-auto mb-2" />
              <div className="text-2xl font-bold">600+</div>
              <div className="text-sm text-white/80">Global Network</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;