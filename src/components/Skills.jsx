import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAndroid,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaStar,
} from "react-icons/fa";
import {
  SiSpring,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiPhp,
  SiCsharp,
  SiVisualstudiocode,
  SiPostman,
  SiNextdotjs,
  SiAntdesign,
  SiTypescript,
  SiDart,
  SiAstro,
  SiFigma,
  SiAdobephotoshop,
  SiJetbrains,
  SiFlutter,
  SiWordpress,
  SiHibernate,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: FaJava, color: "text-orange-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Python", icon: FaPython, color: "text-blue-400" },
        { name: "C#", icon: SiCsharp, color: "text-purple-500" },
        { name: "Dart", icon: SiDart, color: "text-sky-400" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
        { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring", icon: SiSpring, color: "text-green-500" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Next", icon: SiNextdotjs, color: "text-white" },
        { name: "Node", icon: FaNodeJs, color: "text-green-400" },
        { name: "Express", icon: SiExpress, color: "text-gray-300" },
        { name: "Astro", icon: SiAstro, color: "text-pink-500" },
        { name: "Starlight", icon: FaStar, color: "text-purple-400" },
        { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Ant Design", icon: SiAntdesign, color: "text-blue-600" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
        { name: "Figma", icon: SiFigma, color: "text-pink-500" },
        { name: "Android Studio", icon: FaAndroid, color: "text-green-400" },
        {
          name: "JetBrains Tools",
          icon: SiJetbrains,
          color: "text-yellow-500",
        },
        { name: "WordPress", icon: SiWordpress, color: "text-blue-500" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-400" },
        { name: "pgAdmin 4", icon: SiPostgresql, color: "text-indigo-500" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Hibernate", icon: SiHibernate, color: "text-amber-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="card-modern p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                          transition: { duration: 0.2 },
                        }}
                        className="bg-gray-800/40 backdrop-blur-xl border border-gray-600/50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-500/70 hover:shadow-lg group cursor-pointer"
                      >
                        <IconComponent
                          className={`text-xl mx-auto mb-1 ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                        />
                        <p className="text-white/80 text-xs font-medium leading-tight">
                          {skill.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={categoryVariants} className="mt-12 text-center">
            <div className="card-modern p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Soft Skills
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Team Working",
                  "Problem Solving",
                  "Leadership",
                  "Multitasking",
                  "Communication Skills",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="bg-gray-800/40 backdrop-blur-xl text-white px-6 py-3 rounded-full border border-gray-600/50 hover:bg-gray-700/50 hover:border-gray-500/70 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
