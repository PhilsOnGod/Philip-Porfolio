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
import CustomCursor from "@/components/CustomCursor";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <main className={`min-h-screen relative ${isLoading ? "overflow-hidden" : ""}`}>
        <ParticleBackground />
        <div className="relative z-10">
          <Navigation />
          <SectionTransition>
            <Hero />
          </SectionTransition>
          <SectionTransition>
            <About />
          </SectionTransition>
          <SectionTransition>
            <Skills />
          </SectionTransition>
          <SectionTransition>
            <Projects />
          </SectionTransition>
          <SectionTransition>
            <Resume />
          </SectionTransition>
          <SectionTransition>
            <Contact />
          </SectionTransition>
        </div>
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
