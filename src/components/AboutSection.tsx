import aboutImg from "@/assets/about-img.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28" style={{ background: "var(--gradient-sand)" }}>
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src={aboutImg}
          alt="Sea oats on Melbourne Beach dunes"
          className="rounded-xl object-cover w-full max-h-[500px]"
          style={{ boxShadow: "var(--shadow-elevated)" }}
          loading="lazy"
          width={800}
          height={1000}
        />
      </div>
      <div className="space-y-6">
        <p className="section-label">About Us</p>
        <h2 className="section-heading text-balance">
          Your Barrier Island Plant Experts Since Day One
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Floridana Tropicals Inc. isn't your typical nursery. Based right here on Melbourne Beach's barrier island,
          we specialize in Florida native and dune-hardy species that are <strong>proven to thrive</strong> in
          the 32951 zip code — salt spray, sandy soil, and all.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Founded by Beth and Coddy, our boutique nursery operates with one mission: helping
          coastal homeowners create landscapes that survive <em>and</em> flourish without constant
          maintenance. We trade big-box retail aesthetics for deep expertise and plants that actually work.
        </p>
        <div className="flex gap-8 pt-4">
          <div>
            <p className="text-3xl font-display font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Florida Native</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-primary">32951</p>
            <p className="text-sm text-muted-foreground">Zip Code Tested</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-primary">5★</p>
            <p className="text-sm text-muted-foreground">Google Rating</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
