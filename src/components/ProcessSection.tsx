import { ClipboardCheck, MessageSquare, Truck, Flower } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Reach Out", desc: "Call us or fill out our form. Tell us about your property and what you're looking to plant." },
  { icon: ClipboardCheck, step: "02", title: "Free Consultation", desc: "We assess your site's distance from the ocean, soil, and sun exposure to create a custom plant plan." },
  { icon: Truck, step: "03", title: "Pick Up or Delivery", desc: "Choose your plants from our curated selection. We can arrange delivery on the island." },
  { icon: Flower, step: "04", title: "Watch It Thrive", desc: "Our coastal-tested natives establish quickly and thrive season after season — guaranteed." },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Our Process</p>
        <h2 className="section-heading">Simple Steps to a Thriving Garden</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-3xl font-display font-bold text-secondary/40">{s.step}</span>
            <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
