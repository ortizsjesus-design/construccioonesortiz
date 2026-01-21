import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LogoBanner = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-start"
        >
          <img
            src={logo}
            alt="Construcciones y Reformas Jesús Ortiz S.L."
            className="h-20 md:h-28 w-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LogoBanner;
