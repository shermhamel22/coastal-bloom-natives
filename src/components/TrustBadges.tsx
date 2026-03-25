import { Shield, MapPin, Leaf, Award, Heart } from "lucide-react";

const badges = [
  { icon: MapPin, label: "100% LOCAL" },
  { icon: Heart, label: "FAMILY BUSINESS" },
  { icon: Leaf, label: "FLORIDA NATIVES" },
  { icon: Shield, label: "SALT TESTED" },
  { icon: Award, label: "5★ RATED" },
];

const TrustBadges = () => (
  <section className="bg-primary py-5 border-y border-secondary/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <b.icon className="w-5 h-5 text-secondary" />
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-primary-foreground">{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
