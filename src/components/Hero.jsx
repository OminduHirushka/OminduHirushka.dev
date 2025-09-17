import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    const checkReducedMotion = () => {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };

    checkMobile();
    checkReducedMotion();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", checkReducedMotion);

    return () => mediaQuery.removeEventListener("change", checkReducedMotion);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : isMobile ? 0.1 : 0.3,
        delayChildren: reducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: reducedMotion ? 0 : isMobile ? 20 : 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0.3 : isMobile ? 0.5 : 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <motion.div
              className="w-60 h-100 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
              whileHover={!isMobile && !reducedMotion ? { scale: 1.05 } : {}}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/profile.JPG"
                alt="Omindu Hirushka - Software Engineer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-6xl font-bold border-2 border-gray-600"
                style={{ display: "none" }}
              >
                OH
              </div>
            </motion.div>

            {!reducedMotion && (
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full border-4 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight"
        >
          <motion.span
            className="gradient-text-modern block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            OMINDU
          </motion.span>

          <motion.span
            className="gradient-text-modern block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            HIRUSHKA
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-4 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Full-Stack Developer
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1.2 }}
          />

          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Passionate full-stack developer crafting innovative digital
            experiences with expertise in
            <span className="text-white font-medium"> Java</span>,
            <span className="text-white font-medium"> Spring Boot</span>, and
            <span className="text-white font-medium"> React</span>. Crafting
            tomorrow’s solutions with modern technologies, fueled by innovation
            and guided by user-centric design.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.div
            className="card-modern px-6 py-3 flex items-center gap-3"
            whileHover={!isMobile && !reducedMotion ? { scale: 1.05 } : {}}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <FaMapMarkerAlt className="text-gray-300" />
            <span className="text-white/90 font-medium">
              Pannipitiya, Sri Lanka
            </span>
          </motion.div>

          <motion.div
            className="card-modern px-6 py-3 flex items-center gap-3"
            whileHover={!isMobile && !reducedMotion ? { scale: 1.05 } : {}}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <FaPhone className="text-gray-300" />
            <span className="text-white/90 font-medium">(+94) 70 702 4207</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://github.com/OminduHirushka"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/70 border border-gray-700 rounded-full p-4 text-white hover:text-gray-500 transition-colors"
            whileHover={
              !isMobile && !reducedMotion ? { scale: 1.1, y: -5 } : {}
            }
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/omindu-hirushka"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/70 border border-gray-700 rounded-full p-4 text-white hover:text-blue-400 transition-colors"
            whileHover={
              !isMobile && !reducedMotion ? { scale: 1.1, y: -5 } : {}
            }
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com/omindu_hirushka"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/70 border border-gray-700 rounded-full p-4 text-white hover:text-pink-400 transition-colors"
            whileHover={
              !isMobile && !reducedMotion ? { scale: 1.1, y: -5 } : {}
            }
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            <FaInstagram size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="modern-button group relative overflow-hidden"
            whileHover={
              !isMobile && !reducedMotion ? { scale: 1.05, y: -3 } : {}
            }
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
            onClick={() =>
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="modern-button bg-transparent border-2 border-gray-500 hover:bg-gray-800/30 group relative overflow-hidden"
            whileHover={
              !isMobile && !reducedMotion ? { scale: 1.05, y: -3 } : {}
            }
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
            onClick={() =>
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {!reducedMotion ? (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        ) : (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
