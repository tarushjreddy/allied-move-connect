import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, MapPin, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    serviceType: "",
    fromLocation: "",
    toLocation: "",
    moveDate: "",
    propertySize: "",
    name: "",
    email: "",
    phone: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 2 hours with your personalized quote.",
    });
    // Reset form
    setFormData({
      serviceType: "",
      fromLocation: "",
      toLocation: "",
      moveDate: "",
      propertySize: "",
      name: "",
      email: "",
      phone: "",
      additionalInfo: ""
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-moving-navy to-moving-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your Free Moving Quote
            </h2>
            <p className="text-xl text-white/90">
              Professional moving estimates in under 2 hours. No hidden fees, no surprises.
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-moving-navy text-center">
                Tell us about your move
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-moving-blue" />
                      Service Type
                    </Label>
                    <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local Removal</SelectItem>
                        <SelectItem value="interstate">Interstate Removal</SelectItem>
                        <SelectItem value="international">International Removal</SelectItem>
                        <SelectItem value="business">Business Move</SelectItem>
                        <SelectItem value="storage">Storage Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertySize">Property Size</Label>
                    <Select value={formData.propertySize} onValueChange={(value) => setFormData({...formData, propertySize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio/1 Bedroom</SelectItem>
                        <SelectItem value="2bedroom">2 Bedroom</SelectItem>
                        <SelectItem value="3bedroom">3 Bedroom</SelectItem>
                        <SelectItem value="4bedroom">4+ Bedroom</SelectItem>
                        <SelectItem value="office">Office/Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fromLocation" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-moving-blue" />
                      Moving From
                    </Label>
                    <Input
                      id="fromLocation"
                      placeholder="Enter suburb or postcode"
                      value={formData.fromLocation}
                      onChange={(e) => setFormData({...formData, fromLocation: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="toLocation">Moving To</Label>
                    <Input
                      id="toLocation"
                      placeholder="Enter suburb or postcode"
                      value={formData.toLocation}
                      onChange={(e) => setFormData({...formData, toLocation: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="moveDate" className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-moving-blue" />
                    Preferred Move Date
                  </Label>
                  <Input
                    id="moveDate"
                    type="date"
                    value={formData.moveDate}
                    onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="04XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Tell us about any special requirements, fragile items, or specific needs..."
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Get My Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;