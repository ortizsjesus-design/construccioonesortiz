import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Más de 25 años de experiencia",
  "Seriedad en la ejecución",
  "Calidad en los acabados",
  "Acompañamiento al cliente",
];

const About = () => {
  return (
    <section id="empresa" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              La empresa
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-muted/40 rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg text-foreground leading-relaxed mb-8">
              <span className="font-semibold text-primary">
                Construcciones y Reformas Jesús Ortiz S.L.
              </span>{" "}
              es una empresa con más de 25 años de experiencia en construcción,
              rehabilitación y reformas en La Rioja. Destacamos por la seriedad
              en la ejecución, la calidad en los acabados y el acompañamiento al
              cliente durante todo el proceso de obra.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
