import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
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

// Nuevas imágenes - cuarta tanda
import obraCivil from "@/assets/obra-civil.png";
import fachadasTrabajo from "@/assets/fachadas-trabajo.jpg";
import fachadasTrabajo2 from "@/assets/fachadas-trabajo-2.jpg";
import vivienda3Antes from "@/assets/vivienda-3-antes.png";
import vivienda3Despues from "@/assets/vivienda-3-despues.jpg";
import alicatadoInterior2 from "@/assets/alicatado-interior-2.png";

// Nuevas imágenes - sexta tanda
import bano4 from "@/assets/bano-4.webp";
import fachadaMonocapaAntes from "@/assets/fachada-monocapa-antes.jpeg";
import fachadaMonocapaDespues from "@/assets/fachada-monocapa-despues.jpeg";
import fachada4 from "@/assets/fachada-4.jpeg";
import fachada5 from "@/assets/fachada-5.jpeg";

// Nuevas imágenes - quinta tanda
import estructuraMaderaPiedra1 from "@/assets/estructura-madera-piedra-1.jpg";
import estructuraTechumbre1 from "@/assets/estructura-techumbre-1.jpg";
import estructuraTechumbre2 from "@/assets/estructura-techumbre-2.jpg";
import fachadasTrabajo3 from "@/assets/fachadas-trabajo-3.jpg";
import trabajosAlbanileria2 from "@/assets/trabajos-albanileria-2.png";

type WorkItem = {
  id: number;
  title: string;
  before?: string;
  after?: string;
  image?: string;
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
      },
      {
        id: 2,
        title: "Reforma integral vivienda 2",
        before: vivienda2Antes,
        after: vivienda2Despues,
      },
      {
        id: 3,
        title: "Reforma interior sótano",
        before: vivienda3Antes,
        after: vivienda3Despues,
      },
      {
        id: 4,
        title: "Reforma interior moderno",
        before: antesInteriorModerno,
        after: proyectoInteriorModerno,
      },
    ],
  },
  {
    id: "locales",
    title: "Locales comerciales",
    items: [
      {
        id: 5,
        title: "Reforma local estética",
        before: localEsteticaAntes,
        after: localEsteticaDespues,
      },
      {
        id: 6,
        title: "Reforma local panadería",
        before: localPanaderiaAntes,
        after: localPanaderiaDespues,
      },
    ],
  },
  {
    id: "banos-cocinas",
    title: "Baños y cocinas",
    items: [
      {
        id: 7,
        title: "Reforma de baño 2",
        before: bano2Antes,
        after: bano2Despues,
      },
      {
        id: 8,
        title: "Reforma de baño 3",
        before: bano3Antes,
        after: bano3Despues,
      },
      {
        id: 9,
        title: "Baño piedra natural",
        before: antesBanoPiedra,
        after: proyectoBanoPiedra,
      },
      {
        id: 37,
        title: "Baño moderno",
        image: bano4,
      },
      {
        id: 10,
        title: "Reforma de cocina 1",
        before: cocina1Antes,
        after: cocina1Despues,
      },
      {
        id: 11,
        title: "Reforma de cocina 2",
        before: cocina2Antes,
        after: cocina2Despues,
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
      },
      {
        id: 14,
        title: "Alicatados interiores",
        image: alicatadoInterior2,
      },
    ],
  },
  {
    id: "albanileria",
    title: "Albañilería",
    items: [
      {
        id: 15,
        title: "Trabajos de albañilería",
        image: trabajosAlbanileria,
      },
      {
        id: 16,
        title: "Trabajos de albañilería 2",
        image: trabajosAlbanileria2,
      },
      {
        id: 17,
        title: "Todo tipo de trabajos de bricolaje",
        image: trabajoManitas2,
      },
    ],
  },
  {
    id: "cimentacion",
    title: "Cimentación y estructura",
    items: [],
  },
  {
    id: "envolventes",
    title: "Envolventes",
    items: [],
  },
  {
    id: "obra-civil",
    title: "Obra civil",
    items: [
      {
        id: 21,
        title: "Obra civil",
        image: obraCivil,
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
      },
      {
        id: 23,
        title: "Rehabilitación fachada 2",
        before: fachada1Antes,
        after: fachada1Despues,
      },
      {
        id: 24,
        title: "Rehabilitación fachada 3",
        before: fachada2Antes,
        after: fachada2Despues,
      },
      {
        id: 25,
        title: "Trabajo en fachada",
        image: fachadasTrabajo,
      },
      {
        id: 26,
        title: "Fachada piedra terminada",
        image: fachadasTrabajo2,
      },
      {
        id: 27,
        title: "Muros de piedra",
        image: murosPiedra,
      },
      {
        id: 28,
        title: "Muros de piedra exterior",
        image: murosPiedraExterior,
      },
      {
        id: 29,
        title: "Fachada piedra",
        image: fachadasTrabajo3,
      },
      {
        id: 38,
        title: "Revestimiento monocapa",
        before: fachadaMonocapaAntes,
        after: fachadaMonocapaDespues,
      },
      {
        id: 39,
        title: "Fachada piedra y monocapa",
        image: fachada4,
      },
      {
        id: 40,
        title: "Fachada piedra tradicional",
        image: fachada5,
      },
    ],
  },
  {
    id: "cubiertas",
    title: "Cubiertas",
    items: [
      {
        id: 30,
        title: "Estructura techumbre",
        before: antesEstructuraTechumbre,
        after: proyectoVigasMadera,
      },
      {
        id: 31,
        title: "Tejado cubierta",
        before: antesTejadoCubierta,
        after: proyectoTejadoCubierta,
      },
      {
        id: 32,
        title: "Estructura madera y piedra",
        before: antesEstructuraMadera,
        after: proyectoEstructuraMadera,
      },
      {
        id: 33,
        title: "Estructura madera y piedra 2",
        image: estructuraMaderaPiedra1,
      },
      {
        id: 34,
        title: "Estructura techumbre interior",
        image: estructuraTechumbre1,
      },
      {
        id: 35,
        title: "Estructura techumbre forjado",
        image: estructuraTechumbre2,
      },
    ],
  },
  {
    id: "patrimonio",
    title: "Patrimonio rural",
    items: [
      {
        id: 36,
        title: "Reforma cubierta iglesia",
        before: iglesia1Antes,
        after: iglesia1Despues,
      },
    ],
  },
];

const TrabajosRealizados = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Set up IntersectionObserver for each section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sectionRefs.current.forEach((element, sectionId) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(sectionId));
            observer.disconnect();
          }
        },
        { rootMargin: "300px", threshold: 0.01 }
      );
      
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const setSectionRef = useCallback((sectionId: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current.set(sectionId, el);
    }
  }, []);

  const handleImageLoad = useCallback((itemId: number) => {
    setLoadedImages(prev => new Set(prev).add(itemId));
  }, []);

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
            <div 
              key={section.id} 
              id={section.id} 
              ref={setSectionRef(section.id)}
              className="mb-20 scroll-mt-44 md:scroll-mt-48"
            >
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
                        {item.title && (
                          <h4 className="text-lg font-semibold text-foreground mb-3 text-center">
                            {item.title}
                          </h4>
                        )}
                        <div
                          className="relative w-full overflow-hidden rounded-xl cursor-pointer shadow-md group"
                          style={{ minHeight: '200px' }}
                          onClick={() => setSelectedImage(item.image!)}
                        >
                          {/* Skeleton placeholder */}
                          {!loadedImages.has(item.id) && (
                            <div className="absolute inset-0 bg-muted animate-pulse" />
                          )}
                          
                          {visibleSections.has(section.id) && (
                            <img
                              src={item.image}
                              alt={item.title || "Trabajo realizado"}
                              loading="lazy"
                              decoding="async"
                              className={`w-full h-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                                loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => handleImageLoad(item.id)}
                            />
                          )}
                        </div>
                      </div>
                    ) : null}
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
