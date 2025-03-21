
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SKILLS: Skill[] = [
  // WordPress Skills
  { name: "WordPress Core", level: 95, category: "WordPress" },
  { name: "Theme Development", level: 92, category: "WordPress" },
  { name: "Plugin Development", level: 88, category: "WordPress" },
  { name: "WooCommerce", level: 90, category: "WordPress" },
  { name: "Advanced Custom Fields", level: 95, category: "WordPress" },
  { name: "Gutenberg Blocks", level: 90, category: "WordPress" },
  { name: "WordPress REST API", level: 85, category: "WordPress" },
  { name: "WordPress Security", level: 88, category: "WordPress" },
  { name: "PHP", level: 92, category: "Backend" },
  
  // Frontend Skills
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "SCSS/SASS", level: 88, category: "Frontend" },
  { name: "Responsive Design", level: 95, category: "Frontend" },
  
  // Backend Skills
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "MySQL", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  
  // DevOps Skills
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "Git", level: 85, category: "DevOps" },
  { name: "CI/CD", level: 70, category: "DevOps" },
  { name: "AWS", level: 65, category: "DevOps" },
  { name: "Server Management", level: 75, category: "DevOps" },
  { name: "Performance Optimization", level: 85, category: "DevOps" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];

  const filteredSkills = activeCategory === "All"
    ? SKILLS
    : SKILLS.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-10 overflow-x-auto pb-4">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all mb-2",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={cn(
                "glass-card p-5 rounded-lg transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: isVisible ? `${skill.level}%` : "0%" 
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.03
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
