import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-estructura.webp";

const Hero = () => {
  const phoneNumber = "+34608918870";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hola, me gustaría pedir una valoración sin compromiso."
  )}`;

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estructura de madera en caserío de piedra"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay 30% */}
        <div className="absolute inset-0 bg-black/30" />
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
            Construcción, reformas y maquinaria en Rioja Alta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-4"
            style={{ color: "#FFFFFF" }}
          >
            30+ años de oficio · Acabados finos · Plazos cumplidos
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
              asChild
              className="group mx-auto w-fit"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pide valoración sin compromiso
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
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
