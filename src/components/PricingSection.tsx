import { Check, Shield, Clock, Lock } from "lucide-react";
import productMockup from "@/assets/product-mockup.jpg";
import { trackPurchaseClick } from "@/hooks/useGA4Tracking";
import { appendUTMToUrl } from "@/hooks/useUTMParams";
const includedItems = [
  "Kit Menú Flexible +170 Opciones",
  "Opciones de Comidas por Kcal",
  "Opciones de Menús por Kcal",
  "Recetas Smoothies",
  "El Mapa de la Quema Constante",
  "Recetas Cetogénicas",
  "Alimentos Cetónicos",
  "40 Recetas Detox - Jugos y Tés",
  "En Forma con Cardio",
  "Guía para Diabetes",
  "Guía de la Dieta Vegana",
  "Guía para Ganar Masa",
  "Acceso Vitalicio.",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gradient-offer py-16 text-primary-foreground">
      <div className="container">
        <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
          ¡Obtén acceso a todo esto ahora mismo!
        </h2>

        <h3 className="mt-2 text-center font-heading text-xl font-bold text-accent">
          Menú Flexible + Bonus
        </h3>

        {/* Product Image */}
        <div className="mx-auto mt-6 max-w-md">
          <img 
            src={productMockup} 
            alt="Kit Menú Flexible + Bonus" 
            className="w-full rounded-xl opacity-95"
          />
        </div>

        {/* Price */}
        <div className="mt-8 text-center">
          <p className="text-lg">Y hoy con la súper oferta de</p>
          <p className="text-2xl line-through opacity-70">$87.00</p>
          <p className="text-lg">Por apenas</p>
          <p className="mt-2 font-heading text-6xl font-black text-accent md:text-7xl">
            $9.90
          </p>
        </div>

        {/* Included Items */}
        <div className="mx-auto mt-8 max-w-md">
          <ul className="space-y-2">
            {includedItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => {
              trackPurchaseClick();
              const hotmartUrl = appendUTMToUrl("https://pay.hotmart.com/N101152042X?off=4z8csbbu");
              window.location.href = hotmartUrl;
            }}
            className="inline-block animate-pulse-soft rounded-full bg-secondary px-10 py-4 font-heading text-lg font-bold uppercase tracking-wide text-secondary-foreground shadow-button-cta transition-all hover:scale-105 hover:brightness-110"
          >
            ¡Quiero el Kit Completo!
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Shield className="h-6 w-6" />
            <div className="text-xs">
              <p className="font-bold">GARANTÍA</p>
              <p>7 días de garantía sin riesgo</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="h-6 w-6" />
            <div className="text-xs">
              <p className="font-bold">ACCESO INMEDIATO</p>
              <p>Recibe el producto en pocos minutos</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Lock className="h-6 w-6" />
            <div className="text-xs">
              <p className="font-bold">PAGO SEGURO</p>
              <p>Sitio seguro certificado y compra 100% protegida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
