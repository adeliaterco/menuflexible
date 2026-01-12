import recetasDetox from "@/assets/40-recetas-detox.png";
import cardioFit from "@/assets/cardio-fit.png";

const SuperBonusSection = () => {
  return (
    <section id="super-bonus" className="bg-gradient-hero py-12 text-primary-foreground">
      <div className="container">
        <p className="text-center text-lg">
          Al entrar hoy, tendrás acceso a <span className="font-bold">2 Super Bonus</span> para potenciar tus resultados.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Bonus 1 - Detox */}
          <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-card">
            <div className="flex items-center justify-center gap-2">
              <span className="font-heading text-sm font-bold text-primary">Bonus</span>
            </div>
            <h3 className="mt-2 text-center font-heading text-lg font-bold text-primary">
              40 Recetas Detox - Jugos y Tés
            </h3>
            <img 
              src={recetasDetox} 
              alt="40 Recetas Detox - Jugos y Tés para una Vida Vibrante" 
              className="mt-4 w-full rounded-lg"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              <span className="font-semibold">Desbloquea Tu Potencial de Energía Máxima:</span> El Secreto de los tés y jugos Detox para una Vida Vibrante y Revitalizante.
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Puede imprimirse o accederse directamente desde el celular.
            </p>
          </div>

          {/* Bonus 2 - CardioFitness */}
          <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-card">
            <div className="flex items-center justify-center gap-2">
              <span className="font-heading text-sm font-bold text-primary">Bonus</span>
            </div>
            <h3 className="mt-2 text-center font-heading text-lg font-bold text-primary">
              Cardio Fit
            </h3>
            <img 
              src={cardioFit} 
              alt="Cardio Fit - El Cuerpo Perfecto y Más Saludable" 
              className="mt-4 w-full rounded-lg"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              El cuerpo perfecto y más saludable con este material completo.
            </p>
            <p className="mt-2 text-center text-sm font-medium text-foreground">
              Todo sobre ejercicios cardio, equipamientos y planificación para obtener un cuerpo en forma y más fuerte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperBonusSection;
