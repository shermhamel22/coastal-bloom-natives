import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "PLANTS", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="#" className="text-xl font-black uppercase tracking-tight text-primary-foreground">
          Floridana <span className="text-secondary">Tropicals</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[13px] font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="px-5 py-2.5 bg-primary text-primary-foreground text-[13px] font-bold uppercase tracking-wider rounded hover:brightness-110 transition">
            Get Free Quote
          </a>
          <a href="tel:+13215551234" className="flex items-center gap-2 px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground text-[13px] font-bold rounded hover:bg-primary-foreground/10 transition">
            <Phone className="w-3.5 h-3.5" /> (321) 555-1234
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-foreground border-t border-primary-foreground/10 pb-6">
          <ul className="flex flex-col items-center gap-3 pt-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-[13px] font-bold text-primary-foreground/80 hover:text-primary-foreground tracking-wide">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-3 mt-4">
            <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2.5 bg-primary text-primary-foreground text-[13px] font-bold uppercase tracking-wider rounded">
              Get Free Quote
            </a>
            <a href="tel:+13215551234" className="flex items-center gap-2 text-[13px] font-bold text-primary-foreground/80">
              <Phone className="w-3.5 h-3.5" /> (321) 555-1234
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
