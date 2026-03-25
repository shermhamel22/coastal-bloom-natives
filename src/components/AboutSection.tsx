import aboutImg from "@/assets/about-img.jpg";
import { Leaf } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
      <div className="space-y-5">
        <span className="inline-block bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1.5">
          Who We Are
        </span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
          About Us
        </h2>
        <div className="w-24 h-1 bg-secondary" />
        <p className="text-base text-muted-foreground leading-relaxed font-medium">
          Floridana Tropicals Inc., a Melbourne Beach gem, specializes in Florida native and dune-hardy plants.
          Born from Beth and Coddy's passion for coastal ecology, we're now the barrier island's most trusted
          source for salt-spray-tested, expert-curated species that thrive in sandy soil and harsh conditions —
          ensuring beautiful, enduring landscapes.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Leaf className="w-5 h-5 text-secondary" />
          <span className="text-base font-extrabold uppercase tracking-wide text-foreground">Floridana Tropicals</span>
        </div>
      </div>
      <div>
        <img
          src={aboutImg}
          alt="Sea oats on Melbourne Beach dunes"
          className="rounded-lg object-cover w-full h-[420px] shadow-lg"
          loading="lazy"
          width={800}
          height={1000}
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
