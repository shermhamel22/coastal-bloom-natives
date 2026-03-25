import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service5 from "@/assets/service-5.jpg";

const images = [
  { src: gallery1, alt: "Native plant selection at Floridana Tropicals nursery" },
  { src: gallery2, alt: "Coastal residential landscaping with Florida natives" },
  { src: gallery3, alt: "Monarch butterfly on native dune sunflower" },
  { src: heroBg, alt: "Floridana Tropicals coastal garden display" },
  { src: service1, alt: "Dune plants at sunset" },
  { src: service2, alt: "Palm trees in residential yard" },
  { src: service3, alt: "Butterfly garden" },
  { src: service5, alt: "Beach plants on dunes" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <span className="inline-block bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 mb-3">
            See Why Our Customers Love Us
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
              See Our Work
            </h2>
            <div className="hidden md:block w-32 h-0.5 bg-secondary" />
          </div>
        </div>
        <a href="#gallery" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary text-xs font-extrabold uppercase tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition">
          See All Photos →
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
