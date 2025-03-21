
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

// Sample project data
const PROJECTS = [
  {
    title: "E-commerce Platform",
    description: "A fully featured e-commerce platform with real-time inventory management and payment processing.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
      { name: "Stripe", color: "bg-purple-100 text-purple-800" },
    ],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspace features.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
      { name: "Next.js", color: "bg-gray-100 text-gray-800" },
      { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800" },
      { name: "Tailwind", color: "bg-cyan-100 text-cyan-800" },
    ],
  },
  {
    title: "WordPress Business Website",
    description: "A custom WordPress theme for a corporate client with advanced ACF fields and WooCommerce integration.",
    imageSrc: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "WordPress", color: "bg-cyan-100 text-cyan-800" },
      { name: "PHP", color: "bg-purple-100 text-purple-800" },
      { name: "SCSS", color: "bg-pink-100 text-pink-800" },
      { name: "ACF Pro", color: "bg-green-100 text-green-800" },
    ],
  },
  {
    title: "Real-time Chat Application",
    description: "A feature-rich chat application with end-to-end encryption, file sharing, and voice/video calls.",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Firebase", color: "bg-amber-100 text-amber-800" },
      { name: "WebRTC", color: "bg-red-100 text-red-800" },
      { name: "Material UI", color: "bg-sky-100 text-sky-800" },
    ],
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality content for blogs, social media, and marketing.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800" },
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Express", color: "bg-gray-100 text-gray-800" },
    ],
  },
  {
    title: "Custom WordPress Directory",
    description: "A directory website with custom post types, taxonomies, and advanced search functionality built on WordPress.",
    imageSrc: "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "WordPress", color: "bg-cyan-100 text-cyan-800" },
      { name: "PHP", color: "bg-purple-100 text-purple-800" },
      { name: "jQuery", color: "bg-blue-100 text-blue-800" },
      { name: "MySQL", color: "bg-orange-100 text-orange-800" },
    ],
  },
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="section pt-24 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">Featured Projects</h1>
            <p className="section-subtitle max-w-3xl">
              A collection of projects that showcase my skills and expertise in web development, 
              with a focus on WordPress, React, and modern web technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  techStack={project.techStack}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Projects;
