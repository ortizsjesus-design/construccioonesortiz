import { motion } from "framer-motion";
import { Truck, Calendar, Package } from "lucide-react";

const machinery = [
  { name: "Miniexcavadora Kubota KB18", icon: "🚜" },
  { name: "Dumper 1200 kg", icon: "🚛" },
  { name: "Plataforma elevadora 15,80 m", icon: "🏗️" },
  { name: "Manipulador telescópico 17 m", icon: "🔧" },
  { name: "Rodillo compactador", icon: "🚧" },
  { name: "Generador", icon: "⚡" },
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
        <div className="max-w-4xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-background rounded-2xl p-8 md:p-12 shadow-card"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {machinery.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  className="flex items-center gap-3 bg-muted/50 rounded-lg p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-foreground font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="text-muted-foreground font-medium">
                  Modalidades:
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
              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
                <Truck className="w-5 h-5" />
                <span>Transporte disponible bajo demanda</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Maquinaria;
