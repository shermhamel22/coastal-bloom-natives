import { MessageSquare, ClipboardCheck, Truck, Flower } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Free\nConsult" },
  { icon: ClipboardCheck, title: "Plant\nSelection" },
  { icon: Truck, title: "Pick Up or\nDelivery" },
  { icon: Flower, title: "Watch It\nThrive" },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-primary border-t border-secondary/20">
    <div className="container mx-auto px-4">
      <div className="mb-14">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary-foreground leading-[1.1]">
            Our Process
          </h2>
          <div className="hidden md:block flex-1 h-0.5 bg-secondary" />
        </div>
        <p className="mt-3 text-primary-foreground/60 font-medium">
          Our process is simple and only contains a few easy steps
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground flex items-center justify-center mb-3 shadow-lg">
                <s.icon className="w-9 h-9 text-primary" />
              </div>
              <div className="bg-foreground text-primary-foreground px-5 py-2.5 font-extrabold text-xs uppercase tracking-wider text-center whitespace-pre-line leading-tight clip-arrow min-w-[140px]">
                {s.title}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-12 h-0.5 bg-secondary/40 mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
