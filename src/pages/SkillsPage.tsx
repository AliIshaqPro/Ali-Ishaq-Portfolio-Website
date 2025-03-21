
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
      years: "2019 - Present",
      position: "Senior Full Stack Developer",
      company: "Freelance",
      description: "Working with international clients to deliver comprehensive web solutions including WordPress custom theme/plugin development, React SPAs, Ruby on Rails applications, and DevOps implementation."
    },
    {
      years: "2017 - 2019",
      position: "Web Developer",
      company: "Tech Solutions Inc.",
      description: "Developed responsive websites using WordPress and React, implemented custom features, and integrated third-party APIs for various client projects."
    },
    {
      years: "2015 - 2017",
      position: "Junior Developer",
      company: "Digital Innovations",
      description: "Started professional journey creating websites using WordPress, PHP, and basic frontend technologies while learning best practices in web development."
    }
  ];
  
  const detailedSkills = [
    {
      category: "WordPress Development",
      skills: [
        { name: "Custom Theme Development", level: 95 },
        { name: "Plugin Development", level: 90 },
        { name: "WooCommerce", level: 88 },
        { name: "Advanced Custom Fields", level: 92 },
        { name: "WordPress REST API", level: 85 },
        { name: "WordPress Security", level: 90 },
        { name: "WordPress Performance", level: 93 },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Redux", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "SCSS/SASS", level: 85 },
        { name: "JavaScript (ES6+)", level: 92 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Ruby on Rails", level: 88 },
        { name: "PHP", level: 90 },
        { name: "Node.js", level: 82 },
        { name: "RESTful APIs", level: 86 },
        { name: "GraphQL", level: 75 },
        { name: "SQL (MySQL/PostgreSQL)", level: 85 },
        { name: "MongoDB", level: 78 },
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Docker", level: 85 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Linux Server Management", level: 82 },
        { name: "Nginx/Apache", level: 78 },
        { name: "Performance Optimization", level: 88 },
      ]
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
              A showcase of my technical expertise across multiple domains including WordPress, React, 
              Ruby on Rails, and DevOps, refined through years of professional experience.
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

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Detailed Skillset</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
              {detailedSkills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
                >
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-6 text-center text-primary">{skillGroup.category}</h3>
                    <div className="space-y-6">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-primary">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="my-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
            
            <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="pl-6 border-l-2 border-primary/30">
                  <h4 className="text-lg font-semibold">Bachelor of Computer Science</h4>
                  <p className="text-primary/80 mb-2">Virtual University of Pakistan</p>
                  <p className="text-muted-foreground mb-1">Specialized in software engineering and web development</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold">Advanced WordPress Development</h4>
                    <p className="text-sm text-muted-foreground">WP Learning Platform, 2021</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold">Modern React with Redux</h4>
                    <p className="text-sm text-muted-foreground">Udemy, 2020</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold">Ruby on Rails Development</h4>
                    <p className="text-sm text-muted-foreground">Coursera, 2019</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
                    <p className="text-sm text-muted-foreground">Amazon Web Services, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillsPage;
