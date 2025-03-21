
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample project data
const PROJECTS = [
  {
    title: "Custom WooCommerce Platform",
    description: "A fully customized WordPress e-commerce platform with advanced product filtering, custom payment gateways, and integrated inventory management system.",
    imageSrc: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "WordPress", color: "bg-blue-100 text-blue-800" },
      { name: "WooCommerce", color: "bg-purple-100 text-purple-800" },
      { name: "PHP", color: "bg-indigo-100 text-indigo-800" },
      { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
    ],
    category: "wordpress"
  },
  {
    title: "React E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, order management, and inventory tracking built with React and Redux.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Redux", color: "bg-purple-100 text-purple-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
    ],
    category: "react"
  },
  {
    title: "Ruby on Rails CRM System",
    description: "A custom CRM application for a marketing agency with lead tracking, automated follow-ups, and performance analytics built on Ruby on Rails.",
    imageSrc: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "Ruby", color: "bg-red-100 text-red-800" },
      { name: "Rails", color: "bg-pink-100 text-pink-800" },
      { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800" },
      { name: "Hotwire", color: "bg-orange-100 text-orange-800" },
    ],
    category: "rails"
  },
  {
    title: "WordPress Membership Site",
    description: "A membership website with tiered access levels, protected content, and integrated payment processing for a professional training organization.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "WordPress", color: "bg-blue-100 text-blue-800" },
      { name: "PHP", color: "bg-indigo-100 text-indigo-800" },
      { name: "MySQL", color: "bg-cyan-100 text-cyan-800" },
      { name: "jQuery", color: "bg-yellow-100 text-yellow-800" },
    ],
    category: "wordpress"
  },
  {
    title: "DevOps Pipeline Solution",
    description: "Automated CI/CD pipeline setup for a SaaS company, featuring containerized deployment, automated testing, and monitoring systems.",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "Docker", color: "bg-blue-100 text-blue-800" },
      { name: "Jenkins", color: "bg-red-100 text-red-800" },
      { name: "AWS", color: "bg-amber-100 text-amber-800" },
      { name: "Terraform", color: "bg-purple-100 text-purple-800" },
    ],
    category: "devops"
  },
  {
    title: "React Native Mobile App",
    description: "A cross-platform mobile application for a health and wellness company with user authentication, progress tracking, and social features.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "React Native", color: "bg-blue-100 text-blue-800" },
      { name: "Firebase", color: "bg-amber-100 text-amber-800" },
      { name: "Redux", color: "bg-purple-100 text-purple-800" },
      { name: "TypeScript", color: "bg-indigo-100 text-indigo-800" },
    ],
    category: "react"
  },
  {
    title: "Custom WordPress Directory",
    description: "A comprehensive business directory with advanced search, custom taxonomies, and user-submitted listings built on WordPress for a chamber of commerce.",
    imageSrc: "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "WordPress", color: "bg-blue-100 text-blue-800" },
      { name: "PHP", color: "bg-indigo-100 text-indigo-800" },
      { name: "ACF Pro", color: "bg-green-100 text-green-800" },
      { name: "AJAX", color: "bg-purple-100 text-purple-800" },
    ],
    category: "wordpress"
  },
  {
    title: "Ruby on Rails Booking System",
    description: "An appointment scheduling and booking system for a healthcare provider with calendar integration, reminders, and payment processing.",
    imageSrc: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
    techStack: [
      { name: "Ruby", color: "bg-red-100 text-red-800" },
      { name: "Rails", color: "bg-pink-100 text-pink-800" },
      { name: "Stimulus", color: "bg-amber-100 text-amber-800" },
      { name: "Stripe", color: "bg-emerald-100 text-emerald-800" },
    ],
    category: "rails"
  },
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(project => project.category === filter));
    }
  }, [filter]);

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
              A diverse portfolio of projects showcasing my expertise in WordPress, React, Ruby on Rails, 
              and DevOps implementations across various industries and use cases.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={cn(
                  "rounded-full px-6",
                  filter === "all" ? "" : "hover:bg-primary/10"
                )}
              >
                All Projects
              </Button>
              <Button
                variant={filter === "wordpress" ? "default" : "outline"}
                onClick={() => setFilter("wordpress")}
                className={cn(
                  "rounded-full px-6",
                  filter === "wordpress" ? "" : "hover:bg-primary/10"
                )}
              >
                WordPress
              </Button>
              <Button
                variant={filter === "react" ? "default" : "outline"}
                onClick={() => setFilter("react")}
                className={cn(
                  "rounded-full px-6",
                  filter === "react" ? "" : "hover:bg-primary/10"
                )}
              >
                React
              </Button>
              <Button
                variant={filter === "rails" ? "default" : "outline"}
                onClick={() => setFilter("rails")}
                className={cn(
                  "rounded-full px-6",
                  filter === "rails" ? "" : "hover:bg-primary/10"
                )}
              >
                Ruby on Rails
              </Button>
              <Button
                variant={filter === "devops" ? "default" : "outline"}
                onClick={() => setFilter("devops")}
                className={cn(
                  "rounded-full px-6",
                  filter === "devops" ? "" : "hover:bg-primary/10"
                )}
              >
                DevOps
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </motion.section>
    </Layout>
  );
};

export default Projects;
