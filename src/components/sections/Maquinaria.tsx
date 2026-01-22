import { motion } from "framer-motion";

const machinery = [
  {
    name: "Miniexcavadora Kubota KB18",
    icon: "🚜",
    features: [
      "Ideal para trabajar en espacios reducidos",
      "Cazo de excavación de 20 y 40 cm",
      "Cazo de limpieza de 80 cm",
      "Martillo neumático y ahoyador",
    ],
  },
  {
    name: "Dumper de carga Escalibur",
    icon: "🚛",
    features: [
      "Capacidad de carga para 1200 kilos",
      "Tolva giratoria",
      "Muy eficaz para trabajar en espacios reducidos",
    ],
  },
  {
    name: "Plataforma elevadora articulada",
    icon: "🏗️",
    features: [
      "Altura de trabajo de 15,80 m",
      "Opción muy recomendada para trabajos en altura",
      "Total seguridad",
    ],
  },
  {
    name: "Manipulador telescópico Manitou MT 1740",
    icon: "🔧",
    features: [
      "Capacidad de carga de 4000 kilos",
      "Altura de elevación de 17,00 m",
    ],
  },
  {
    name: "Rodillo compactador Escalibur",
    icon: "🛞",
    features: [
      "Rodillo compactador de empuje SVR 700",
      "Ofrece una fuerza de 20 Kn",
      "Acondicionamiento hidráulico de doble dirección",
    ],
  },
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
              Servicios auxiliares y alquiler de maquinaria
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          {/* Servicios auxiliares */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-background rounded-xl p-6 shadow-card mb-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Servicios auxiliares para profesionales:
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                Alquiler de maquinaria para construcción y trabajos agrícolas.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                Alquiler de maquinaria para trabajos particulares.
              </li>
            </ul>
          </motion.div>

          {/* Nuestra maquinaria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Nuestra maquinaria:
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {machinery.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                className="bg-background rounded-xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {item.name}
                    </h4>
                    {item.features.length > 0 && (
                      <ul className="space-y-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-accent/10 rounded-xl p-6 text-center"
          >
            <p className="text-lg font-medium text-foreground">
              Todo soluciones para espacios reducidos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Maquinaria;
