import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Leaf, Phone } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center" id="hero">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Florida native coastal plants nursery" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Headline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" /> Melbourne Beach, FL · Barrier Island
          </div>
          <h1 className="hero-heading text-balance">
            Coastal Native Plants That Actually Thrive
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed font-body">
            Expert-curated Florida native plants for salt spray, sandy soil &amp; barrier island living. Your dunes deserve better than big-box guesswork.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#services" className="px-6 py-3 bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-sm rounded-md hover:brightness-110 transition">
              Explore Plants
            </a>
            <a href="tel:+13215551234" className="flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-primary rounded-xl p-8 shadow-2xl max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-6 h-6 text-secondary" />
            <span className="font-display text-lg font-bold text-primary-foreground">Floridana Tropicals</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-primary-foreground mb-6">Get a Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-primary-foreground/90 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-foreground/90 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="(321) 555-1234"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-foreground/90 mb-1">Tell us about your project *</label>
              <textarea
                required
                rows={3}
                placeholder="What are you looking to plant? How close to the ocean?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>
            <button type="submit" className="w-full py-3.5 bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-sm rounded-md hover:brightness-110 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
