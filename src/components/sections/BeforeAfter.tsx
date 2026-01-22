import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// Imágenes "después" existentes
import proyectoVigasMadera from "@/assets/proyecto-vigas-madera.webp";
import proyectoBanoPiedra from "@/assets/proyecto-bano-piedra.webp";
import proyectoInteriorModerno from "@/assets/proyecto-interior-moderno.webp";
import proyectoEstructuraMadera from "@/assets/proyecto-estructura-madera.webp";
import proyectoTejadoCubierta from "@/assets/proyecto-tejado-cubierta.webp";
import proyectoFachadaPiedra from "@/assets/proyecto-fachada-piedra.webp";

// Imágenes "antes" - placeholder hasta que el usuario indique los emparejamientos
// TODO: El usuario indicará cómo emparejar las fotos "antes" con las "después"

// Por ahora, estructura preparada para recibir los emparejamientos:
const comparisons = [
  {
    id: 1,
    title: "Interior moderno",
    before: "", // Pendiente: foto antes
    after: proyectoInteriorModerno,
  },
  {
    id: 2,
    title: "Estructura en madera y piedra",
    before: "", // Pendiente: foto antes
    after: proyectoEstructuraMadera,
  },
  {
    id: 3,
    title: "Estructura y techumbre",
    before: "", // Pendiente: foto antes
    after: proyectoVigasMadera,
  },
  {
    id: 4,
    title: "Tejado y cubierta",
    before: "", // Pendiente: foto antes
    after: proyectoTejadoCubierta,
  },
  {
    id: 5,
    title: "Rehabilitación fachada",
    before: "", // Pendiente: foto antes
    after: proyectoFachadaPiedra,
  },
  {
    id: 6,
    title: "Baño en piedra",
    before: "", // Pendiente: foto antes
    after: proyectoBanoPiedra,
  },
];

const BeforeAfter = () => {
  // Filtrar solo las comparaciones que tienen ambas imágenes
  const activeComparisons = comparisons.filter(
    (comp) => comp.before && comp.after
  );

  // Si no hay comparaciones activas, no renderizar la sección
  if (activeComparisons.length === 0) {
    return null;
  }

  return (
    <section id="antes-despues" className="py-24 bg-muted/30">
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
          {activeComparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BeforeAfterSlider
                beforeImage={comparison.before}
                afterImage={comparison.after}
                title={comparison.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
