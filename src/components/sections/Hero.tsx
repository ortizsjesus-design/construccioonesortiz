import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

import heroEstructura from "@/assets/hero-estructura.webp";

const Hero = () => {
  const phoneNumber = "+34608918870";

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Static */}
      <div className="absolute inset-0">
        <img
          src={heroEstructura}
          alt="Estructura de madera en caserío de piedra"
          className="w-full h-full object-cover object-center"
        />
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Construcciones y Servicios Jesús Ortiz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-4"
            style={{ color: "#FFFFFF" }}
          >
            Confía tu proyecto a una empresa con más de 30 años de experiencia en el sector.
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
              Contacta con Nosotros
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
