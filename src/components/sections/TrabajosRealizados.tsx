import { motion } from "framer-motion";
import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// Imágenes existentes "después"
import proyectoVigasMadera from "@/assets/proyecto-vigas-madera.webp";
import proyectoBanoPiedra from "@/assets/proyecto-bano-piedra.webp";
import proyectoInteriorModerno from "@/assets/proyecto-interior-moderno.webp";
import proyectoEstructuraMadera from "@/assets/proyecto-estructura-madera.webp";
import proyectoTejadoCubierta from "@/assets/proyecto-tejado-cubierta.webp";
import proyectoFachadaPiedra from "@/assets/proyecto-fachada-piedra.webp";

// Imágenes existentes "antes"
import antesFachadaPiedra from "@/assets/antes-fachada-piedra.png";
import antesBanoPiedra from "@/assets/antes-bano-piedra.png";
import antesInteriorModerno from "@/assets/antes-interior-moderno.png";
import antesEstructuraTechumbre from "@/assets/antes-estructura-techumbre.png";
import antesTejadoCubierta from "@/assets/antes-tejado-cubierta.png";
import antesEstructuraMadera from "@/assets/antes-estructura-madera.png";

// Fachadas existentes
import fachada1Antes from "@/assets/fachada-1-antes.png";
import fachada1Despues from "@/assets/fachada-1-despues.png";
import fachada2Antes from "@/assets/fachada-2-antes.png";
import fachada2Despues from "@/assets/fachada-2-despues.png";

// Cocinas existentes
import cocina1Antes from "@/assets/cocina-1-antes.png";
import cocina1Despues from "@/assets/cocina-1-despues.png";
import cocina2Antes from "@/assets/cocina-2-antes.png";
import cocina2Despues from "@/assets/cocina-2-despues.png";

// Nuevas imágenes
import iglesia1Antes from "@/assets/iglesia-1-antes.jpg";
import iglesia1Despues from "@/assets/iglesia-1-despues.jpg";
import bano2Antes from "@/assets/bano-2-antes.jpg";
import bano2Despues from "@/assets/bano-2-despues.jpg";
import bano3Antes from "@/assets/bano-3-antes.jpg";
import bano3Despues from "@/assets/bano-3-despues.jpg";
import trabajoManitas1 from "@/assets/trabajo-manitas-1.jpg";
import trabajoManitas2 from "@/assets/trabajo-manitas-2.jpg";
import murosPiedra from "@/assets/muros-piedra.jpg";

// Nuevas imágenes - segunda tanda
import vivienda1Antes from "@/assets/vivienda-1-antes.jpg";
import vivienda1Despues from "@/assets/vivienda-1-despues.jpg";
import vivienda2Antes from "@/assets/vivienda-2-antes.jpg";
import vivienda2Despues from "@/assets/vivienda-2-despues.jpg";
import murosPiedraExterior from "@/assets/muros-piedra-exterior.jpg";
import alicatadosExteriores from "@/assets/alicatados-exteriores.jpg";
import trabajosAlbanileria from "@/assets/trabajos-albanileria.jpg";
import localEsteticaAntes from "@/assets/local-estetica-antes.jpg";
import localEsteticaDespues from "@/assets/local-estetica-despues.jpg";

// Nuevas imágenes - tercera tanda
import localPanaderiaAntes from "@/assets/local-panaderia-antes.jpg";
import localPanaderiaDespues from "@/assets/local-panaderia-despues.jpg";
import alicatadoInterior from "@/assets/alicatado-interior.jpg";

// Nuevas imágenes - cuarta tanda
import cimentacion from "@/assets/cimentacion.png";
import envolventes from "@/assets/envolventes.png";
import obraCivil from "@/assets/obra-civil.png";
import fachadasTrabajo from "@/assets/fachadas-trabajo.jpg";
import fachadasTrabajo2 from "@/assets/fachadas-trabajo-2.jpg";
import vivienda3Antes from "@/assets/vivienda-3-antes.png";
import vivienda3Despues from "@/assets/vivienda-3-despues.jpg";
import reformaIntegral from "@/assets/reforma-integral.png";
import alicatadoInterior2 from "@/assets/alicatado-interior-2.png";

type WorkItem = {
  id: number;
  title: string;
  before?: string;
  after?: string;
  image?: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  items: WorkItem[];
};

const sections: Section[] = [
  {
    id: "viviendas",
    title: "Reforma integral de viviendas",
    items: [
      {
        id: 1,
        title: "Reforma integral vivienda 1",
        before: vivienda1Antes,
        after: vivienda1Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 2,
        title: "Reforma integral vivienda 2",
        before: vivienda2Antes,
        after: vivienda2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 3,
        title: "Reforma interior sótano",
        before: vivienda3Antes,
        after: vivienda3Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 4,
        title: "Reforma integral",
        image: reformaIntegral,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 5,
        title: "Reforma interior moderno",
        before: antesInteriorModerno,
        after: proyectoInteriorModerno,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "locales",
    title: "Locales comerciales",
    items: [
      {
        id: 6,
        title: "Reforma local estética",
        before: localEsteticaAntes,
        after: localEsteticaDespues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 7,
        title: "Reforma local panadería",
        before: localPanaderiaAntes,
        after: localPanaderiaDespues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "banos-cocinas",
    title: "Baños y cocinas",
    items: [
      {
        id: 8,
        title: "Reforma de baño 2",
        before: bano2Antes,
        after: bano2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 9,
        title: "Reforma de baño 3",
        before: bano3Antes,
        after: bano3Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 10,
        title: "Baño piedra natural",
        before: antesBanoPiedra,
        after: proyectoBanoPiedra,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 11,
        title: "Reforma de cocina 1",
        before: cocina1Antes,
        after: cocina1Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 12,
        title: "Reforma de cocina 2",
        before: cocina2Antes,
        after: cocina2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "solados",
    title: "Solados y alicatados",
    items: [
      {
        id: 13,
        title: "Alicatados exteriores",
        image: alicatadosExteriores,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 14,
        title: "Alicatados interiores",
        image: alicatadoInterior,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 15,
        title: "Alicatados interiores 2",
        image: alicatadoInterior2,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "albanileria",
    title: "Albañilería",
    items: [
      {
        id: 16,
        title: "Trabajos de albañilería",
        image: trabajosAlbanileria,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 17,
        title: "Montaje de armarios",
        image: trabajoManitas2,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 18,
        title: "Instalación de radiadores",
        image: trabajoManitas1,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "cimentacion",
    title: "Cimentación y estructura",
    items: [
      {
        id: 19,
        title: "Cimentación",
        image: cimentacion,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "envolventes",
    title: "Envolventes",
    items: [
      {
        id: 20,
        title: "Envolventes y aislamiento",
        image: envolventes,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "obra-civil",
    title: "Obra civil",
    items: [
      {
        id: 21,
        title: "Obra civil",
        image: obraCivil,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "fachadas",
    title: "Todo tipo de fachadas",
    items: [
      {
        id: 22,
        title: "Rehabilitación fachada piedra",
        before: antesFachadaPiedra,
        after: proyectoFachadaPiedra,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 23,
        title: "Rehabilitación fachada 2",
        before: fachada1Antes,
        after: fachada1Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 24,
        title: "Rehabilitación fachada 3",
        before: fachada2Antes,
        after: fachada2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 25,
        title: "Trabajo en fachada",
        image: fachadasTrabajo,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 26,
        title: "Fachada piedra terminada",
        image: fachadasTrabajo2,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 27,
        title: "Muros de piedra",
        image: murosPiedra,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 28,
        title: "Muros de piedra exterior",
        image: murosPiedraExterior,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "cubiertas",
    title: "Cubiertas",
    items: [
      {
        id: 29,
        title: "Estructura techumbre",
        before: antesEstructuraTechumbre,
        after: proyectoVigasMadera,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 30,
        title: "Tejado cubierta",
        before: antesTejadoCubierta,
        after: proyectoTejadoCubierta,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 31,
        title: "Estructura madera y piedra",
        before: antesEstructuraMadera,
        after: proyectoEstructuraMadera,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "patrimonio",
    title: "Patrimonio rural",
    items: [
      {
        id: 32,
        title: "Reforma cubierta iglesia",
        before: iglesia1Antes,
        after: iglesia1Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
];

const TrabajosRealizados = () => {
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

          {sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-20 scroll-mt-44 md:scroll-mt-48">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center"
              >
                {section.title}
              </motion.h3>
              
              <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col"
                  >
                    {item.before && item.after ? (
                      <BeforeAfterSlider
                        beforeImage={item.before}
                        afterImage={item.after}
                        title={item.title}
                      />
                    ) : item.image ? (
                      <div className="w-full">
                        <h4 className="text-lg font-semibold text-foreground mb-3 text-center">
                          {item.title}
                        </h4>
                        <div
                          className="relative w-full overflow-hidden rounded-xl cursor-pointer shadow-md group"
                          onClick={() => setSelectedImage(item.image!)}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ) : null}
                    <p className="text-sm text-muted-foreground text-center mt-3">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
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
            alt="Imagen ampliada"
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

export default TrabajosRealizados;
