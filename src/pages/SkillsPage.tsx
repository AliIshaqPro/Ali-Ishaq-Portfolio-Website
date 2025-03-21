
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SkillsPage = () => {
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

  const experienceItems = [
    {
      years: "2018 - Present",
      position: "Senior WordPress Developer",
      company: "Freelance / Agency Work",
      description: "Developed complex WordPress websites for enterprise clients, created custom plugins and themes, implemented e-commerce solutions, and delivered high-performance optimization."
    },
    {
      years: "2015 - 2018",
      position: "WordPress Developer",
      company: "Web Solutions Inc.",
      description: "Collaborated on client projects, building responsive themes, implementing custom post types, and integrating third-party APIs with WordPress sites."
    },
    {
      years: "2013 - 2015",
      position: "Junior Web Developer",
      company: "Digital Craft Studio",
      description: "Started professional journey creating websites using WordPress and PHP, focusing on frontend development and theme customization."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">Skills & Experience</h1>
            <p className="section-subtitle max-w-3xl">
              With over 8 years of experience in WordPress and web development, I've honed my skills
              across a variety of technologies and methodologies.
            </p>
          </motion.div>
          
          <Skills />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
            
            <div className="max-w-4xl mx-auto">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "pl-8 relative mb-12",
                    "before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-primary/30",
                    "after:absolute after:left-[-4px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-primary"
                  )}
                >
                  <div className="glass-card p-6 rounded-xl">
                    <span className="text-sm font-semibold inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
                      {item.years}
                    </span>
                    <h3 className="text-xl font-semibold mb-1">{item.position}</h3>
                    <p className="text-primary/80 mb-3">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillsPage;
