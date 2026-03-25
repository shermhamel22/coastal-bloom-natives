import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can you provide references from past clients?",
    a: "Absolutely! We can provide references from past clients. You can also read the reviews and testimonials from our satisfied customers right here on our website. If you'd like to speak with specific past clients, we're happy to connect you.",
  },
  {
    q: "What sets you apart from other nurseries in the area?",
    a: "At Floridana Tropicals, we distinguish ourselves through hyper-local expertise — every plant we sell is proven to thrive on the barrier island. We combine meticulous plant curation, deep coastal ecology knowledge, and a personalized approach to bring your vision to life.",
  },
  {
    q: "Is there a fee for a consultation or estimate?",
    a: "No! Floridana Tropicals offers complimentary consultations to all prospective clients. We'll assess your property and recommend the perfect native species at no cost.",
  },
  {
    q: "Will these plants survive salt spray and hurricanes?",
    a: "Yes — that's our entire specialty. Every species we carry has been selected and tested for salt tolerance, wind resistance, and sandy soil conditions specific to Florida's barrier islands.",
  },
  {
    q: "Do you support butterfly and pollinator gardens?",
    a: "Absolutely! We carry a curated selection of host and nectar plants that attract monarchs, zebra longwings, and other native pollinators. We can design an entire pollinator habitat plan for your property.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mt-4" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-background border border-border rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-extrabold text-foreground pr-4 uppercase tracking-wide">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed font-medium">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
