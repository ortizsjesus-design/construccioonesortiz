import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import Features from "@/components/sections/Features";
import Reformas from "@/components/sections/Reformas";
import Construccion from "@/components/sections/Construccion";
import Rehabilitacion from "@/components/sections/Rehabilitacion";
import Maquinaria from "@/components/sections/Maquinaria";
import Mantenimiento from "@/components/sections/Mantenimiento";
import Portfolio from "@/components/sections/Portfolio";
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
        <VideoSection />
        <Features />
        <Reformas />
        <Construccion />
        <Rehabilitacion />
        <Maquinaria />
        <Mantenimiento />
        <Portfolio />
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
