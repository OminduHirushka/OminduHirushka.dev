import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaGlobe,
} from "react-icons/fa";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "WildPulse",
      subtitle: "Gate Monitoring and Wildlife Services Management System",
      description:
        "A comprehensive web-based platform developed to address human-elephant conflict in Sri Lanka. The system combines real-time electric gate monitoring, an AI-powered wildlife identification tool, a two-way community communication hub with SMS alerts, and a safari booking service. Field officers and community members use the gate monitoring system to receive instant updates and alerts, while the safari booking platform connects users, registered drivers, and park officers to manage bookings and schedules.",
      technologies: ["Spring Boot", "React", "MySQL", "Firebase", "ML"],
      type: "web",
      status: "Ongoing",
      icon: FaGlobe,
      gradient: "from-green-400 to-blue-500",
      githubUrl: "https://github.com/OminduHirushka/WildPulse",
    },
    {
      title: "Pahana Edu",
      subtitle: "Online Ordering & Inventory Management System",
      description:
        "A comprehensive web-based system for a bookshop that supports both online book ordering with delivery and in-store pickup. Customers can register, browse books, manage carts, and complete purchases, while staff handle in-store orders and customers. The system includes robust inventory management, order tracking, and customer management features.",
      technologies: ["Spring Boot", "React", "MySQL", "Firebase"],
      type: "web",
      status: "Completed",
      icon: FaGlobe,
      gradient: "from-purple-400 to-pink-500",
      githubUrl: "https://github.com/OminduHirushka/PahanaEdu-ClientSide",
    },
    {
      title: "Villa Park",
      subtitle: "Hotel Booking Management System",
      description:
        "A sophisticated hotel booking platform where customers can search for rooms by categories (luxury, semi-luxury, non-AC), check availability, book rooms for specific dates, and leave feedback. The system includes comprehensive admin functionality for managing bookings, room availability, events, and user accounts.",
      technologies: ["MERN Stack"],
      type: "web",
      status: "Completed",
      icon: FaGlobe,
      gradient: "from-blue-400 to-purple-500",
      githubUrl:
        "https://github.com/OminduHirushka/Villa_Park_Hotel-ClientSide",
    },
    {
      title: "Traffic Turn",
      subtitle: "Online Fine Management System",
      description:
        "A Fine Management System designed to streamline the issuance and payment of traffic fines. Drivers can register, view their fines, and complete payments online. Traffic officers can issue fines digitally, while administrators manage user roles, monitor transactions, and generate comprehensive reports.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript"],
      type: "web",
      status: "Completed",
      icon: FaGlobe,
      gradient: "from-red-400 to-orange-500",
      githubUrl: "https://github.com/OminduHirushka/TrafficTurn",
    },
    {
      title: "Knowledge Bank Library",
      subtitle: "Library Management System",
      description:
        "A library management system where students can borrow and return books with due date tracking. Late returns incur fines, and librarians manage book availability, borrowing history, and fines through a comprehensive staff dashboard. The system provides efficient book management and user tracking capabilities.",
      technologies: ["Java"],
      type: "desktop",
      status: "Completed",
      icon: FaCode,
      gradient: "from-indigo-400 to-cyan-500",
      githubUrl:
        "https://github.com/OminduHirushka/knowledge_Bank_Library-Java",
    },
    {
      title: "The Bloom Room",
      subtitle: "E-Commerce Mobile App",
      description:
        "An elegant e-commerce mobile application for a flower shop, enabling users to browse products, add items to their cart, and make purchases. Admins and staff can manage product inventory, customer information, and process orders through the app's comprehensive management system.",
      technologies: ["Java", "Android Studio"],
      type: "mobile",
      status: "Completed",
      icon: FaMobile,
      gradient: "from-pink-400 to-rose-500",
      githubUrl: "https://github.com/OminduHirushka/BloomRoom",
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

  const projectVariants = {
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

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={projectVariants}
            className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  className="card-modern p-8 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg`}
                    >
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Ongoing"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          : "bg-green-500/20 text-green-300 border border-green-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <h4 className="text-lg font-medium text-blue-300 mb-4">
                    {project.subtitle}
                  </h4>

                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-gray-800/40 backdrop-blur-xl text-white/90 px-4 py-2 rounded-full text-sm border border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* <div className="flex gap-4">
                    <motion.button
                      className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-white px-4 py-2 rounded-lg transition-colors duration-200 border border-gray-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.button>
                    {project.type === 'web' && (
                      <motion.button
                        className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-200 border border-gray-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </motion.button>
                    )}
                  </div> */}
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={projectVariants} className="text-center mt-12">
            <motion.button
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-gray-800/50 transition-all duration-300 border border-gray-600"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://github.com/OminduHirushka?tab=repositories",
                  "_blank"
                )
              }
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
