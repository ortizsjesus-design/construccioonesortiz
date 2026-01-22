import { motion } from "framer-motion";
import { Wrench, Droplets, Hammer, Zap } from "lucide-react";

const services = [
  { icon: Wrench, title: "Reparaciones", description: "Arreglos de todo tipo" },
  { icon: Droplets, title: "Impermeabilizaciones", description: "Solución a humedades" },
  { icon: Hammer, title: "Trabajos de Bricolaje", description: "Trabajos puntuales" },
  { icon: Zap, title: "Soluciones rápidas", description: "Respuesta inmediata" },
];

const Mantenimiento = () => {
  return (
    <section id="mantenimiento" className="py-24 bg-muted/30">
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
              Mantenimiento y reparaciones
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones rápidas para mantenimiento y pequeñas reparaciones en viviendas, locales y comunidades.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-background rounded-xl p-4 md:p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xs md:text-base font-semibold text-foreground mb-1 leading-tight">
                  <span className="hidden md:inline">{service.title}</span>
                  <span className="md:hidden">
                    {service.title === "Impermeabilizaciones" ? (
                      <>Impermeabiliza-<br />ciones</>
                    ) : service.title === "Trabajos de Bricolaje" ? (
                      <>Trabajos de<br />Bricolaje</>
                    ) : (
                      service.title
                    )}
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mantenimiento;
