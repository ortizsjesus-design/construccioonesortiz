import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { scrollToElement } from "@/lib/scrollTo";
import maquinariaGeneral from "@/assets/maquinaria-general.png";
import miniexcavadora from "@/assets/miniexcavadora-kubota.png";
import dumper from "@/assets/dumper-escalibur.png";
import plataforma from "@/assets/plataforma-elevadora.png";
import manipulador from "@/assets/manipulador-telescopico.png";
import rodillo from "@/assets/rodillo-compactador.png";

const machines = [
  {
    id: "miniexcavadora",
    name: "Miniexcavadora Kubota KB18",
    image: miniexcavadora,
  },
  {
    id: "dumper",
    name: "Dumper de carga Escalibur 1200 kg con tolva giratoria",
    image: dumper,
  },
  {
    id: "plataforma",
    name: "Plataforma elevadora articulada 15,80 m",
    image: plataforma,
  },
  {
    id: "manipulador",
    name: "Manipulador telescópico Manitou MT 1740",
    image: manipulador,
  },
  {
    id: "rodillo",
    name: "Rodillo compactador SVR 700",
    image: rodillo,
  },
];

const Maquinaria = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    scrollToElement(id);
  };

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <section 
      ref={sectionRef}
      id="maquinaria" 
      className="py-24 bg-muted/30 scroll-mt-44 md:scroll-mt-48"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Título de sección */}
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

          {/* Foto general */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-10 -mt-4 relative"
            style={{ minHeight: '200px' }}
          >
            {/* Skeleton placeholder */}
            {!loadedImages.has('general') && (
              <div className="absolute inset-0 bg-muted animate-pulse rounded-xl" />
            )}
            
            {isInView && (
              <img
                src={maquinariaGeneral}
                alt="Servicios auxiliares para profesionales - Alquiler de maquinaria para construcción, trabajos agrícolas y particulares"
                loading="lazy"
                decoding="async"
                className={`w-full rounded-xl shadow-card transition-opacity duration-300 ${
                  loadedImages.has('general') ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad('general')}
              />
            )}
          </motion.div>

          {/* Lista de enlaces a máquinas - estilo elegante */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <ul className="flex flex-col items-center space-y-4">
              {machines.map((machine) => (
                <li key={machine.id}>
                  <button
                    onClick={() => handleScroll(machine.id)}
                    className="text-accent font-semibold text-base md:text-lg uppercase tracking-wide transition-colors duration-300 hover:text-accent/70"
                  >
                    {machine.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Fichas técnicas de cada máquina */}
          <div className="space-y-16">
            {machines.map((machine) => (
              <motion.div
                key={machine.id}
                id={machine.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="scroll-mt-44 md:scroll-mt-48"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {machine.name}
                </h3>
                <div 
                  className="relative"
                  style={{ minHeight: '200px' }}
                >
                  {/* Skeleton placeholder */}
                  {!loadedImages.has(machine.id) && (
                    <div className="absolute inset-0 bg-muted animate-pulse rounded-xl" />
                  )}
                  
                  {isInView && (
                    <img
                      src={machine.image}
                      alt={`Ficha técnica - ${machine.name}`}
                      loading="lazy"
                      decoding="async"
                      className={`w-full rounded-xl shadow-card cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-elevated ${
                        loadedImages.has(machine.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onClick={() => openLightbox(machine.image, `Ficha técnica - ${machine.name}`)}
                      onLoad={() => handleImageLoad(machine.id)}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Maquinaria;
