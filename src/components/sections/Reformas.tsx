import { motion } from "framer-motion";
import { Home, Store, Bath, Grid3X3, Hammer, Mountain } from "lucide-react";

const services = [
  { icon: Home, title: "Viviendas", description: "Reformas completas de hogares", sectionId: "viviendas" },
  { icon: Store, title: "Locales comerciales", description: "Adaptación y renovación", sectionId: "locales" },
  { icon: Bath, title: "Baños y cocinas", description: "Instalaciones modernas", sectionId: "banos-cocinas" },
  { icon: Grid3X3, title: "Solados y alicatados", description: "Pavimentos y revestimientos", sectionId: "solados" },
  { icon: Hammer, title: "Albañilería", description: "Trabajos de albañilería", sectionId: "albanileria" },
  { icon: Mountain, title: "Todo tipo de Fachadas", description: "Acabados de calidad", sectionId: "fachadas" },
];

const Reformas = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = window.innerWidth < 768 ? 70 : 120;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="reformas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reformas
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.button
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => scrollToSection(service.sectionId)}
              className="bg-muted/30 rounded-xl p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reformas;
