import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioShowcase />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
