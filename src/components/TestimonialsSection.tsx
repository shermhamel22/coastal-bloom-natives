import { Star } from "lucide-react";
import reviewsBg from "@/assets/reviews-bg.jpg";

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
  <section className="relative py-20 lg:py-28">
    <div className="absolute inset-0">
      <img src={reviewsBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={900} />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>

    <div className="relative container mx-auto px-4">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
        <div>
          <span className="inline-block bg-foreground text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 mb-3">
            Discover What Our Customers Have to Say About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary-foreground leading-[1.1]">
            Reviews
          </h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground text-primary-foreground text-xs font-extrabold uppercase tracking-wider rounded hover:bg-primary-foreground/10 transition">
          Contact Us Now →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {reviews.map((r) => (
          <div key={r.name} className="p-7 rounded-lg bg-primary-foreground">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-lg font-black text-secondary">5</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed mb-5 font-medium">"{r.text}"</p>
            <p className="text-sm font-extrabold text-foreground uppercase tracking-wide">{r.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="bg-foreground rounded-lg p-8 text-center max-w-md">
          <h3 className="text-2xl font-black uppercase tracking-tight text-primary-foreground mb-2">
            Review Us on Google
          </h3>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>
          <a href="#" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-extrabold uppercase tracking-wider text-sm rounded hover:brightness-110 transition">
            Leave Us a Review
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
