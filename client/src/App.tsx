import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMobileMenu = (show: boolean) => {
    if (mobileMenuRef.current) {
      if (show) {
        mobileMenuRef.current.classList.remove("hidden");
        mobileMenuRef.current.classList.add("flex");
        document.body.style.overflow = "hidden";
      } else {
        mobileMenuRef.current.classList.remove("flex");
        mobileMenuRef.current.classList.add("hidden");
        document.body.style.overflow = "";
      }
    }
  };

  useEffect(() => {
    // Initialize animate on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((elem) => {
      elem.classList.add("opacity-0");
      observer.observe(elem);
    });

    // Handle scroll to top button visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <div className="bg-light dark:bg-dark text-dark dark:text-white font-sans transition-colors duration-300">
        <MobileMenu ref={mobileMenuRef} closeMobileMenu={() => toggleMobileMenu(false)} />
        <Header toggleMobileMenu={toggleMobileMenu} />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        
        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-40"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
