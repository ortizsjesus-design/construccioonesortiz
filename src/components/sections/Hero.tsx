import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";

import heroEstructura from "@/assets/hero-estructura.webp";
import proyectoBano from "@/assets/proyecto-bano-piedra.webp";
import proyectoEstructura from "@/assets/proyecto-estructura-madera.webp";
import proyectoFachada from "@/assets/proyecto-fachada-piedra.webp";
import proyectoInterior from "@/assets/proyecto-interior-moderno.webp";
import proyectoTejado from "@/assets/proyecto-tejado-cubierta.webp";

const heroImages = [
  { src: heroEstructura, alt: "Estructura de madera en caserío de piedra" },
  { src: proyectoFachada, alt: "Fachada de piedra restaurada" },
  { src: proyectoTejado, alt: "Tejado y cubierta" },
  { src: proyectoEstructura, alt: "Estructura de madera" },
  { src: proyectoInterior, alt: "Interior moderno" },
  { src: proyectoBano, alt: "Baño en piedra" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phoneNumber = "+34608918870";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Carousel - Clean crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Construcción, Reformas y Maquinaria en Rioja Alta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-4"
            style={{ color: "#FFFFFF" }}
          >
            +30 años de oficio · Acabados finos · Plazos cumplidos
          </motion.p>

          <motion.a
            href={`tel:${phoneNumber}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold mb-8 hover:opacity-80 transition-opacity"
            style={{ color: "#FFFFFF" }}
          >
            <Phone className="w-6 h-6" />
            608 918 870
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group mx-auto w-fit"
            >
              Pedir valoración sin compromiso
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
