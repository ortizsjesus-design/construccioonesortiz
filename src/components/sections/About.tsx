import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

const highlights = [
  "Acabados finos",
  "Profesionalidad",
  "Plazos cumplidos",
  "Buen precio",
  "Maquinaria propia",
  "Equipo propio",
  "Asesoramiento",
  "+30 años de experiencia",
  "Empresa local",
];

const zones = [
  "Haro",
  "Anguciana",
  "Casalarreina",
  "Cuzcurrita del Río Tirón",
  "Tirgo",
  "Sajazarra",
  "Santo Domingo de la Calzada",
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
              Empresa
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-muted/40 rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-foreground leading-relaxed mb-8">
              <span className="font-semibold text-primary">
                Construcciones, Reformas y Servicios Jesús Ortiz S.L.
              </span>{" "}
              es una empresa local con más de 30 años de experiencia en construcción,
              reformas, rehabilitación y obra. Oficio tradicional con acabados finos,
              cumplimiento de plazos y servicio cercano.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-6">
              Por qué nos llaman
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Zona de trabajo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-muted/40 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Zona de trabajo
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Trabajamos en toda la Rioja Alta y alrededores:
            </p>
            <div className="flex flex-wrap gap-2">
              {zones.map((zone) => (
                <span
                  key={zone}
                  className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-sm"
                >
                  {zone}
                </span>
              ))}
              <span className="bg-accent/20 px-4 py-2 rounded-full text-sm font-medium text-accent">
                y alrededores
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
