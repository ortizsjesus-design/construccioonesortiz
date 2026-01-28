import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import iglesia2Antes from "@/assets/iglesia-2-antes.jpg";
import iglesia2Despues from "@/assets/iglesia-2-despues.jpg";
import bano2Antes from "@/assets/bano-2-antes.jpg";
import bano2Despues from "@/assets/bano-2-despues.jpg";
import bano3Antes from "@/assets/bano-3-antes.jpg";
import bano3Despues from "@/assets/bano-3-despues.jpg";
import trabajoManitas1 from "@/assets/trabajo-manitas-1.jpg";
import trabajoManitas2 from "@/assets/trabajo-manitas-2.jpg";
import vivienda1Antes from "@/assets/vivienda-1-antes.jpg";
import murosPiedra from "@/assets/muros-piedra.jpg";

type WorkItem = {
  id: number;
  title: string;
  before?: string;
  after?: string;
  image?: string;
  description: string;
};

type Category = {
  id: string;
  label: string;
  items: WorkItem[];
};

const categories: Category[] = [
  {
    id: "viviendas",
    label: "Reforma integral viviendas",
    items: [
      {
        id: 1,
        title: "Reforma interior moderno",
        before: antesInteriorModerno,
        after: proyectoInteriorModerno,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 2,
        title: "Reforma integral vivienda",
        image: vivienda1Antes,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "banos-cocinas",
    label: "Baños y cocinas",
    items: [
      {
        id: 3,
        title: "Baño piedra natural",
        before: antesBanoPiedra,
        after: proyectoBanoPiedra,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 4,
        title: "Reforma de baño 2",
        before: bano2Antes,
        after: bano2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 5,
        title: "Reforma de baño 3",
        before: bano3Antes,
        after: bano3Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 6,
        title: "Reforma de cocina 1",
        before: cocina1Antes,
        after: cocina1Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 7,
        title: "Reforma de cocina 2",
        before: cocina2Antes,
        after: cocina2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "albanileria",
    label: "Albañilería",
    items: [
      {
        id: 8,
        title: "Montaje de armarios",
        image: trabajoManitas2,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 9,
        title: "Instalación de radiadores",
        image: trabajoManitas1,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 10,
        title: "Muros de piedra",
        image: murosPiedra,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "fachadas",
    label: "Todo tipo de fachadas",
    items: [
      {
        id: 11,
        title: "Rehabilitación fachada piedra",
        before: antesFachadaPiedra,
        after: proyectoFachadaPiedra,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 12,
        title: "Rehabilitación fachada 2",
        before: fachada1Antes,
        after: fachada1Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 13,
        title: "Rehabilitación fachada 3",
        before: fachada2Antes,
        after: fachada2Despues,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "cubiertas",
    label: "Cubiertas",
    items: [
      {
        id: 14,
        title: "Estructura techumbre",
        before: antesEstructuraTechumbre,
        after: proyectoVigasMadera,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 15,
        title: "Tejado cubierta",
        before: antesTejadoCubierta,
        after: proyectoTejadoCubierta,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
      {
        id: 16,
        title: "Estructura madera y piedra",
        before: antesEstructuraMadera,
        after: proyectoEstructuraMadera,
        description: "Trabajos realizados en La Rioja Alta para cliente particular.",
      },
    ],
  },
  {
    id: "patrimonio",
    label: "Patrimonio rural",
    items: [
      {
        id: 17,
        title: "Reforma cubierta iglesia",
        before: iglesia2Antes,
        after: iglesia2Despues,
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trabajos realizados
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <Tabs defaultValue="viviendas" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 text-sm md:text-base data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-full border border-muted-foreground/20 data-[state=inactive]:bg-muted/30"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
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
                          <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                            {item.title}
                          </h3>
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
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
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
