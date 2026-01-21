import { motion } from "framer-motion";
import { useState } from "react";

import proyectoVigasMadera from "@/assets/proyecto-vigas-madera.webp";
import proyectoBanoPiedra from "@/assets/proyecto-bano-piedra.webp";
import proyectoInteriorModerno from "@/assets/proyecto-interior-moderno.webp";
import proyectoEstructuraMadera from "@/assets/proyecto-estructura-madera.webp";
import proyectoTejadoCubierta from "@/assets/proyecto-tejado-cubierta.webp";
import proyectoFachadaPiedra from "@/assets/proyecto-fachada-piedra.webp";

const projects = [
  {
    image: proyectoFachadaPiedra,
    title: "Rehabilitación de caserío en piedra",
    location: "La Rioja",
  },
  {
    image: proyectoBanoPiedra,
    title: "Baño en piedra natural y luz cenital",
    location: "Diseño interior",
  },
  {
    image: proyectoInteriorModerno,
    title: "Interior moderno tras reforma integral",
    location: "Reforma completa",
  },
  {
    image: proyectoVigasMadera,
    title: "Estructura y techumbre en madera",
    location: "Rehabilitación",
  },
  {
    image: proyectoTejadoCubierta,
    title: "Obra exterior — Tejado y cubierta",
    location: "Cubiertas",
  },
  {
    image: proyectoEstructuraMadera,
    title: "Estructura en madera y piedra",
    location: "Construcción tradicional",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
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
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Proyecto ampliado"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Portfolio;
