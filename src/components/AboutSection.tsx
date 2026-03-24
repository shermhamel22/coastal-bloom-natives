import aboutImg from "@/assets/about-img.jpg";
import { Leaf } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
      <div className="space-y-5">
        <p className="section-label">About Us</p>
        <h2 className="section-heading">
          Your Barrier Island Plant Experts
        </h2>
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
