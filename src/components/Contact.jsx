import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: "", text: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Contact from Portfolio",
      message: formData.message,
      to_email: "ominduhirushka7@gmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatusMessage({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please email me directly at ominduhirushka7@gmail.com",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatusMessage({ type: "", text: "" });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "ominduhirushka7@gmail.com",
      link: "mailto:ominduhirushka7@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "(+94) 70 702 4207",
      link: "tel:+94707024207",
      color: "text-green-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "62/1, Mahalwarawa Road, Pannipitiya",
      link: "#",
      color: "text-red-400",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/OminduHirushka",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/omindu-hirushka",
      color: "hover:text-blue-400",
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

  const itemVariants = {
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
    <section id="contact" className="py-20 px-6">
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
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  I'm always interested in new opportunities, collaborations,
                  and exciting projects. Whether you have a question, want to
                  discuss a potential project, or just want to say hello, I'd
                  love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 flex items-center gap-4 card-hover group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      variants={itemVariants}
                      onClick={() => {
                        if (info.link.startsWith("mailto:")) {
                          const link = document.createElement("a");

                          link.href = info.link;
                          link.style.display = "none";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);

                          setTimeout(() => {
                            try {
                              window.open(info.link);
                            } catch (error) {
                              window.location.href = info.link;
                            }
                          }, 100);
                        } else if (info.link.startsWith("tel:")) {
                          window.open(info.link, "_self");
                        }
                      }}
                    >
                      <div
                        className={`${info.color} text-2xl group-hover:scale-110 transition-transform duration-200`}
                      >
                        <IconComponent />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {info.title}
                        </h4>
                        <p className="text-white/70">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`glass rounded-full p-4 text-white ${social.color} transition-colors duration-200`}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="card-modern p-10">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send Me a Message
                </h3>

                {statusMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center font-medium mb-6 ${
                      statusMessage.type === "success"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {statusMessage.text}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div variants={itemVariants} className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="modern-input w-full"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="modern-input w-full"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={6}
                      className="modern-input w-full resize-none"
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`modern-button w-full flex items-center justify-center gap-3 group relative overflow-hidden ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                    variants={itemVariants}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/60">
              Developed by Omindu Hirushka | © {new Date().getFullYear()}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
