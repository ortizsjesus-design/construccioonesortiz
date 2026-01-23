import { motion } from "framer-motion";
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
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="maquinaria" className="py-24 bg-muted/30">
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
            className="mb-10"
          >
            <img
              src={maquinariaGeneral}
              alt="Servicios auxiliares para profesionales - Alquiler de maquinaria para construcción, trabajos agrícolas y particulares"
              className="w-full rounded-xl shadow-card"
            />
          </motion.div>

          {/* Lista de enlaces a máquinas */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <ul className="space-y-3">
              {machines.map((machine) => (
                <li key={machine.id}>
                  <button
                    onClick={() => handleScroll(machine.id)}
                    className="text-accent hover:text-accent/80 underline underline-offset-4 text-left text-base md:text-lg transition-colors"
                  >
                    {machine.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Fichas técnicas de cada máquina */}
          <div className="space-y-16">
            {machines.map((machine, index) => (
              <motion.div
                key={machine.id}
                id={machine.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="scroll-mt-[140px] md:scroll-mt-[150px]"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {machine.name}
                </h3>
                <img
                  src={machine.image}
                  alt={`Ficha técnica - ${machine.name}`}
                  className="w-full rounded-xl shadow-card"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maquinaria;
