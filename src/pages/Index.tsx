import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className={`min-h-screen relative ${isLoading ? "overflow-hidden" : ""}`}>
        <ParticleBackground />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </div>
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
