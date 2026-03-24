import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="text-base font-extrabold text-primary-foreground uppercase tracking-wide">Floridana Tropicals</span>
          </div>
          <p className="text-xs text-primary-foreground/50 leading-relaxed font-medium">
            Your barrier island source for expert-curated, salt-hardy Florida native plants. Melbourne Beach, FL.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-extrabold text-primary-foreground uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Plants", "About", "Gallery", "FAQ", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-xs text-primary-foreground/50 hover:text-secondary transition-colors font-medium">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-extrabold text-primary-foreground uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-xs text-primary-foreground/50 font-medium">
              <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> Melbourne Beach, FL 32951
            </p>
            <a href="tel:+13215551234" className="flex items-center gap-2 text-xs text-primary-foreground/50 hover:text-secondary transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> (321) 555-1234
            </a>
            <a href="mailto:info@floridanatropicals.com" className="flex items-center gap-2 text-xs text-primary-foreground/50 hover:text-secondary transition-colors font-medium">
              <Mail className="w-3.5 h-3.5 text-secondary flex-shrink-0" /> info@floridanatropicals.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-[10px] text-primary-foreground/30 font-medium uppercase tracking-wider">© {new Date().getFullYear()} Floridana Tropicals Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
