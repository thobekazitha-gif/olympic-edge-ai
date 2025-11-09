import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnalysisDemo from "@/components/AnalysisDemo";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AnalysisDemo />
        <FeaturesGrid />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
