import { motion } from "framer-motion";
import { Home, Store, Building2, Layers, TreePine } from "lucide-react";

const services = [
  { icon: Home, title: "Viviendas antiguas", sectionId: "viviendas" },
  { icon: Store, title: "Locales comerciales", sectionId: "locales" },
  { icon: Building2, title: "Fachadas", sectionId: "fachadas" },
  { icon: Layers, title: "Cubiertas", sectionId: "cubiertas" },
  { icon: TreePine, title: "Patrimonio rural", sectionId: "patrimonio" },
];

const Rehabilitacion = () => {
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
    <section id="rehabilitacion" className="py-24 bg-background scroll-mt-44 md:scroll-mt-48">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rehabilitación
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.button
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => scrollToSection(service.sectionId)}
              className="bg-muted/30 rounded-xl p-6 flex items-center gap-4 min-w-[220px] hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">{service.title}</h3>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rehabilitacion;
