import { Shield, MapPin, Leaf, Award, Heart } from "lucide-react";

const badges = [
  { icon: MapPin, label: "100% LOCAL" },
  { icon: Heart, label: "FAMILY BUSINESS" },
  { icon: Leaf, label: "FLORIDA NATIVES" },
  { icon: Shield, label: "SALT TESTED" },
  { icon: Award, label: "5★ RATED" },
];

const TrustBadges = () => (
  <section className="bg-muted py-5 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <b.icon className="w-5 h-5 text-primary" />
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-foreground">{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
