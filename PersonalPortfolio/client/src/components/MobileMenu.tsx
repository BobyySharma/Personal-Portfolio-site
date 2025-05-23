import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollActive from "../hooks/useScrollActive";

interface MobileMenuProps {
  closeMobileMenu: () => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(function MobileMenu(
  { closeMobileMenu }, 
  ref
) {
  const handleLinkClick = () => {
    closeMobileMenu();
  };
  
  const activeSection = useScrollActive();

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div 
      ref={ref}
      id="mobile-menu" 
      className="fixed inset-0 bg-dark dark:bg-black bg-opacity-95 z-50 hidden flex-col justify-center items-center"
    >
      <motion.button 
        onClick={closeMobileMenu}
        className="absolute top-4 right-4 text-white text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-times"></i>
      </motion.button>
      <div className="flex flex-col space-y-6 text-center">
        {menuItems.map((item, index) => (
          <motion.a 
            key={item.href}
            href={item.href} 
            className={`text-white text-xl font-medium transition duration-300 ${
              activeSection === item.href.substring(1) ? "text-primary" : "hover:text-primary"
            }`}
            onClick={handleLinkClick}
            custom={index}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
      <motion.div 
        className="absolute bottom-10 flex space-x-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a 
          href="https://github.com/BobyySharma" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition duration-300 text-xl"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://linkedin.com/in/boby-sharma-938bba298" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition duration-300 text-xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a 
          href="mailto:boby8435s@gmail.com" 
          className="text-white hover:text-primary transition duration-300 text-xl"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </motion.div>
    </div>
  );
});

export default MobileMenu;
