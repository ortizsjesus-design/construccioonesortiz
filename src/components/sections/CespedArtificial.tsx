import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import cesped1 from "@/assets/cesped-artificial-1.png";
import cesped2 from "@/assets/cesped-artificial-2.png";

const images = [cesped1, cesped2];

const CespedArtificial = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
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

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <section 
      ref={sectionRef}
      id="cesped-artificial" 
      className="py-12 md:py-20 bg-muted/30 scroll-mt-44 md:scroll-mt-48"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Asesoramiento e instalación de césped artificial
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl cursor-pointer group relative"
              style={{ minHeight: '200px' }}
              onClick={() => openLightbox(index)}
            >
              {/* Skeleton placeholder */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              
              {isInView && (
                <img
                  src={image}
                  alt={`Instalación de césped artificial ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-64 md:h-80 object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[currentImage]}
            alt={`Césped artificial ampliado ${currentImage + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CespedArtificial;
