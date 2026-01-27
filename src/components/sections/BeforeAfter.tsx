import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// Nuevas imágenes de fachadas
import fachada1Antes from "@/assets/fachada-1-antes.png";
import fachada1Despues from "@/assets/fachada-1-despues.png";
import fachada2Antes from "@/assets/fachada-2-antes.png";
import fachada2Despues from "@/assets/fachada-2-despues.png";

// Nuevas imágenes de cocinas
import cocina1Antes from "@/assets/cocina-1-antes.png";
import cocina1Despues from "@/assets/cocina-1-despues.png";
import cocina2Antes from "@/assets/cocina-2-antes.png";
import cocina2Despues from "@/assets/cocina-2-despues.png";

const comparisons = [
  {
    id: 1,
    title: "Rehabilitación fachada 1",
    before: fachada1Antes,
    after: fachada1Despues,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 2,
    title: "Rehabilitación fachada 2",
    before: fachada2Antes,
    after: fachada2Despues,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 3,
    title: "Reforma de cocina 1",
    before: cocina1Antes,
    after: cocina1Despues,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 4,
    title: "Reforma de cocina 2",
    before: cocina2Antes,
    after: cocina2Despues,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
];

const BeforeAfter = () => {
  return (
    <section id="trabajos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabajos realizados
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <BeforeAfterSlider
                beforeImage={comparison.before}
                afterImage={comparison.after}
                title={comparison.title}
              />
              <p className="text-sm text-muted-foreground text-center mt-3">
                {comparison.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
