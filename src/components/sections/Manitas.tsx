import { motion } from "framer-motion";
import { Wrench, Droplets, Cable, Home } from "lucide-react";

const services = [
  { icon: Droplets, text: "Humedades y juntas" },
  { icon: Wrench, text: "Ajustes y silicona" },
  { icon: Cable, text: "Enchufes y canalones" },
  { icon: Home, text: "Reparaciones menores" },
];

const Manitas = () => {
  return (
    <section id="manitas" className="py-24 bg-background">
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
              Servicio Manitas
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
            <p className="text-lg text-foreground leading-relaxed mb-8 text-center">
              Soluciones rápidas para mantenimiento y pequeñas reparaciones en
              viviendas, locales y comunidades.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mb-3">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {service.text}
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

export default Manitas;
