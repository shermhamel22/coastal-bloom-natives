import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: gallery1, alt: "Native plant selection at Floridana Tropicals nursery" },
  { src: gallery2, alt: "Coastal residential landscaping with Florida natives" },
  { src: gallery3, alt: "Monarch butterfly on native dune sunflower" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28" style={{ background: "var(--gradient-sand)" }}>
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">See Our Work</p>
        <h2 className="section-heading">Thriving Coastal Gardens</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl group">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
