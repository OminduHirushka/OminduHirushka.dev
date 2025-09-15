import About from "./components/About";
import Hero from "./components/Hero";
import ModernElements from "./components/ModernElements";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
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
      </main>
    </div>
  );
}

export default App;
