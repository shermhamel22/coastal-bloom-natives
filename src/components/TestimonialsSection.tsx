import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Beth and Coddy are incredibly knowledgeable. They told me exactly which plants would survive 50 feet from the ocean — and they were right. Everything is thriving after hurricane season!",
  },
  {
    name: "Jim & Patty R.",
    text: "We've tried big-box stores and everything dies in the salt air. Floridana's plants are the only ones that have lasted. The personal consultation made all the difference.",
  },
  {
    name: "Maria L.",
    text: "I love to support local! This hidden gem has the best native plants on the island. My dune garden is gorgeous and the butterflies are everywhere now.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Discover What Our Customers Have to Say About Us</p>
        <h2 className="section-heading">Reviews</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="p-7 rounded-lg bg-card border border-border shadow-sm">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-medium">"{r.text}"</p>
            <p className="text-sm font-extrabold text-foreground uppercase tracking-wide">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
