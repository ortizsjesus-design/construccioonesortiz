import { motion } from "framer-motion";
import { Home, Hammer, Building2, Layers, Waves, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Rehabilitación integral",
    description: "Viviendas y caseríos",
  },
  {
    icon: Hammer,
    title: "Reformas interiores",
    description: "Transformación completa",
  },
  {
    icon: Building2,
    title: "Obra nueva",
    description: "Construcción residencial",
  },
  {
    icon: Layers,
    title: "Fachadas y cubiertas",
    description: "Impermeabilización y acabados",
  },
  {
    icon: Waves,
    title: "Piscinas y exteriores",
    description: "Solados y jardines",
  },
  {
    icon: ClipboardCheck,
    title: "Asesoramiento técnico",
    description: "Gestión integral de obra",
  },
];

const Features = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qué hacemos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-background rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
