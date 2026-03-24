import { Flower2, Trees, Shell, Sprout, Sun, Droplets } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Dune & Beach Plants",
    desc: "Sea oats, railroad vine, beach sunflower, and other species that stabilize dunes and withstand direct salt spray.",
  },
  {
    icon: Trees,
    title: "Native Trees & Palms",
    desc: "Sea grape, gumbo limbo, sabal palm, and more — shade and beauty adapted to barrier island conditions.",
  },
  {
    icon: Sprout,
    title: "Pollinator Gardens",
    desc: "Butterfly-attracting natives like coontie, firebush, and scorpion-tail that support monarchs and local wildlife.",
  },
  {
    icon: Shell,
    title: "Coastal Landscaping",
    desc: "Full consultation on plant selection based on your distance from the ocean, soil type, and sun exposure.",
  },
  {
    icon: Sun,
    title: "Salt-Tolerant Species",
    desc: "Every plant we sell is tested for salt hardiness. No guesswork — just species proven in our own coastal gardens.",
  },
  {
    icon: Droplets,
    title: "Low-Maintenance Design",
    desc: "We design landscapes that thrive on rainfall, reducing irrigation needs and long-term maintenance costs.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">What We Offer</p>
        <h2 className="section-heading">Expert-Curated Coastal Plants</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-8 rounded-xl bg-background border border-border hover:border-secondary/50 transition-all duration-300 group"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
