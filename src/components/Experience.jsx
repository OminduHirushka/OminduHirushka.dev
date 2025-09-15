import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Intern Full-Stack (React) Developer",
      company: "CeyDigital Solutions PVT Ltd.",
      period: "2025 March - Present",
      location: "Bandarawela, Sri Lanka",
      description: [
        <>
          Actively contributing to the development of{" "}
          <a
            href="https://github.com/Worklenz/worklenz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-bold transition-colors duration-200"
          >
            Worklenz
          </a>
          , a project and work management platform used by organizations to
          improve productivity
        </>,
        "Implemented new features and optimized existing modules in React.js to enhance usability and performance",
        "Collaborated with backend developers to integrate APIs and ensure smooth end-to-end functionality",
        "Improved user experience by resolving UI/UX issues and aligning features with client requirements",
        "Applied Agile methodologies, Git workflows, and code reviews to deliver reliable and scalable software",
      ],
      technologies: ["React.js", "Next.js", "PostgreSQL", "Ant Design", "Git"],
      current: true,
    },
  ];

  const courses = [
    {
      title: "Cloud Computing with AWS",
      provider: "LearnFi",
      status: "In Progress",
    },
    {
      title: "Comprehensive Master Java Developer",
      provider: "USE Campus",
      status: "Completed",
    },
    {
      title: "Full-Stack Development (MERN)",
      provider: "SKYREK",
      status: "Completed",
    },
    {
      title: "Machine Learning",
      provider: "Zero2Learn",
      status: "Completed",
    },
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16"
          >
            Experience & Courses
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <FaBriefcase className="text-blue-400" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 card-hover relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {exp.current && (
                      <motion.div
                        className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Current
                      </motion.div>
                    )}

                    <h4 className="text-xl font-semibold text-white mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-blue-400 font-medium mb-3">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4 text-white/70">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sm" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sm" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="text-white/80 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <FaBriefcase className="text-purple-400" />
                Courses & Certifications
              </h3>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg font-semibold text-white">
                        {course.title}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.status === "Completed"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>

                    <p className="text-purple-400 font-medium mb-1">
                      {course.provider}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
