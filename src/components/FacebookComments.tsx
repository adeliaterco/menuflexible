import { useState, useEffect } from "react";
import { Heart, MoreVertical } from "lucide-react";

interface Comment {
  id: number;
  username: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
}

const allComments: Comment[] = [
  {
    id: 1,
    username: "maria.garcia_fit",
    avatar: "https://ui-avatars.com/api/?name=Maria+Garcia&background=e91e63&color=fff&size=100",
    text: "¡Lo compré y es súper completo! Vale cada centavo invertido.",
    time: "hace 1 min",
    likes: 27,
  },
  {
    id: 2,
    username: "carlos.lopez.nutricion",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Lopez&background=2196f3&color=fff&size=100",
    text: "¡Excelente material! Lo recomiendo muchísimo.",
    time: "hace 2 min",
    likes: 12,
  },
  {
    id: 3,
    username: "ana.rodriguez_wellness",
    avatar: "https://ui-avatars.com/api/?name=Ana+Rodriguez&background=9c27b0&color=fff&size=100",
    text: "¡Compré! ¡Lo recomiendo!",
    time: "hace 3 min",
    likes: 7,
  },
  {
    id: 4,
    username: "juanmartinez.coach",
    avatar: "https://ui-avatars.com/api/?name=Juan+Martinez&background=ff9800&color=fff&size=100",
    text: "Es una página seria! Vale la pena invertir cada centavo..",
    time: "hace 4 min",
    likes: 4,
  },
  {
    id: 5,
    username: "laura.fernandez_vida",
    avatar: "https://ui-avatars.com/api/?name=Laura+Fernandez&background=4caf50&color=fff&size=100",
    text: "¡Es buenísimo! Vale mucho la pena comprar el material",
    time: "hace 5 min",
    likes: 9,
  },
  {
    id: 6,
    username: "sofia.mendez.fit",
    avatar: "https://ui-avatars.com/api/?name=Sofia+Mendez&background=f44336&color=fff&size=100",
    text: "¡Muy bueno, me encantó! 😍",
    time: "hace 6 min",
    likes: 3,
  },
  {
    id: 7,
    username: "diego.herrera_gym",
    avatar: "https://ui-avatars.com/api/?name=Diego+Herrera&background=3f51b5&color=fff&size=100",
    text: "Las recetas son increíbles, mi familia las ama",
    time: "hace 8 min",
    likes: 18,
  },
  {
    id: 8,
    username: "valentina.castro",
    avatar: "https://ui-avatars.com/api/?name=Valentina+Castro&background=00bcd4&color=fff&size=100",
    text: "¡Por fin algo que realmente funciona! 💪",
    time: "hace 10 min",
    likes: 21,
  },
  {
    id: 9,
    username: "andres.morales.chef",
    avatar: "https://ui-avatars.com/api/?name=Andres+Morales&background=795548&color=fff&size=100",
    text: "Como chef, puedo decir que las recetas son de calidad profesional",
    time: "hace 12 min",
    likes: 34,
  },
  {
    id: 10,
    username: "camila.santos_healthy",
    avatar: "https://ui-avatars.com/api/?name=Camila+Santos&background=607d8b&color=fff&size=100",
    text: "Ya bajé 5 kilos siguiendo el menú 🎉",
    time: "hace 15 min",
    likes: 45,
  },
  {
    id: 11,
    username: "roberto.silva.fit",
    avatar: "https://ui-avatars.com/api/?name=Roberto+Silva&background=009688&color=fff&size=100",
    text: "El mejor material que he comprado este año",
    time: "hace 18 min",
    likes: 16,
  },
  {
    id: 12,
    username: "lucia.ramirez",
    avatar: "https://ui-avatars.com/api/?name=Lucia+Ramirez&background=e91e63&color=fff&size=100",
    text: "¡Súper práctico! Lo uso todos los días",
    time: "hace 20 min",
    likes: 8,
  },
  {
    id: 13,
    username: "pablo.torres_nutrifit",
    avatar: "https://ui-avatars.com/api/?name=Pablo+Torres&background=673ab7&color=fff&size=100",
    text: "Lo recomiendo a todos mis clientes 👏",
    time: "hace 25 min",
    likes: 29,
  },
  {
    id: 14,
    username: "elena.vargas.wellness",
    avatar: "https://ui-avatars.com/api/?name=Elena+Vargas&background=ff5722&color=fff&size=100",
    text: "¡Increíble la cantidad de opciones! Nunca me aburro",
    time: "hace 30 min",
    likes: 11,
  },
  {
    id: 15,
    username: "miguel.cruz_coach",
    avatar: "https://ui-avatars.com/api/?name=Miguel+Cruz&background=8bc34a&color=fff&size=100",
    text: "Compré para mi esposa y ahora toda la familia come saludable",
    time: "hace 35 min",
    likes: 38,
  },
];

const reactions = ["❤️", "🙌", "🔥", "👏", "🥺", "😍", "🙂", "😂"];

const FacebookComments = () => {
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Start with first 3 comments
    setVisibleComments(allComments.slice(0, 3));
    setCurrentIndex(3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex >= allComments.length ? 0 : prevIndex;
        
        if (nextIndex === 0) {
          // Reset to first 3 comments
          setVisibleComments(allComments.slice(0, 3));
          return 3;
        }

        // Add next comment to the top
        const newComment = allComments[nextIndex];
        setVisibleComments((prev) => [newComment, ...prev.slice(0, 7)]);
        
        return nextIndex + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-background py-16">
      <div className="container">
        <h2 className="text-center font-heading text-xl font-bold text-primary md:text-2xl">
          Mira lo que dicen sobre el Menú Flexible
        </h2>

        {/* Facebook-style comments container */}
        <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <h3 className="text-base font-semibold text-gray-900">Comentarios</h3>
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </div>

          {/* Comments list */}
          <div className="max-h-[500px] overflow-y-auto">
            {visibleComments.map((comment, index) => (
              <div
                key={`${comment.id}-${index}`}
                className={`flex gap-3 border-b border-gray-100 px-4 py-3 ${
                  index === 0 ? "animate-fade-in bg-orange-50/50" : ""
                }`}
              >
                {/* Avatar */}
                <img
                  src={comment.avatar}
                  alt={comment.username}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      {comment.username}
                    </span>
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-800">{comment.text}</p>
                  
                  <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                    <button className="font-medium hover:text-gray-700">
                      Responder
                    </button>
                    <button className="hover:text-gray-700">Ocultar</button>
                    <button className="hover:text-gray-700">Ver traducción</button>
                  </div>
                </div>

                {/* Likes */}
                <div className="flex flex-col items-center gap-1">
                  <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  <span className="text-xs font-medium text-gray-600">
                    {comment.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Reactions bar */}
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="flex items-center justify-center gap-3">
              {reactions.map((reaction, index) => (
                <button
                  key={index}
                  className="text-2xl transition-transform hover:scale-125"
                >
                  {reaction}
                </button>
              ))}
            </div>
          </div>

          {/* Comment input */}
          <div className="flex items-center gap-3 border-t border-gray-200 px-4 py-3">
            <div className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-400">
              Comentar...
            </div>
            <span className="text-xl">😊</span>
          </div>
        </div>

        {/* Live indicator */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">
            Comentarios en tiempo real
          </span>
        </div>
      </div>
    </section>
  );
};

export default FacebookComments;

