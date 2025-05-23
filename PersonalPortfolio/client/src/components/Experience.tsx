import { motion } from "framer-motion";
import { FaCode, FaCloud, FaBell, FaTachometerAlt, FaBuilding, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experienceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in the software development industry.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="timeline-item relative pl-8 pb-12 ml-4 md:ml-12"
            variants={experienceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="timeline-dot dark:bg-primary dark:border-gray-700"></div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaBuilding className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-white">Flutter Developer Intern</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                    <FaCalendarAlt className="mr-2 text-primary text-sm" />
                    <span>Mar 2025 – Apr 2025</span>
                  </div>
                </div>
                <span className="ml-auto md:ml-0 inline-block bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                  Internship
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Ubitech Solutions Pvt. Ltd.</h4>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <motion.div 
                  className="flex items-start"
                  custom={0}
                  variants={listItemVariants}
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaCode className="text-primary text-sm" />
                  </div>
                  <p className="ml-3">Developed responsive mobile application UI components using Flutter framework</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  custom={1}
                  variants={listItemVariants}
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaCloud className="text-primary text-sm" />
                  </div>
                  <p className="ml-3">Integrated RESTful APIs for data fetching and synchronization</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  custom={2}
                  variants={listItemVariants}
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaBell className="text-primary text-sm" />
                  </div>
                  <p className="ml-3">Implemented Firebase Cloud Messaging for push notifications</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  custom={3}
                  variants={listItemVariants}
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FaTachometerAlt className="text-primary text-sm" />
                  </div>
                  <p className="ml-3">Optimized application performance by refactoring code and implementing efficient state management</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-6 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {["Flutter", "Dart", "Firebase", "REST API", "Git"].map((tag, index) => (
                  <motion.span 
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#3B82F6", 
                      color: "white" 
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
