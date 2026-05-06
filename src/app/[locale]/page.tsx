import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import FAQSection from "@/components/FAQSection";
import InspirationSection from "@/components/InspirationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkProcessSection />
      <FAQSection />
      <InspirationSection />
      <CTASection />
      <Footer />
    </main>
  );
}
