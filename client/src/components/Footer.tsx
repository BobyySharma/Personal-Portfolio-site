import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaMobile, FaPalette } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-primary">Boby</span> Sharma
            </h3>
            <p className="text-gray-400 mb-4">Flutter Developer & Frontend Engineer</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <motion.a 
                href="https://github.com/BobyySharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/boby-sharma-938bba298" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a 
                href="mailto:boby8435s@gmail.com" 
                className="text-gray-400 hover:text-primary transition duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaEnvelope className="text-xl" />
              </motion.a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-300 mb-4">Core Skills</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center justify-center">
                <FaMobile className="mr-2 text-primary" /> Flutter Development
              </li>
              <li className="flex items-center justify-center">
                <FaCode className="mr-2 text-primary" /> Frontend Engineering
              </li>
              <li className="flex items-center justify-center">
                <FaPalette className="mr-2 text-primary" /> UI/UX Design
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-gray-300 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
              <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Boby Sharma. All rights reserved.</p>
          <p className="mt-1">Made with <span className="text-red-500">❤</span> by Boby Sharma</p>
        </div>
      </div>
    </footer>
  );
}
