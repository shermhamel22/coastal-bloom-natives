import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-14">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-secondary" />
            <span className="font-display text-lg font-bold text-primary-foreground">Floridana Tropicals</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Your barrier island source for expert-curated, salt-hardy Florida native plants. Melbourne Beach, FL.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Plants", "About", "Gallery", "FAQ", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" /> Melbourne Beach, FL 32951
            </p>
            <a href="tel:+13215551234" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 text-secondary flex-shrink-0" /> (321) 555-1234
            </a>
            <a href="mailto:info@floridanatropicals.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 text-secondary flex-shrink-0" /> info@floridanatropicals.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Floridana Tropicals Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
