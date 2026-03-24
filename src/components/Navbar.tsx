import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Plants", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-display text-xl font-bold text-primary-foreground tracking-wide">
          Floridana <span className="text-secondary">Tropicals</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 hover:text-secondary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+13215551234" className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90 hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" /> (321) 555-1234
          </a>
          <a href="#contact" className="px-5 py-2.5 bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider rounded-md hover:brightness-110 transition">
            Free Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-foreground/95 backdrop-blur-md border-t border-primary-foreground/10 pb-6">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 hover:text-secondary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-3 mt-4">
            <a href="tel:+13215551234" className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
              <Phone className="w-4 h-4" /> (321) 555-1234
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2.5 bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider rounded-md">
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
