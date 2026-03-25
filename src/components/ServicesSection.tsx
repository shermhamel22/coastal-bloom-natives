import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";

const services = [
  { img: service1, title: "Dune & Beach Plants" },
  { img: service2, title: "Native Trees & Palms" },
  { img: service3, title: "Pollinator Gardens" },
  { img: service4, title: "Coastal Consulting" },
  { img: service5, title: "Salt-Tolerant Species" },
  { img: service6, title: "Low-Maintenance Design" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <div className="mb-10">
        <span className="inline-block bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 mb-3">
          What We Are Best At
        </span>
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
            Our Services
          </h2>
          <div className="hidden md:block flex-1 h-0.5 bg-secondary" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <a
            key={s.title}
            href="#hero"
            className="relative group overflow-hidden rounded-lg aspect-[4/3] block"
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-sm">
                {s.title} <ArrowRight className="w-3.5 h-3.5 text-secondary" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
