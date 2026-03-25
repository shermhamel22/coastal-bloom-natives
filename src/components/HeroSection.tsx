import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Leaf } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center" id="hero">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Florida native coastal plants nursery" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[1.05] text-primary-foreground mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Coastal Native Plants You Can Rely On
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed font-medium">
            Expert-curated Florida native plants for barrier island homeowners seeking salt-hardy, dune-proven species.
          </p>
        </div>

        <div className="bg-primary rounded-xl p-8 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full shadow-2xl">
          <div className="flex items-center gap-2 justify-center mb-2">
            <Leaf className="w-7 h-7 text-secondary" />
            <span className="text-lg font-black text-primary-foreground uppercase tracking-wide">Floridana Tropicals</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-primary-foreground uppercase text-center mb-6 tracking-tight">
            Get a Free Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-extrabold text-primary-foreground mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-extrabold text-primary-foreground mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Example: (321) 555-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-extrabold text-primary-foreground mb-1">Short message about your needs *</label>
              <textarea
                required
                rows={3}
                placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded bg-primary-foreground text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>
            <button type="submit" className="w-full py-4 bg-secondary text-secondary-foreground font-black uppercase tracking-widest text-sm rounded hover:brightness-110 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
