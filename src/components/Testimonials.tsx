import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import familyImage from "@/assets/happy-family-moving.jpg";

const testimonials = [
  {
    name: "Sarah & Mark Thompson",
    location: "Melbourne to Brisbane",
    service: "Interstate Removal",
    rating: 5,
    text: "Allied made our interstate move seamless. The team was professional, punctual, and handled our belongings with care. Couldn't have asked for a better experience!",
    image: familyImage
  },
  {
    name: "David Chen",
    location: "Sydney CBD",
    service: "Business Move",
    rating: 5,
    text: "Fantastic service for our office relocation. They worked over the weekend to minimize downtime and had us operational by Monday morning. Highly recommend!",
    image: null
  },
  {
    name: "Emma Williams",
    location: "Perth to London",
    service: "International Removal",
    rating: 5,
    text: "Moving internationally was stressful until we found Allied. They handled everything from packing to customs clearance. Professional service from start to finish.",
    image: null
  },
  {
    name: "Michael & Lisa Roberts",
    location: "Adelaide",
    service: "Local Removal + Storage",
    rating: 5,
    text: "Used Allied for both our move and storage needs. The climate-controlled facility gave us peace of mind, and the moving team was exceptional. Great value for money!",
    image: null
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-moving-navy mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers have to say about their Allied moving experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-moving-orange fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div className={testimonial.image ? "" : "ml-0"}>
                    <div className="font-semibold text-moving-navy">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-moving-blue font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-moving-light-blue rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-moving-navy">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-moving-navy">15,000+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-moving-navy">99.8%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;