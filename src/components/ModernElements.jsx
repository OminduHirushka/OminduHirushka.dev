import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const ModernElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowQuickNav(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickNavItems = [
    { icon: FaHome, href: "#home", label: "Home" },
    { icon: FaUser, href: "#about", label: "About" },
    { icon: FaCode, href: "#skills", label: "Skills" },
    { icon: FaBriefcase, href: "#experience", label: "Experience" },
    { icon: FaGraduationCap, href: "#education", label: "Education" },
    { icon: FaEnvelope, href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Desktop Quick Navigation - Right Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: showQuickNav ? 0 : 100,
          opacity: showQuickNav ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="glass-modern rounded-full p-2 space-y-2">
          {quickNavItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/80 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                whileHover={{
                  scale: 1.15,
                  y: -3,
                  rotate: 5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: -2,
                  transition: { duration: 0.1 },
                }}
                initial={{ x: 50, opacity: 0, scale: 0.5 }}
                animate={{
                  x: showQuickNav ? 0 : 50,
                  opacity: showQuickNav ? 1 : 0,
                  scale: showQuickNav ? 1 : 0.5,
                  transition: {
                    delay: showQuickNav ? index * 0.1 : 0,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                <IconComponent
                  size={16}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1.5,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6 },
                  }}
                />

                <motion.div
                  className="absolute right-full mr-4 bg-gray-800/95 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-600/50"
                  initial={{ x: 15, opacity: 0, scale: 0.8 }}
                  whileHover={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800/95"></div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: showQuickNav ? 0 : 100,
          opacity: showQuickNav ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 px-2 py-2 safe-area-pb">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {quickNavItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-200 group relative min-w-[60px] min-h-[60px]"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: showQuickNav ? 0 : 20,
                    opacity: showQuickNav ? 1 : 0,
                    transition: {
                      delay: showQuickNav ? index * 0.05 : 0,
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <IconComponent
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-xs mt-1 font-medium group-hover:text-white transition-colors">
                    {item.label}
                  </span>

                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-20 left-4 lg:bottom-6 lg:left-6 bg-gray-800/90 hover:bg-gray-700/90 text-white p-3 lg:p-4 rounded-full border border-gray-600/50 backdrop-blur-xl shadow-2xl shadow-gray-900/25 hover:shadow-gray-900/40 transition-all duration-300 z-40 group ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        whileHover={{
          scale: 1.15,
          y: -5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: 180 }}
        animate={{
          scale: showScrollTop ? 1 : 0,
          rotate: showScrollTop ? 0 : 180,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <FaArrowUp
          className="text-white group-hover:text-gray-200 transition-colors duration-200"
          size={22}
        />

        <motion.div
          className="absolute inset-0 rounded-full bg-gray-600/30 opacity-0 group-hover:opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
          initial={{ y: 5, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          Back to Top
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </motion.div>
      </motion.button>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-800/10 to-gray-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/10 to-gray-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </>
  );
};

export default ModernElements;
