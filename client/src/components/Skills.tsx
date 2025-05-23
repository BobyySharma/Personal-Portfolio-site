import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFire, FaPaintBrush, FaCode, FaReact, FaGit, FaDatabase, FaLinux, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("mobile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll(".skill-bar");
            skillBars.forEach((bar) => {
              const width = (bar as HTMLElement).dataset.width || "0%";
              (bar as HTMLElement).style.width = width;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillCategories = {
    mobile: [
      { name: "Flutter & Dart", icon: <SiFlutter className="text-blue-500" />, percentage: 90 },
      { name: "Firebase", icon: <FaFire className="text-orange-500" />, percentage: 85 },
      { name: "GetX State Management", icon: <FaReact className="text-blue-400" />, percentage: 85 },
      { name: "Mobile UI/UX", icon: <FaMobileAlt className="text-primary" />, percentage: 80 }
    ],
    programming: [
      { name: "C/C++", icon: <FaCode className="text-gray-600 dark:text-gray-300" />, percentage: 75 },
      { name: "Object-Oriented Programming", icon: <FaCode className="text-purple-500" />, percentage: 80 },
      { name: "SQL & Databases", icon: <FaDatabase className="text-green-500" />, percentage: 70 },
      { name: "Git & Version Control", icon: <FaGit className="text-orange-600" />, percentage: 80 }
    ],
    design: [
      { name: "UI/UX Design", icon: <FaPaintBrush className="text-pink-500" />, percentage: 80 },
      { name: "Responsive Design", icon: <FaLaptopCode className="text-teal-500" />, percentage: 85 },
      { name: "Linux", icon: <FaLinux className="text-yellow-500" />, percentage: 75 }
    ]
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray dark:text-gray-300 max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools that enable me to build high-quality mobile applications and frontend solutions.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "mobile" 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              }`}
            >
              Mobile Dev
            </button>
            <button
              onClick={() => setActiveTab("programming")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "programming" 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "design" 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
              }`}
            >
              Design & Tools
            </button>
          </div>
        </div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeTab} // Force re-animation when tab changes
        >
          {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">
                  {skill.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold dark:text-white">{skill.name}</h3>
                    <span className="text-primary text-lg font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div 
                      className="skill-bar bg-primary h-2.5 rounded-full" 
                      style={{ width: "0%" }} 
                      data-width={`${skill.percentage}%`}
                    ></div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mt-2"
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Technologies Tags */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            "REST API", "JSON", "OOPs", "Dart", "State Management", "Android", "iOS", 
            "Problem Solving", "Team Collaboration", "App Development"
          ].map((tag, index) => (
            <motion.span 
              key={tag}
              className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
              whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "white" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { delay: 0.3 + index * 0.05 } 
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
