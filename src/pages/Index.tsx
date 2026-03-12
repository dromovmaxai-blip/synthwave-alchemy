import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessDemo from "@/components/ProcessDemo";
import ComparisonShowcase from "@/components/ComparisonShowcase";
import ValueGrid from "@/components/ValueGrid";
import ServicesSection from "@/components/ServicesSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProcessDemo />
      <ComparisonShowcase />
      <ValueGrid />
      <ServicesSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
