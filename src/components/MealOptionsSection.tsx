import mealAccess from "@/assets/meal-access.png";

const MealOptionsSection = () => {
  return (
    <section id="meal-options" className="bg-background py-16">
      <div className="container">
        <h2 className="text-center font-heading text-xl font-bold text-primary md:text-2xl">
          Lo que vas a tener acceso
        </h2>

        {/* Main Image */}
        <div className="mx-auto mt-8 max-w-2xl">
          <img 
            src={mealAccess} 
            alt="Menús organizados por calorías - 1200, 1500, 1800 kcal" 
            className="w-full rounded-xl shadow-card"
            loading="lazy"
            decoding="async"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-muted-foreground">
          Cientos de opciones de comidas y menús organizados por calorías, listos para imprimir o acceder desde tu celular.
        </p>
      </div>
    </section>
  );
};

export default MealOptionsSection;
