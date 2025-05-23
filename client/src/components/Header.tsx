import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScrollActive from "../hooks/useScrollActive";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  toggleMobileMenu: (show: boolean) => void;
}

export default function Header({ toggleMobileMenu }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollActive();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-light dark:bg-dark bg-opacity-95 dark:bg-opacity-95 z-40 transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold font-heading">
            <span className="text-primary">Boby</span> <span className="dark:text-white">Sharma</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a 
                href="#home" 
                className={`nav-link font-medium transition duration-300 ${
                  activeSection === "home" 
                    ? "text-primary" 
                    : "text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">Home</motion.span>
                {activeSection === "home" && (
                  <motion.div 
                    className="h-0.5 bg-primary mt-0.5" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
              <a 
                href="#skills" 
                className={`nav-link font-medium transition duration-300 ${
                  activeSection === "skills" 
                    ? "text-primary" 
                    : "text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">Skills</motion.span>
                {activeSection === "skills" && (
                  <motion.div 
                    className="h-0.5 bg-primary mt-0.5" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
              <a 
                href="#projects" 
                className={`nav-link font-medium transition duration-300 ${
                  activeSection === "projects" 
                    ? "text-primary" 
                    : "text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">Projects</motion.span>
                {activeSection === "projects" && (
                  <motion.div 
                    className="h-0.5 bg-primary mt-0.5" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
              <a 
                href="#experience" 
                className={`nav-link font-medium transition duration-300 ${
                  activeSection === "experience" 
                    ? "text-primary" 
                    : "text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">Experience</motion.span>
                {activeSection === "experience" && (
                  <motion.div 
                    className="h-0.5 bg-primary mt-0.5" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
              <a 
                href="#education" 
                className={`nav-link font-medium transition duration-300 ${
                  activeSection === "education" 
                    ? "text-primary" 
                    : "text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">Education</motion.span>
                {activeSection === "education" && (
                  <motion.div 
                    className="h-0.5 bg-primary mt-0.5" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
              <a 
                href="#contact" 
                className={`nav-link font-medium transition duration-300 ${
                  activeSection === "contact" 
                    ? "text-primary" 
                    : "text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block">Contact</motion.span>
                {activeSection === "contact" && (
                  <motion.div 
                    className="h-0.5 bg-primary mt-0.5" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </nav>
            
            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Section */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="text-dark dark:text-white text-xl"
              onClick={() => toggleMobileMenu(true)}
              aria-label="Open mobile menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
