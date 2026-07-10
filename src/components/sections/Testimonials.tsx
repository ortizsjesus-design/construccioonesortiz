import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const GOOGLE_REVIEW_COUNT = 17;

const reviews = [
  {
    name: "Cesar Peña",
    text: "Muy recomendable. Persona seria, puntual y muy colaboradora.\n\nAlquilé una retro de 1.500 kilos y un camión con volquete, todo perfecto. Seguro volveré a contar con sus servicios.",
  },
  {
    name: "RiojaRuralRooms",
    text: "Súper recomendables. Serios, eficaces y un trato exquisito. Grandes profesionales!!",
  },
  {
    name: "eko kia",
    text: "Tienen un buen equipo de trabajo, todo lo coordinan bien, son muy eficientes.\n\nDiversidad de maquinaria reduciendo tiempo de ejecución de la obra. Han hecho un buen trabajo, muy profesionales. Volveré a contar con ellos.",
  },
  {
    name: "Gloria Nicasio",
    text: "Una experiencia perfecta. Volveremos a contar con sus servicios, súper recomendables. Gracias por todo!!!",
  },
  {
    name: "Cristina Muguruza",
    text: "Acertadísima decisión la que escogimos en contratar a Ortiz.\n\nCon experiencia propia por nuestros negocios hosteleros; la seriedad, calidad de trabajo y precio muy correcto a su labor también hecha.\n\nSolo repito, MUY AGRADECIDOS. Les recomendaré siempre.",
  },
  {
    name: "JOSE BOLUMBURU",
    text: "Les contraté para nivelar terreno, echar solera de cemento y embaldosar con suelo cerámico una terraza de 6X4, formalidad (cumpliendo plazos y fecha establecida), profesionalidad y ejecución con acabado impecable. Les recomiendo 100%",
  },
  {
    name: "Raúl Gonzalez de Durana",
    text: "Gran trabajazo que nos hicieron en nuestra casa del pueblo. Cuando necesitemos otra vez de su ayuda, mi familia no dudará en recurrir os vez a ellos. Gracias!!",
  },
  {
    name: "Monica Carballo",
    text: "Nos hicieron una piscina en Cuzcurrita del Rio Tiron, y quedó preciosa. Son muy buenos profesionales, nos asesoraron muy bien. Sin duda les volveré a llamar.",
  },
  {
    name: "cerdeña",
    text: "Grandes profesionales. Detallistas y ejecución perfecta. Encantados con el trabajazo que nos hicieron. Repetiremos en cuanto les necesitemos.",
  },
  {
    name: "Juan Urbina",
    text: "Excelentes profesionales. Rápidos en la ejecución de los trabajo que les encargamos y con gran calidad de terminaciones. Muy recomendables.",
  },
  {
    name: "Sara Ozaeta",
    text: "TEJADO Y CANALONES NUEVO EXCELENTE CALIDAD TRABAJO Y PRECIO MUCHAS GRACIAS ESTOY ENCANTADA CON EL TRABAJO HECHO 😊",
  },
  {
    name: "Maria Esther Santamaria Fernandez",
    text: "Servicios chapeau. Trato impresionante. Super recomendable.",
  },
  {
    name: "Beatriz Benitez",
    text: "Gente muy amable, trabajadores incansables merecen la pena",
  },
  {
    name: "Carlos Ortiz",
    text: "Seriedad y compromiso. Un gusto trabajar con esta gente.",
  },
  {
    name: "Smathex Smathex",
    text: "Grandes profesionales",
  },
];

const pulseTransition = {
  repeat: Infinity,
  duration: 1.5,
  ease: "easeInOut" as const,
};

const Stars = ({ pulse = false }: { pulse?: boolean }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) =>
      pulse ? (
        <motion.span
          key={i}
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.88, 1] }}
          transition={{ ...pulseTransition, delay: i * 0.1 }}
          className="inline-flex"
        >
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        </motion.span>
      ) : (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      )
    )}
  </div>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      id="opiniones"
      className="py-24 bg-muted/30 overflow-hidden scroll-mt-28 md:scroll-mt-44"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Opiniones
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-muted-foreground">
            <Stars pulse />
            <span className="text-sm font-medium ml-1">
              {GOOGLE_REVIEW_COUNT} opiniones de 5 estrellas en Google
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Arrows — desktop */}
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-card text-foreground hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Siguiente"
            className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-card text-foreground hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slides */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] md:basis-[48%] pl-4 first:pl-0"
                >
                  <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card h-full flex flex-col justify-between">
                    <div>
                      <Stars />
                      <p className="text-foreground leading-relaxed whitespace-pre-line text-sm md:text-base mt-4 mb-5">
                        {review.text}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {review.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                          Reseña de Google
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Ir a reseña ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  idx === selectedIndex
                    ? "bg-primary"
                    : "bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-card shadow-card text-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Siguiente"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-card shadow-card text-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button asChild variant="default" size="lg">
            <a
              href="https://www.google.com/maps/search/?api=1&query_place_id=ChIJw7KjvjeHTw0RArK3Aemm1Ik&query=reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver reseñas en Google
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJw7KjvjeHTw0RArK3Aemm1Ik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir una reseña
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
