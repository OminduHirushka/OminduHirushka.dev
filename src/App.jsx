import About from "./components/About";
import Hero from "./components/Hero";
import ModernElements from "./components/ModernElements";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <ParticleBackground />
      <ModernElements />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
