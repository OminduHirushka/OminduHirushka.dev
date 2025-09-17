import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import ModernElements from "./components/ModernElements";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <ParticleBackground />
      <ModernElements />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
