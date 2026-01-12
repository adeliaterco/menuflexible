import { Check } from "lucide-react";
import productMockup from "@/assets/product-mockup.jpg";

const targetAudience = [
  "Para quienes están por encima de su peso y no consiguen eliminar grasa acumulada.",
  "Para quienes no quieren perder tiempo calculando calorías.",
  "Para quienes no saben por dónde empezar.",
  "Para quienes no pueden pagar un Nutricionista.",
  "Para quienes no practican actividad física pero quieren comer mejor.",
  "Para quienes practican actividad física y quieren alinear su dieta para acelerar sus resultados.",
];

const ForWhoSection = () => {
  return (
    <section id="for-who" className="bg-gradient-hero py-16 text-primary-foreground">
      <div className="container">
        <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
          ¿Para quién es el Menú Flexible?
        </h2>

        <div className="mx-auto mt-8 max-w-md">
          <img 
            src={productMockup} 
            alt="Kit de Menú Flexible" 
            className="w-full rounded-xl opacity-90"
          />
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <ul className="space-y-3">
            {targetAudience.map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
