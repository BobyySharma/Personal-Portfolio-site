import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill in all fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return;
    }
    
    // Reset error state
    setFormError("");
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "boby8435s@gmail.com",
      link: "mailto:boby8435s@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/boby-sharma-938bba298",
      link: "https://linkedin.com/in/boby-sharma-938bba298",
      color: "text-blue-700",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: <FaGithub className="text-xl" />,
      title: "GitHub",
      value: "github.com/BobyySharma",
      link: "https://github.com/BobyySharma",
      color: "text-gray-700 dark:text-gray-300",
      bgColor: "bg-gray-100 dark:bg-gray-800"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Gwalior, India",
      link: "https://maps.google.com/?q=Gwalior,India",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities or if you have any questions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-2xl font-bold mb-8 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
                      <span className={item.color}>{item.icon}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-dark dark:text-white">{item.title}</h4>
                      <a 
                        href={item.link} 
                        target={item.title !== "Email" ? "_blank" : undefined}
                        rel={item.title !== "Email" ? "noopener noreferrer" : undefined}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10 flex justify-center space-x-6"
                variants={itemVariants}
              >
                {[
                  { icon: <FaGithub />, link: "https://github.com/BobyySharma", color: "text-gray-700 dark:text-gray-300" },
                  { icon: <FaLinkedin />, link: "https://linkedin.com/in/boby-sharma-938bba298", color: "text-blue-700 dark:text-blue-400" },
                  { icon: <FaEnvelope />, link: "mailto:boby8435s@gmail.com", color: "text-red-500 dark:text-red-400" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl ${social.color} hover:scale-125 transition-transform duration-300`}
                    whileHover={{ scale: 1.2, y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h3>
              
              {formError && (
                <motion.div 
                  className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {formError}
                  </div>
                </motion.div>
              )}
              
              {formSubmitted && (
                <motion.div 
                  className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Message sent successfully!
                  </div>
                </motion.div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200" 
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200" 
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200" 
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full flex items-center justify-center bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
