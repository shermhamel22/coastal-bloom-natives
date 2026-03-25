import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-14">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        {/* Logo & info */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-secondary" />
            <span className="text-lg font-black text-primary-foreground uppercase tracking-wide">Floridana Tropicals</span>
          </div>
          <p className="text-xs text-primary-foreground/50 leading-relaxed font-medium mb-3">
            info@floridanatropicals.com
          </p>
        </div>

        {/* Business */}
        <div>
          <h4 className="text-xs font-extrabold text-primary-foreground uppercase tracking-wider mb-4">Business</h4>
          <ul className="space-y-2">
            {["Home", "About", "Gallery", "Contact", "Review Us"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="text-xs text-primary-foreground/50 hover:text-secondary transition-colors font-medium">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-extrabold text-primary-foreground uppercase tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2">
            {["Dune & Beach Plants", "Native Trees & Palms", "Pollinator Gardens", "Coastal Consulting", "Salt-Tolerant Species"].map((l) => (
              <li key={l}>
                <a href="#services" className="text-xs text-primary-foreground/50 hover:text-secondary transition-colors font-medium">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-xs font-extrabold text-primary-foreground uppercase tracking-wider mb-4">Service Areas</h4>
          <ul className="space-y-2">
            {["Melbourne Beach", "Indialantic", "Satellite Beach", "Indian Harbour Beach", "Palm Bay"].map((l) => (
              <li key={l} className="text-xs text-primary-foreground/50 font-medium">{l}</li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xs font-extrabold text-primary-foreground uppercase tracking-wider mb-4">Operating Hours</h4>
          <ul className="space-y-1.5">
            {["Mon: 8:00AM - 5:00PM", "Tue: 8:00AM - 5:00PM", "Wed: 8:00AM - 5:00PM", "Thu: 8:00AM - 5:00PM", "Fri: 8:00AM - 5:00PM", "Sat: 9:00AM - 3:00PM", "Sun: Closed"].map((l) => (
              <li key={l} className="text-xs text-primary-foreground/50 font-medium">{l}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-[10px] text-primary-foreground/30 font-medium uppercase tracking-wider">
          © {new Date().getFullYear()} Floridana Tropicals Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
