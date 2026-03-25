import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => (
  <section id="contact" className="relative py-24 lg:py-32">
    <div className="absolute inset-0">
      <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={600} />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
    <div className="relative container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight text-primary-foreground mb-3 leading-[1.1]">
        Ready to Take the Next Step?
      </h2>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight text-primary-foreground mb-10 leading-[1.1]">
        Get a Free Quote Today!
      </h3>
      <a href="#hero" className="inline-block px-10 py-4 bg-secondary text-secondary-foreground font-black uppercase tracking-widest text-sm rounded hover:brightness-110 transition">
        Get a Free Quote
      </a>
    </div>
  </section>
);

export default CTASection;
