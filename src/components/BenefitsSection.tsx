import { Check } from "lucide-react";

const benefits = [
  "Más de 170 opciones de menús listos.",
  "Opciones para todas las comidas del día.",
  "Opciones para el fin de semana.",
  "Cómo calcular tu gasto calórico.",
  "Cómo variar tu alimentación todos los días.",
  "Cómo adelgazar sin privaciones.",
  "Cómo ahorrar con Nutricionista.",
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-muted py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Lo que vas a tener acceso:
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fichas ilustradas que proporcionan orientaciones e información detallada de cada comida o menú elegido.
          </p>
          <p className="mt-2 font-medium text-foreground">
            Opciones de comidas individuales o menús completos para todo el día.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 rounded-lg bg-card p-3 shadow-sm transition-all hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
