import { useEffect } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is optional since we want the script to persist
    };
  }, []);

  return (
    <section id="opiniones" className="py-24 bg-muted/30 overflow-hidden scroll-mt-24 md:scroll-mt-40">
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
          className="max-w-full mx-auto"
          style={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <div
            className="elfsight-app-8ac94cdf-646c-40cf-b499-3b7984e5d49d"
            data-elfsight-app-lazy
            style={{ maxWidth: "100%", overflow: "hidden", minHeight: "350px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
