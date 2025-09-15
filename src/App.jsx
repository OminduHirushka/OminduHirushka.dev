import ModernElements from "./components/ModernElements";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <ParticleBackground />
      <ModernElements />
      <Navbar />
    </div>
  );
}

export default App;
