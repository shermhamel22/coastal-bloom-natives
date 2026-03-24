import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: gallery1, alt: "Native plant selection at Floridana Tropicals nursery" },
  { src: gallery2, alt: "Coastal residential landscaping with Florida natives" },
  { src: gallery3, alt: "Monarch butterfly on native dune sunflower" },
  { src: heroBg, alt: "Floridana Tropicals coastal garden display" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <p className="section-label mb-3">See Why Our Customers Love Us</p>
        <h2 className="section-heading">See Our Work</h2>
      </div>
      <div className="text-center mb-10">
        <a href="#gallery" className="text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors underline underline-offset-4">
          See All Photos
        </a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg group aspect-square">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
