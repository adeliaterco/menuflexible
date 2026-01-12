import { Gift, Activity, Salad, Dumbbell, Calculator } from "lucide-react";
import mapaQuema from "@/assets/mapa-quema.png";
import listaAlimentos from "@/assets/lista-alimentos.png";
import recetasActivan from "@/assets/recetas-activan.png";

const extraBonuses = [
  { name: "Guía para Diabetes", icon: Activity },
  { name: "Guía de la Dieta Vegana", icon: Salad },
  { name: "Guía para Ganar Masa", icon: Dumbbell },
  { name: "Calculadora de Calorías", icon: Calculator },
];

const BonusSection = () => {
  return (
    <section id="bonus" className="bg-muted py-16">
      <div className="container">
        {/* Extra Bonuses */}
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="text-center font-heading text-xl font-bold text-foreground">
              Bonus Extra Especiales
            </h3>
            <ul className="mt-4 space-y-3">
              {extraBonuses.map((bonus, index) => {
                const Icon = bonus.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium text-foreground">{bonus.name}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                <Gift className="h-5 w-5" />
                <span className="font-heading font-bold">BONUS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Y más... */}
        <p className="mt-8 text-center font-heading text-lg font-bold text-primary">
          Y más...
        </p>

        {/* Mapa de Quema Constante */}
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="text-center font-heading text-xl font-bold text-primary">
              El Mapa de la Quema Constante
            </h3>
            <img 
              src={mapaQuema} 
              alt="Mapa de la Quema Constante - Inicio, Activación, Intensidad, Disciplina" 
              className="mt-4 w-full rounded-lg"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-center text-muted-foreground">
              Este Mapa contiene el paso a paso para alcanzar y activar la quema constante, de forma totalmente visual, clara e intuitiva. Con él sabrás tu punto actual y lo que está por venir. ¡Etapas y acciones fáciles de seguir y acompañar tu evolución!
            </p>
          </div>
        </div>

        {/* Lista de Alimentos QC */}
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="text-center font-heading text-lg font-bold text-primary">
              Lista de Alimentos QC
            </h3>
            <img 
              src={listaAlimentos} 
              alt="Lista de Alimentos QC - Proteínas, Vegetales, Grasas Saludables" 
              className="mt-4 w-full rounded-lg"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-center text-muted-foreground">
              Lista de Alimentos y control de compras de los principales alimentos para activar tu quema constante.
            </p>
          </div>
        </div>

        {/* Recetas que Activan la Quema */}
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="rounded-2xl bg-card p-6 shadow-card">
            <h3 className="text-center font-heading text-lg font-bold text-primary">
              Recetas que Activan la Quema Constante
            </h3>
            <img 
              src={recetasActivan} 
              alt="Recetas que Activan la Quema Constante - Dieta Cetogénica Completa" 
              className="mt-4 w-full rounded-lg"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-center text-muted-foreground">
              Garantizando hoy tu acceso, tendrás un libro de recetas completo de mi dieta Cetogénica con comidas para todo tu día. ¡Desayuno, almuerzo, meriendas, jugos y cena!
            </p>
          </div>
        </div>

        {/* Gana tiempo */}
        <div className="mx-auto mt-8 max-w-xl text-center">
          <h3 className="font-heading text-xl font-bold text-primary">
            Gana tiempo con claridad y practicidad
          </h3>
          <p className="mt-2 text-muted-foreground">
            La herramienta que te faltaba para alcanzar tus objetivos, sea adelgazamiento o ganancia de masa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
