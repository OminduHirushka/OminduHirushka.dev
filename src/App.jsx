import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import ModernElements from "./components/ModernElements";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <ParticleBackground />
      <ModernElements />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
