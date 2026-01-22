import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// Imágenes "después" existentes
import proyectoVigasMadera from "@/assets/proyecto-vigas-madera.webp";
import proyectoBanoPiedra from "@/assets/proyecto-bano-piedra.webp";
import proyectoInteriorModerno from "@/assets/proyecto-interior-moderno.webp";
import proyectoEstructuraMadera from "@/assets/proyecto-estructura-madera.webp";
import proyectoTejadoCubierta from "@/assets/proyecto-tejado-cubierta.webp";
import proyectoFachadaPiedra from "@/assets/proyecto-fachada-piedra.webp";

// Imágenes "antes"
import antesFachadaPiedra from "@/assets/antes-fachada-piedra.png";
import antesBanoPiedra from "@/assets/antes-bano-piedra.png";
import antesInteriorModerno from "@/assets/antes-interior-moderno.png";
import antesEstructuraTechumbre from "@/assets/antes-estructura-techumbre.png";
import antesTejadoCubierta from "@/assets/antes-tejado-cubierta.png";
import antesEstructuraMadera from "@/assets/antes-estructura-madera.png";

// Emparejamientos según orden indicado por el usuario
const comparisons = [
  {
    id: 1,
    title: "Rehabilitación fachada",
    before: antesFachadaPiedra,
    after: proyectoFachadaPiedra,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 2,
    title: "Baño piedra natural",
    before: antesBanoPiedra,
    after: proyectoBanoPiedra,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 3,
    title: "Interior moderno",
    before: antesInteriorModerno,
    after: proyectoInteriorModerno,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 4,
    title: "Estructura techumbre",
    before: antesEstructuraTechumbre,
    after: proyectoVigasMadera,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 5,
    title: "Tejado cubierta",
    before: antesTejadoCubierta,
    after: proyectoTejadoCubierta,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
  {
    id: 6,
    title: "Estructura madera y piedra",
    before: antesEstructuraMadera,
    after: proyectoEstructuraMadera,
    description: "Trabajos realizados en La Rioja Alta para cliente particular.",
  },
];

const BeforeAfter = () => {
  return (
    <section id="antes-despues" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Antes y Después
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desliza para comparar el estado inicial y el resultado final de
            nuestros proyectos
          </p>
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
