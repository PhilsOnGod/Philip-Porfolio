import { useState, createContext, useContext } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import SectionTransition from "@/components/SectionTransition";

// Context to share loading state
export const LoadingContext = createContext(true);
export const useLoadingState = () => useContext(LoadingContext);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <LoadingContext.Provider value={isLoading}>
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
              <Experience />
            </SectionTransition>
            <Projects />
            <SectionTransition>
              <Resume />
            </SectionTransition>
            <SectionTransition>
              <Testimonials />
            </SectionTransition>
            <SectionTransition>
              <Contact />
            </SectionTransition>
          </div>
          <ScrollToTop />
        </main>
      </LoadingContext.Provider>
    </>
  );
};

export default Index;
