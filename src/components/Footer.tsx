import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-moving-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Allied Moving Services</h3>
            <p className="text-white/80 mb-6">
              Australia's most trusted moving company with over 40 locations nationwide and 600+ global destinations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-moving-orange" />
                <span>1800 ALLIED (254 433)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-moving-orange" />
                <span>info@allied.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-moving-orange" />
                <span>Mon-Fri 7AM-7PM, Sat 8AM-4PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-moving-orange transition-colors">Local Removals</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Interstate Removals</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">International Removals</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Storage Solutions</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Business Moves</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Corporate Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Locations</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-moving-orange transition-colors">Sydney</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Melbourne</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Brisbane</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Perth</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Adelaide</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">All Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-moving-orange transition-colors">Moving Guide</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Moving Checklist</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Packing Tips</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Moving Calculator</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-moving-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2024 Allied Moving Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-white/60 text-sm">
              <a href="#" className="hover:text-moving-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-moving-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-moving-orange transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;