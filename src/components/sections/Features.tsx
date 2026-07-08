import { motion } from "framer-motion";
import { Home, Building2, Truck, Leaf, Users } from "lucide-react";
import { scrollToElement } from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

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
    description: "¡Nueva maquinaria disponible!",
    href: "/alquiler-pro",
    pulse: true,
    highlight: true,
    openInNewTab: true,
  },
  {
    icon: Leaf,
    title: "Instalación de césped artificial",
    description: "Jardines y espacios verdes",
    href: "#cesped-artificial",
  },
  {
    icon: Users,
    title: "Coordinación de Gremios",
    description: "Gestión integral de oficios",
    href: "#coordinacion-gremios",
  },
];

const iconContainerClass =
  "w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-warm flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300";

const pulseTransition = {
  repeat: Infinity,
  duration: 1.5,
  ease: "easeInOut" as const,
};

const Features = () => {
  const handleFeatureClick = (feature: (typeof features)[number]) => {
    if ("openInNewTab" in feature && feature.openInNewTab) {
      window.open(feature.href, "_blank", "noopener,noreferrer");
      return;
    }
    scrollToElement(feature.href);
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
          {features.map((feature, index) => {
            const isHighlighted = "highlight" in feature && feature.highlight;
            const hasPulse = "pulse" in feature && feature.pulse;

            return (
              <motion.button
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => handleFeatureClick(feature)}
                className={cn(
                  "group bg-background rounded-xl p-4 md:p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer overflow-hidden",
                  isHighlighted && "ring-1 ring-accent/35"
                )}
              >
                {hasPulse ? (
                  <motion.div
                    className={cn(iconContainerClass, "relative")}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={pulseTransition}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-accent/25"
                      aria-hidden
                      animate={{ opacity: [0.5, 0.12, 0.5], scale: [1, 1.14, 1] }}
                      transition={pulseTransition}
                    />
                    <feature.icon className="relative w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </motion.div>
                ) : (
                  <div className={iconContainerClass}>
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                )}
                <h3 className="text-xs md:text-base font-semibold text-foreground mb-1 break-words hyphens-auto leading-tight">
                  {feature.title}
                </h3>
                {isHighlighted ? (
                  <motion.span
                    animate={{ scale: [1, 1.05, 1], opacity: [1, 0.88, 1] }}
                    transition={pulseTransition}
                    className="inline-block mt-1 text-[10px] md:text-xs font-bold uppercase tracking-wide text-accent bg-accent/15 px-2 py-1 rounded-full ring-1 ring-accent/40 leading-tight"
                  >
                    {feature.description}
                  </motion.span>
                ) : (
                  <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                    {feature.description}
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
