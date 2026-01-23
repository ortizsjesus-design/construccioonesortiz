import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    );
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is optional since we want the script to persist
    };
  }, []);

  return (
    <section id="opiniones" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opiniones de nuestros clientes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div
            className="elfsight-app-5e0f714b-aefd-4475-95f0-11a7abc0a0d5"
            data-elfsight-app-lazy
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Button
            variant="cta"
            size="lg"
            asChild
            className="group shadow-soft hover:shadow-elevated"
          >
            <a
              href="https://www.google.com/search?q=Construcciones+y+reformas+Jesús+Ortiz+S.L#lrd=0xd6e06915b223f2f:0x6f11191b10791b1a,3,"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Déjanos tu opinión en Google!
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
