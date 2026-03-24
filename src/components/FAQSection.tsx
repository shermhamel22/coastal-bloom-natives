import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of plants do you carry?",
    a: "We specialize in Florida native and dune-hardy species including sea oats, beach sunflower, sea grape, railroad vine, coontie palm, gumbo limbo, firebush, and many more. Every plant is selected for its ability to thrive in coastal barrier island conditions.",
  },
  {
    q: "Do you offer planting consultations?",
    a: "Absolutely! Free consultations are our specialty. We'll assess your property's distance from the ocean, soil composition, sun exposure, and wind patterns to recommend the perfect species for your specific location.",
  },
  {
    q: "Will these plants survive salt spray?",
    a: "Yes — that's our entire focus. Every plant we sell has been tested and proven to withstand the salt spray, sandy soil, and harsh conditions unique to Florida's barrier islands. We don't sell anything that won't make it.",
  },
  {
    q: "Where are you located?",
    a: "We're a residential-based nursery right on Melbourne Beach's barrier island (32951). While we may not have big-box signage, our intimate setting allows us to focus entirely on quality plants and expert advice. Call ahead for directions!",
  },
  {
    q: "Do you support butterfly and pollinator gardens?",
    a: "Definitely! We carry a curated selection of host and nectar plants that attract monarchs, zebra longwings, and other native pollinators. We can design an entire pollinator habitat plan for your property.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--gradient-sand)" }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-bold text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
