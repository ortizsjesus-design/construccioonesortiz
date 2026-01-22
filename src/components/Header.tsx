import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOrtiz from "@/assets/logo-ortiz.png";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#video", label: "Vídeo" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contacto", label: "Contacto" },
];

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
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
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
      <div className="w-full max-w-full px-3">
        <div className="flex items-center justify-between py-2 md:py-3 w-full">
          {/* Logo y texto */}
          <a
            href="#"
            className="flex items-center gap-2 md:gap-3 transition-colors flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img 
              src={logoOrtiz} 
              alt="Logo Construcciones y Servicios Jesús Ortiz" 
              className="h-24 sm:h-28 md:h-32 lg:h-44 w-auto object-contain"
            />
            <span 
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight max-w-[160px] sm:max-w-none"
              style={{ color: "#000000" }}
            >
              Construcciones y Servicios Jesús Ortiz
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-base font-medium transition-colors hover:opacity-80"
                style={{ color: "#000000" }}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="cta"
              size="default"
              onClick={() => scrollToSection("#contacto")}
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
