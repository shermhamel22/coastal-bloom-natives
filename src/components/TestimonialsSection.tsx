import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Beth and Coddy are incredibly knowledgeable. They told me exactly which plants would survive 50 feet from the ocean — and they were right. Everything is thriving after hurricane season!",
    rating: 5,
  },
  {
    name: "Jim & Patty R.",
    text: "We've tried big-box stores and everything dies in the salt air. Floridana's plants are the only ones that have lasted. The personal consultation made all the difference.",
    rating: 5,
  },
  {
    name: "Maria L.",
    text: "I love to support local! This hidden gem has the best native plants on the island. My dune garden is gorgeous and the butterflies are everywhere now.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Customer Reviews</p>
        <h2 className="section-heading">Why Our Community Loves Us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="p-8 rounded-xl bg-background border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{r.text}"</p>
            <p className="font-display font-bold text-foreground">{r.name}</p>
            <p className="text-sm text-muted-foreground">Melbourne Beach Resident</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
