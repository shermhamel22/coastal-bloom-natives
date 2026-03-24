import { ClipboardCheck, MessageSquare, Truck, Flower } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Reach Out", desc: "Call us or fill out our form with your project details." },
  { icon: ClipboardCheck, num: "02", title: "Free Consultation", desc: "We assess your site — distance from ocean, soil, and sun." },
  { icon: Truck, num: "03", title: "Pick Up or Delivery", desc: "Choose your plants. We can deliver on the island." },
  { icon: Flower, num: "04", title: "Watch It Thrive", desc: "Our coastal-tested natives thrive season after season." },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Our Process</p>
        <h2 className="section-heading">Simple Steps, Stunning Results</h2>
        <p className="mt-4 text-muted-foreground font-medium">Our process is simple and only contains a few easy steps</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="block text-3xl font-black text-secondary/30">{s.num}</span>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
