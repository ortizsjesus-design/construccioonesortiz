import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOrtiz from "@/assets/logo-ortiz.png";
import { scrollToElement } from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

const ALQUILER_PRO_URL = "/alquiler-pro";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contacto", label: "Contacto" },
];

const pulseTransition = {
  repeat: Infinity,
  duration: 1.2,
  ease: "easeInOut" as const,
};

const AlquilerNavButton = ({
  onClick,
  twoLine = false,
  className,
}: {
  onClick: () => void;
  twoLine?: boolean;
  className?: string;
}) => (
  <motion.button
    onClick={onClick}
    animate={{
      scale: [1, 1.1, 1],
      opacity: [1, 0.78, 1],
      textShadow: [
        "0 0 0 hsl(205 85% 45% / 0)",
        "0 0 10px hsl(205 85% 45% / 0.55)",
        "0 0 0 hsl(205 85% 45% / 0)",
      ],
    }}
    transition={pulseTransition}
    className={cn(
      "font-bold text-accent transition-colors hover:text-accent/80",
      className
    )}
  >
    {twoLine ? (
      <span className="flex flex-col items-center leading-[1.05] text-center">
        <span>Alquiler</span>
        <span>maquinaria</span>
      </span>
    ) : (
      "Alquiler maquinaria"
    )}
  </motion.button>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToElement(href);
  };

  const openAlquilerPro = () => {
    setIsMobileMenuOpen(false);
    window.open(ALQUILER_PRO_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.75)",
      }}
    >
      <div className="w-full px-3 lg:pl-4 lg:pr-8 xl:pl-6 xl:pr-10">
        <div className="flex items-center justify-between py-2 md:py-3 w-full gap-2">
          {/* Logo y texto - Izquierda */}
          <a
            href="#"
            className="flex items-center gap-2 transition-colors flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logoOrtiz}
              alt="Logo Construcciones y Servicios Jesús Ortiz"
              className="h-24 sm:h-28 md:h-32 lg:h-28 xl:h-32 w-auto object-contain"
              width={320}
              height={128}
              fetchPriority="high"
              decoding="sync"
            />
            <span
              className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold leading-tight max-w-[160px] sm:max-w-none lg:max-w-[180px] xl:max-w-none lg:mr-8 xl:mr-12"
              style={{ color: "#000000" }}
            >
              Construcciones y Servicios Jesús Ortiz
            </span>
          </a>

          {/* Desktop Navigation - Derecha */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-shrink min-w-0">
            <AlquilerNavButton
              onClick={openAlquilerPro}
              twoLine
              className="text-[11px] xl:text-xs px-1 xl:px-1.5 shrink-0"
            />
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[13px] xl:text-sm font-medium transition-colors hover:opacity-80 whitespace-nowrap px-1 xl:px-2"
                style={{ color: "#000000" }}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="cta"
              size="sm"
              onClick={() => scrollToSection("#contacto")}
              className="ml-0.5 xl:ml-1 whitespace-nowrap text-[13px] xl:text-sm px-3 xl:px-4"
            >
              Contactar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: "#000000" }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <AlquilerNavButton
              onClick={openAlquilerPro}
              className="text-left py-2 text-base"
            />
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-foreground/80 hover:text-primary py-2 transition-colors text-base"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="cta"
              onClick={() => scrollToSection("#contacto")}
              className="mt-2"
            >
              Contactar
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
