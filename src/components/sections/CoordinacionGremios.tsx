import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import coordinacionGremios from "@/assets/coordinacion-gremios.png";

const CoordinacionGremios = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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

  return (
    <>
      <section 
        ref={sectionRef}
        id="coordinacion-gremios" 
        className="py-24 bg-background scroll-mt-44 md:scroll-mt-48"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coordinación de Gremios
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gestionamos todos los gremios necesarios para tu proyecto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="relative w-full overflow-hidden rounded-xl cursor-pointer shadow-md group"
              style={{ minHeight: '200px' }}
              onClick={() => setSelectedImage(coordinacionGremios)}
            >
              {/* Skeleton placeholder */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              
              {isInView && (
                <img
                  src={coordinacionGremios}
                  alt="Coordinación de Gremios"
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setIsLoaded(true)}
                />
              )}
            </div>
          </motion.div>
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

export default CoordinacionGremios;
