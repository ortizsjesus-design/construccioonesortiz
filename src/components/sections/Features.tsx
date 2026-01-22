import { motion } from "framer-motion";
import { Home, Building2, Wrench, Truck, Leaf } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Reformas integrales",
    description: "Viviendas, locales y baños",
    href: "#reformas",
  },
  {
    icon: Building2,
    title: "Construcción obra nueva",
    description: "Cimentación, estructura y acabados",
    href: "#construccion",
  },
  {
    icon: Truck,
    title: "Alquiler de maquinaria",
    description: "Equipos profesionales",
    href: "#maquinaria",
  },
  {
    icon: Wrench,
    title: "Mantenimiento, reparaciones y trabajos de bricolaje",
    description: "Soluciones rápidas",
    href: "#mantenimiento",
  },
  {
    icon: Leaf,
    title: "Instalación de césped artificial",
    description: "Jardines y espacios verdes",
    href: "#contacto",
  },
];

const Features = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="pt-4 pb-8 md:pt-8 md:pb-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            Servicios principales
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.button
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => scrollToSection(feature.href)}
              className="group bg-background rounded-xl p-4 md:p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer overflow-hidden"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-warm flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xs md:text-base font-semibold text-foreground mb-1 break-words hyphens-auto leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-tight">{feature.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
