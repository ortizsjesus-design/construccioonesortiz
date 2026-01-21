import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
