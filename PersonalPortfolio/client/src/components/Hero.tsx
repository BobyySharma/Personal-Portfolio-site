import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight">
              Hi, I'm <span className="text-primary">Boby Sharma</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray dark:text-gray-300 mb-6 font-medium h-12">
              <Typewriter
                options={{
                  strings: [
                    "Flutter Developer",
                    "UI/UX Designer",
                    "Frontend Engineer"
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor"
                }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              I'm a mobile app and frontend developer with expertise in Flutter, Firebase, and UI/UX design. 
              I enjoy creating user-friendly, efficient applications and have experience working with 
              GetX for state management and Firebase for backend integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary border border-primary font-medium py-3 px-6 rounded-lg transition duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="/Resume_BOBY_SHARMA.pdf" 
                className="inline-flex items-center gap-2 bg-secondary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FaDownload /> Resume
              </motion.a>
            </div>
            <div className="mt-8 flex space-x-6">
              <motion.a 
                href="https://github.com/BobyySharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray dark:text-gray-300 hover:text-dark dark:hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/boby-sharma-938bba298" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray dark:text-gray-300 hover:text-dark dark:hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:boby8435s@gmail.com" 
                className="text-gray dark:text-gray-300 hover:text-dark dark:hover:text-white transition duration-300 text-2xl"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-pulse-slow"></div>
              <img 
                src="/src/assets/profile.jpg" 
                alt="Boby Sharma" 
                className="rounded-full object-cover w-72 h-72 md:w-80 md:h-80 border-4 border-white dark:border-gray-800 relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
