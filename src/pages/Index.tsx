import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
