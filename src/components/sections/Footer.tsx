import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+34608918870";

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Construcciones, Reformas y Servicios Jesús Ortiz S.L.
            </h3>
            <p className="text-background/70 text-sm">
              +30 años de oficio en Rioja Alta
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                608 918 870
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Carretera Santander km 458
                  <br />
                  Cuzcurrita del Río Tirón, La Rioja
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("#servicios")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("#trabajos")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Trabajos
              </button>
              <button
                onClick={() => scrollToSection("#contacto")}
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Contacto
              </button>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Construcciones, Reformas y Servicios Jesús Ortiz S.L. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
