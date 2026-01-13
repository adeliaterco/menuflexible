import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ForWhoSection from "@/components/ForWhoSection";
import MealOptionsSection from "@/components/MealOptionsSection";
import BonusSection from "@/components/BonusSection";
import FacebookComments from "@/components/FacebookComments";
import SuperBonusSection from "@/components/SuperBonusSection";
import PricingSection from "@/components/PricingSection";
import GA4ScrollTracker from "@/components/GA4ScrollTracker";
const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GA4ScrollTracker />
      <HeroSection />
      <BenefitsSection />
      <ForWhoSection />
      <MealOptionsSection />
      <BonusSection />
      <FacebookComments />
      <SuperBonusSection />
      <PricingSection />
      
      {/* Footer */}
      <footer className="bg-foreground py-6 text-center text-background">
        <p className="text-sm">
          © 2026 Menú Flexible. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-xs text-background/60">
          Este producto no sustituye la orientación de un profesional de la salud.
        </p>
      </footer>
    </main>
  );
};

export default Index;
