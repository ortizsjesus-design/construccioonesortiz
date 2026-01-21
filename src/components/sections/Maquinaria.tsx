import { motion } from "framer-motion";
import { Truck, Calendar, Ruler, Zap, Settings, Package } from "lucide-react";

const machinery = [
  {
    name: "Miniexcavadora 2,7T",
    icon: "🚜",
    features: ["Ancho reducido", "Motor diésel", "Perfecta para obra urbana y jardín", "Transporte incluido (consultar)"],
  },
  {
    name: "Dumper autocargable 3000kg",
    icon: "🚛",
    features: ["Tolva basculante", "Ideal movimiento de tierras y escombros"],
  },
  {
    name: "Retro mixta",
    icon: "🏗️",
    features: ["Brazo hidráulico de alto alcance", "Palas frontales y traseras"],
  },
  {
    name: "Hormigonera eléctrica 160L",
    icon: "⚙️",
    features: ["Bajo consumo", "Obra interior y exterior"],
  },
];

const modalities = [
  { icon: Calendar, text: "Día" },
  { icon: Calendar, text: "Semana" },
  { icon: Calendar, text: "Mes" },
];

const Maquinaria = () => {
  return (
    <section id="maquinaria" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alquiler de maquinaria
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {machinery.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="bg-background rounded-xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {item.name}
                    </h3>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-background rounded-xl p-6 shadow-card"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
              <span className="text-muted-foreground font-medium">
                Modalidades de alquiler:
              </span>
              {modalities.map((mod) => (
                <span
                  key={mod.text}
                  className="bg-accent/20 px-4 py-2 rounded-full text-sm font-medium text-accent"
                >
                  {mod.text}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Truck className="w-5 h-5" />
              <span>Transporte disponible bajo demanda</span>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              Se podrán añadir más máquinas próximamente
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Maquinaria;
