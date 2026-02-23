import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Raúl Gonzalez de Durana",
    text: "Gran trabajazo que nos hicieron en nuestra casa del pueblo. Cuando necesitemos otra vez de su ayuda, mi familia no dudará en recurrir os vez a ellos. Gracias!!",
  },
  {
    name: "cerdeña",
    text: "Grandes profesionales. Detallistas y ejecución perfecta. Encantados con el trabajazo que nos hicieron. Repetiremos en cuanto les necesitemos.",
  },
  {
    name: "Cristina Muguruza",
    text: "Acertadísima decisión la que escogimos en contratar a Ortiz.\n\nCon experiencia propia por nuestros negocios hosteleros; la seriedad, calidad de trabajo y precio muy correcto a su labor también hecha.\n\nSolo repito, MUY AGRADECIDOS. Les recomendaré siempre.",
  },
  {
    name: "Monica Carballo",
    text: "Hace un mes nos hicieron una piscina en Cuzcurrita del Rio Tiron, y quedo preciosa son muy buenos professionals nos asesoraron muy bien sin duda Les volvere a llamar",
  },
  {
    name: "Sara Ozaeta",
    text: "TEJADO Y CANALONES NUEVO EXCELENTE CALIDAD TRABAJO Y PRECIO MUCHAS GRACIAS ESTOY ENCANTADA CON EL TRABAJO HECHO 😊",
  },
  {
    name: "JOSE BOLUMBURU",
    text: "Les contraté para nivelar terreno, echar solera de cemento y embaldosar con suelo cerámico una terraza de 6X4, formalidad (cumpliendo plazos y fecha establecida), profesionalidad y ejecución con acabado impecable. Les recomiendo 100%",
  },
  {
    name: "Juan Urbina",
    text: "Excelentes profesionales. Rápidos en la ejecución de los trabajo que les encargamos y con gran calidad de terminaciones. Muy recomendables.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="opiniones" className="py-24 bg-muted/30 overflow-hidden scroll-mt-28 md:scroll-mt-44">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reseñas y opiniones
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-foreground">{review.name}</span>
                <Stars />
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button asChild variant="default" size="lg">
            <a
              href="https://www.google.com/search?q=Construcciones+y+reformas+Jes%C3%BAs+Ortiz+S.L"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todas las reseñas en Google
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://search.google.com/local/writereview?placeid="
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
