import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessDemo from "@/components/ProcessDemo";
import ComparisonShowcase from "@/components/ComparisonShowcase";
import ValueGrid from "@/components/ValueGrid";
import ServicesSection from "@/components/ServicesSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ backgroundColor: "hsl(var(--background))" }}>
      <GlobalBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <ProcessDemo />
        <ComparisonShowcase />
        <ValueGrid />
        <ServicesSection />
        <CTAFooter />
      </div>
    </div>
  );
};

export default Index;
