import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-8"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8 md:p-12 text-left max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-semibold text-white mb-4"
                >
                  Profile
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-white/80 leading-relaxed mb-6"
                >
                  A motivated Software Engineering undergraduate with a strong
                  foundation in Java, Spring Boot, and React development.
                  Experienced in building web applications, with past exposure
                  to mobile development. Known for a detail-oriented approach
                  and problem-solving mindset, with a passion for delivering
                  innovative and efficient solutions.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Current Focus
                  </h4>
                  <p className="text-white/70">
                    Full-Stack Development with Modern Technologies
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Experience
                  </h4>
                  <p className="text-white/70">
                    Intern Full-Stack Developer at CeyDigital Solutions
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Education
                  </h4>
                  <p className="text-white/70">
                    BSc (Hons) in Software Engineering
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
