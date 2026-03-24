import { Phone, MapPin } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-20 lg:py-28 bg-primary">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary-foreground mb-2">
        Ready to Take the Next Step?
      </h2>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary-foreground mb-8">
        Get a Free Quote Today!
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:+13215551234" className="btn-primary">
          <Phone className="w-4 h-4" /> Call (321) 555-1234
        </a>
        <a href="#hero" className="btn-outline-light">
          <MapPin className="w-4 h-4" /> Get Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
