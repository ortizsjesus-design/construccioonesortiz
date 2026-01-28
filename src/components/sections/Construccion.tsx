import { motion } from "framer-motion";
import { Hammer, Building, Layers, Home, HardHat } from "lucide-react";

const services = [
  { icon: HardHat, title: "Cimentación y estructura", category: "albanileria" },
  { icon: Hammer, title: "Albañilería completa", category: "albanileria" },
  { icon: Layers, title: "Envolventes", category: "fachadas" },
  { icon: Home, title: "Cubiertas y tejados", category: "cubiertas" },
  { icon: Building, title: "Obra civil", category: "albanileria" },
];

const Construccion = () => {
  const scrollToCategory = (category: string) => {
    const trabajosSection = document.getElementById("trabajos");
    if (trabajosSection) {
      const headerOffset = window.innerWidth < 768 ? 70 : 120;
      const elementPosition = trabajosSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setTimeout(() => {
        const tabTrigger = document.querySelector(`[data-state][value="${category}"]`) as HTMLButtonElement;
        if (tabTrigger) {
          tabTrigger.click();
        }
      }, 500);
    }
  };

  return (
    <section id="construccion" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Construcción
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
              onClick={() => scrollToCategory(service.category)}
              className="bg-background rounded-xl p-6 shadow-card flex items-center gap-4 min-w-[250px] hover:shadow-elevated transition-all cursor-pointer"
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

export default Construccion;
