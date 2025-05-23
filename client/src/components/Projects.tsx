import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    github: string;
    liveLink?: string;
  }>(null);

  const projects = [
    {
      id: 1,
      title: "Grofast",
      description: "A comprehensive grocery delivery app built with Flutter and Firebase, focusing on user experience and real-time tracking features. This app streamlines the grocery shopping experience by providing an intuitive interface for browsing, ordering, and tracking deliveries.",
      image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Flutter", "Dart", "Firebase", "GetX"],
      tags: ["mobile", "flutter", "firebase"],
      features: [
        "User authentication and profile management",
        "Real-time order tracking system",
        "Fresh produce categorization and delivery",
        "Secure payment integration",
        "Personalized recommendations based on purchase history"
      ],
      github: "https://github.com/BobyySharma/GroceryApp"
    },
    {
      id: 2,
      title: "HRMS Intern Management App",
      description: "A human resource management system focused on intern management, built with Flutter, GetX for state management, and Firebase for backend services. This application simplifies the process of onboarding, tracking, and managing interns through their entire lifecycle in the organization.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Flutter", "Firebase", "GetX", "UI/UX"],
      tags: ["mobile", "flutter", "firebase"],
      features: [
        "Secure login and authentication system",
        "Attendance tracking with geolocation",
        "Interactive dashboards and reports",
        "Performance evaluation tools",
        "Document management system for intern records"
      ],
      github: "https://github.com/BobyySharma/HRMS_APP"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies,
      features: project.features,
      github: project.github
    });
  };

  return (
    <section id="projects" className="py-16 md:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, demonstrating my skills and expertise in mobile application development.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === "all" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              All Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("mobile")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === "mobile" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Mobile Apps
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("flutter")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === "flutter" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Flutter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("firebase")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === "firebase" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Firebase
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={`${project.title} Interface`} 
                  className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-primary bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={() => openProjectModal(project)}
                    className="bg-white text-primary hover:bg-primary hover:text-white p-3 rounded-full transform transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEye className="text-xl" />
                  </motion.button>
                </div>
                <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">{project.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                        tech === "Flutter" ? "bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300" :
                        tech === "Firebase" ? "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300" :
                        tech === "GetX" ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300" :
                        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-6 flex space-x-4">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
                    whileHover={{ scale: 1.05, x: 3 }}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </motion.a>
                  <motion.button
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center text-primary font-medium"
                    whileHover={{ scale: 1.05, x: 3 }}
                  >
                    <FaEye className="mr-2" /> View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || {
          title: "",
          description: "",
          image: "",
          technologies: [],
          features: [],
          github: ""
        }}
      />
    </section>
  );
}
