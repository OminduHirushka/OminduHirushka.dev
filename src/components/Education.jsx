import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMedal,
} from "react-icons/fa";

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "Cardiff Metropolitan University",
      period: "2024 - Present",
      location: "Cardiff, UK",
      status: "Current",
      description:
        "Pursuing a comprehensive Software Engineering degree focusing on modern development practices, software architecture, and emerging technologies.",
      highlights: [
        "Software Development",
        "System Design",
        "Database Management",
        "Web Technologies",
        "Computational Intelligence",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      degree: "HND in Computing and Software Engineering",
      institution: "ICBT Campus",
      period: "2022 - 2024",
      location: "Nugegoda, Sri Lanka",
      status: "Completed",
      description:
        "Completed Higher National Diploma with focus on practical software development skills and industry-relevant technologies.",
      highlights: [
        "Programming Fundamentals",
        "Web Development",
        "Database Design",
        "Software Testing",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      degree: "G.C.E. A/L Examination - 2020",
      institution: "Royal College, Polonnaruwa",
      period: "2017 - 2019",
      location: "Polonnaruwa, Sri Lanka",
      status: "Completed",
      description:
        "Completed Advanced Level examination with strong performance in technology and mathematics subjects.",
      highlights: ["Information Technology", "Combined Mathematics", "Physics"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      degree: "G.C.E O/L Examination - 2016",
      institution: "Royal College, Polonnaruwa",
      period: "2011 - 2016",
      location: "Polonnaruwa, Sri Lanka",
      status: "Completed",
      highlights: ["Mathematics", "Science", "Languages", "Aesthetics"],
      gradient: "from-orange-500 to-red-600",
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
    <section id="education" className="py-20 px-6">
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
            Education
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-blue-400 hidden md:block" />

                  <div className="md:ml-20">
                    <motion.div
                      className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 card-hover relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className={`bg-gradient-to-r ${edu.gradient} p-2 rounded-lg`}
                            >
                              <FaGraduationCap className="text-white text-xl" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {edu.degree}
                              </h3>
                              <p className="text-blue-300 font-medium">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            edu.status === "Current"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-white/70">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-sm" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-sm" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>

                      {edu.subjects && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <FaMedal className="text-yellow-400" />
                            <span className="text-white font-medium">
                              Subjects:
                            </span>
                          </div>
                          <p className="text-white/80 ml-6">{edu.subjects}</p>
                        </div>
                      )}

                      {edu.results && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <FaMedal className="text-yellow-400" />
                            <span className="text-white font-medium">
                              Results:
                            </span>
                          </div>
                          <p className="text-white/80 ml-6">{edu.results}</p>
                        </div>
                      )}

                      <p className="text-white/80 leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
