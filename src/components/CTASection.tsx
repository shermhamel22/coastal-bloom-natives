import { Phone, MapPin, Leaf } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-20 lg:py-28 bg-primary">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <Leaf className="w-10 h-10 text-secondary mx-auto mb-4" />
      <p className="section-label text-secondary/80 mb-3">Ready to Transform Your Landscape?</p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
        Get Your Free Coastal Consultation Today
      </h2>
      <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
        Tell us about your property and we'll recommend the perfect native plants for your barrier island home.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:+13215551234" className="flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-sm rounded-md hover:brightness-110 transition">
          <Phone className="w-4 h-4" /> Call (321) 555-1234
        </a>
        <a href="#hero" className="flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-md hover:bg-primary-foreground/10 transition">
          <MapPin className="w-4 h-4" /> Visit Our Nursery
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
