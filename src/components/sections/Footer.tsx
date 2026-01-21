import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary-foreground font-semibold text-lg mb-2">
          CONSTRUCCIONES Y SERVICIOS ORTIZ S.L.
        </p>
        <p className="text-primary-foreground/80 text-sm mb-3">
          30+ años de oficio en Rioja Alta
        </p>
        <a 
          href="tel:+34608918870" 
          className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
          608 918 870
        </a>
        <p className="text-primary-foreground/60 text-xs mt-4">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
