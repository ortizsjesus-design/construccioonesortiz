const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary-foreground/80 text-sm">
          Construcciones y Reformas Jesús Ortiz S.L. — 25+ años de experiencia · La Rioja
        </p>
        <p className="text-primary-foreground/60 text-xs mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
