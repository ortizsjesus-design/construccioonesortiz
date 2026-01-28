import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Reformas from "@/components/sections/Reformas";
import Construccion from "@/components/sections/Construccion";
import Rehabilitacion from "@/components/sections/Rehabilitacion";
import Mantenimiento from "@/components/sections/Mantenimiento";
import CespedArtificial from "@/components/sections/CespedArtificial";
import Maquinaria from "@/components/sections/Maquinaria";
import TrabajosRealizados from "@/components/sections/TrabajosRealizados";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Reformas />
        <Construccion />
        <Rehabilitacion />
        <Mantenimiento />
        <CespedArtificial />
        <Maquinaria />
        <TrabajosRealizados />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
