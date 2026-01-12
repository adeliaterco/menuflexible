import especialistas from "@/assets/especialistas.png";
import productMockup from "@/assets/product-mockup.jpg";
import { Star } from "lucide-react";
import { trackCTAClick } from "@/hooks/useGA4Tracking";

const HeroSection = () => {
  const scrollToPricing = () => {
    trackCTAClick("hero");
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background pb-12 pt-8">
      {/* Header */}
      <div className="container text-center">
        <h1 className="font-heading text-4xl font-black uppercase leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
          Seguir una dieta
        </h1>
        <h2 className="font-heading text-3xl font-black uppercase text-secondary md:text-4xl lg:text-5xl">
          nunca fue tan fácil
        </h2>
        
        <div className="mx-auto mt-6 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Una manera <span className="text-primary">simple y eficiente</span>
          </p>
          <p className="text-sm font-medium uppercase tracking-wider text-foreground">
            de mejorar tu alimentación
          </p>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            perder peso <span className="text-muted-foreground">o</span> <span className="text-foreground">ganar masa magra</span>
          </p>
        </div>

        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          Todo lo que necesitas para seguir tu rutina Fitness y Saludable.
        </p>
      </div>

      {/* Product Mockup */}
      <div className="container mt-8">
        <div className="mx-auto max-w-4xl">
          <img 
            src={productMockup} 
            alt="Kit de Menú Flexible - Guías de alimentación y recetas" 
            className="w-full rounded-xl shadow-card"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Price Offer */}
      <div className="container mt-10 text-center">
        <div className="inline-block rounded-2xl bg-card px-8 py-6 shadow-card">
          <p className="font-heading text-lg font-bold uppercase tracking-wide text-primary">
            ¡Solo hoy!
          </p>
          <p className="mt-1 text-lg text-muted-foreground line-through">
            De $87.00
          </p>
          <p className="text-sm font-medium text-muted-foreground">Por</p>
          <p className="font-heading text-5xl font-black text-secondary md:text-6xl">
            $9.90
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-xl space-y-3 text-center">
          <p className="text-base text-foreground">
            Tendrás <span className="font-semibold text-primary">cientos de opciones de comidas y menús listos</span>, separados y organizados por calorías.
          </p>
          <p className="text-base text-foreground">
            <span className="font-semibold text-primary">Materiales y guías prácticas</span> esenciales que maximizarán tus resultados.
          </p>
          <p className="text-base text-muted-foreground">
            Desarrollado y pensado para quienes buscan eficiencia con <span className="font-semibold text-foreground">practicidad y claridad</span>.
          </p>
          <p className="text-sm font-medium text-primary">
            Mucho más que un simple menú
          </p>
        </div>
      </div>

      {/* Nutritionist Endorsement */}
      <div className="container mt-10">
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-card">
          <img 
            src={especialistas} 
            alt="Especialistas recomendando el menú en gimnasio" 
            className="h-64 w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="bg-card p-4 text-center">
            <p className="font-heading text-sm font-bold text-primary">
              Recomendado por Nutricionistas en gimnasios.
            </p>
            <div className="mt-2 flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 font-medium text-foreground">4.9/5</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Una amplia gama de opciones de comidas y menús que pueden ajustarse a tu momento actual y tus objetivos.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Puede imprimirse o accederse directamente desde el celular.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="container mt-8 text-center">
        <button 
          onClick={scrollToPricing}
          className="rounded-full bg-gradient-cta px-10 py-4 font-heading text-lg font-bold uppercase tracking-wide text-secondary-foreground shadow-button-cta transition-transform hover:scale-105 active:scale-95"
        >
          ¡Quiero el Kit Completo!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
