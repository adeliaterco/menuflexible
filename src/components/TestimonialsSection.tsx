import testimonialWoman from "@/assets/testimonial-woman.jpg";
import { MessageCircle, Heart } from "lucide-react";

const testimonials = [
  {
    user: "liliane.repomuceno",
    text: "¡Maravilloso, para mi hija y para mí!",
    likes: 14,
  },
  {
    user: "geisasantosdeolivei",
    text: "Maravilloso, ¡súper lo recomiendo!",
    likes: 2,
  },
  {
    user: "claudinhabenicio",
    text: "Qué lindo, me parece una idea muy motivadora.",
    likes: 15,
  },
  {
    user: "auta.carvoli",
    text: "¡Qué maravilla!!! Yo lo quiero",
    likes: 1,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-16">
      <div className="container">
        <h2 className="text-center font-heading text-xl font-bold text-primary md:text-2xl">
          Mira lo que dicen sobre el Menú Flexible
        </h2>

        <div className="mx-auto mt-8 max-w-md">
          <img 
            src={testimonialWoman} 
            alt="Mujer mostrando Kit de Menú Flexible en tablet" 
            className="mx-auto w-full max-w-sm rounded-2xl object-cover shadow-card"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-8 max-w-md space-y-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-xl bg-card p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    @{testimonial.user}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Heart className="h-4 w-4 fill-primary" />
                  <span className="text-sm font-medium">{testimonial.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
