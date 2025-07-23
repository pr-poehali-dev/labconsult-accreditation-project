import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EquipmentSection from "@/components/EquipmentSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <EquipmentSection />
      <AdvantagesSection />
      <section id="news">
        <NewsSection />
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;