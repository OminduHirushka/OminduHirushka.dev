import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import performanceUtils from "../utils/performance";

const ParticleBackground = () => {
  const [animationSettings, setAnimationSettings] = useState(
    performanceUtils.getAnimationSettings()
  );

  useEffect(() => {
    const updateSettings = () => {
      setAnimationSettings(performanceUtils.getAnimationSettings());
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", updateSettings);
    window.addEventListener("resize", updateSettings);

    return () => {
      mediaQuery.removeEventListener("change", updateSettings);
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  const particleCount = animationSettings.particles;

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 8,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/8 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            willChange: "transform, opacity",
          }}
          animate={
            animationSettings.effects
              ? {
                  y: [0, -80, 0],
                  opacity: [0, 0.2, 0],
                }
              : {}
          }
          transition={
            animationSettings.effects
              ? {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                }
              : {}
          }
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/5 via-transparent to-gray-800/5" />
    </div>
  );
};

export default ParticleBackground;
