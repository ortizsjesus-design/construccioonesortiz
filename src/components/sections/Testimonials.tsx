import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    author: "Cristina Muguruza",
    text: "Acertadísima decisión contratar a Ortiz. Seriedad, calidad y precio. Muy agradecidos.",
    rating: 5,
  },
  {
    author: "Juan Urbina",
    text: "Excelentes profesionales, rápidos y con gran calidad en las terminaciones.",
    rating: 5,
  },
  {
    author: "Monica Carballo",
    text: "Nos hicieron una piscina en Cuzcurrita, quedó preciosa. Muy buenos profesionales.",
    rating: 5,
  },
  {
    author: "Sara Ozaeta",
    text: "Tejado y canalones nuevo. Excelente calidad, trabajo y precio. Muy contenta.",
    rating: 5,
  },
  {
    author: "Jose Bolumburu",
    text: "Terraza nivelada, solera y embaldosado. Formalidad y acabado impecable. 100% recomendables.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="opiniones" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opiniones reales
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Reseñas de Google Maps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-muted-foreground font-semibold">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group"
          >
            <a
              href="https://www.google.com/maps/place/Construcciones+y+reformas+Jes%C3%BAs+Ortiz+S.L./"
              target="_blank"
              rel="noopener noreferrer"
            >
              Añadir reseña en Google
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
