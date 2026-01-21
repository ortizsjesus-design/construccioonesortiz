import { motion } from "framer-motion";
import { Home, Hammer, Building2, Layers, Wrench, Truck } from "lucide-react";
import logo from "@/assets/logo.png";

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
    icon: Layers,
    title: "Rehabilitación integral",
    description: "Viviendas y locales comerciales",
    href: "#rehabilitacion",
  },
  {
    icon: Truck,
    title: "Alquiler de maquinaria",
    description: "Equipos profesionales",
    href: "#maquinaria",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y reparaciones",
    description: "Soluciones rápidas",
    href: "#mantenimiento",
  },
];

const Features = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <img
            src={logo}
            alt="Construcciones y Reformas Jesús Ortiz S.L."
            className="absolute left-0 top-0 h-32 md:h-40 w-auto object-contain"
          />
          <div className="text-center pt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              Servicios principales
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          </div>
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
              className="group bg-background rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-warm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
