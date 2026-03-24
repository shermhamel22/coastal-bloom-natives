import { Shield, MapPin, Leaf, Award, Heart } from "lucide-react";

const badges = [
  { icon: MapPin, label: "100% Local", sub: "Barrier Island" },
  { icon: Heart, label: "Family Owned", sub: "Beth & Coddy" },
  { icon: Leaf, label: "Florida Natives", sub: "Expert Curated" },
  { icon: Shield, label: "Salt Tested", sub: "Dune Hardy" },
  { icon: Award, label: "Community Trusted", sub: "5★ Reviews" },
];

const TrustBadges = () => (
  <section className="bg-primary py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <b.icon className="w-6 h-6 text-secondary flex-shrink-0" />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground">{b.label}</p>
              <p className="text-xs text-primary-foreground/60">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
