import { motion } from "framer-motion";
import { Wrench, Droplets, Hammer, Zap } from "lucide-react";

const services = [
  { icon: Wrench, title: "Reparaciones", titleMobile: "Reparaciones", description: "Arreglos de todo tipo", sectionId: "albanileria" },
  { icon: Droplets, title: "Impermeabilizaciones y aislamientos", titleMobile: <>Impermeabiliza-<br />ciones y<br />aislamientos</>, description: "Solución a humedades", sectionId: "albanileria" },
  { icon: Hammer, title: "Trabajos de Bricolaje", titleMobile: <>Trabajos de<br />Bricolaje</>, description: "Trabajos puntuales", sectionId: "albanileria" },
  { icon: Zap, title: "Soluciones rápidas", titleMobile: <>Soluciones<br />rápidas</>, description: "Respuesta inmediata", sectionId: "albanileria" },
];

const Mantenimiento = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = window.innerWidth < 768 ? 100 : 160;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="mantenimiento" className="py-24 bg-muted/30 scroll-mt-44 md:scroll-mt-48">
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
              <motion.button
                key={String(service.title)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(service.sectionId)}
                className="bg-background rounded-xl p-4 md:p-6 shadow-card text-center hover:shadow-elevated transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xs md:text-base font-semibold text-foreground mb-1 leading-tight">
                  <span className="hidden md:inline">{service.title}</span>
                  <span className="md:hidden">{service.titleMobile}</span>
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mantenimiento;
