import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    github: string;
    liveLink?: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white bg-white dark:bg-gray-700 rounded-full p-2 shadow-md z-10"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              {/* Project image */}
              <div className="w-full h-64 md:h-80 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <h2 className="absolute bottom-4 left-6 text-white text-3xl font-bold">{project.title}</h2>
              </div>

              {/* Project details */}
              <div className="p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        </div>
                        <p className="ml-2">{feature}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-black text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    <FaGithub /> GitHub Repository
                  </a>
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                    >
                      <FaExternalLinkAlt /> View Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}