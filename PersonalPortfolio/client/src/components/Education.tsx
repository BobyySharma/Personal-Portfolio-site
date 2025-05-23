import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaCodeBranch, FaAward, FaRobot, FaChartBar, FaCalendarAlt, FaUniversity } from "react-icons/fa";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const certifications = [
    {
      title: "Salesforce Agentforce Specialist",
      description: "Certification focused on Salesforce platform development and implementation of customer service solutions.",
      icon: <FaAward />,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "AI Associate",
      description: "Certification in artificial intelligence fundamentals and applications in software development.",
      icon: <FaRobot />,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Data Analytics Job Simulation",
      description: "Hands-on experience with data analysis tools and methodologies in a simulated work environment.",
      icon: <FaChartBar />,
      iconColor: "text-green-500", 
      bgColor: "bg-green-100 dark:bg-green-900/30"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">
            <span className="text-primary">Education</span> & Certifications
          </h2>
          <p className="text-gray dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-r from-primary to-blue-500 p-6 text-white">
              <div className="flex items-center">
                <FaGraduationCap className="text-2xl mr-3" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h4 className="text-lg font-bold text-dark dark:text-white">B.Tech in Computer Science Engineering</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                    <FaUniversity className="mr-2 text-primary" />
                    <span>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Gwalior</span>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                  <FaCalendarAlt className="mr-1" />
                  <span>2022 – 2026</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-primary" />
                  </div>
                  <p className="ml-3">CGPA: 7.0</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaBook className="text-primary" />
                  </div>
                  <p className="ml-3">Coursework: Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, Web Development</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaCodeBranch className="text-primary" />
                  </div>
                  <p className="ml-3">Actively participated in coding competitions and hackathons</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="bg-gradient-to-r from-secondary to-green-500 p-6 text-white">
              <div className="flex items-center">
                <FaAward className="text-2xl mr-3" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-5">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={cert.title}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-secondary dark:hover:border-secondary transition-colors duration-300 hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-10 h-10 ${cert.bgColor} rounded-full flex items-center justify-center mr-3`}>
                        <span className={cert.iconColor}>{cert.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-bold text-dark dark:text-white">{cert.title}</h4>
                          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded">
                            Completed
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
