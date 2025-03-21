
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SKILLS: Skill[] = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "Git", level: 85, category: "DevOps" },
  { name: "CI/CD", level: 70, category: "DevOps" },
  { name: "AWS", level: 65, category: "DevOps" },
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
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            My technical skills and expertise in various technologies and tools.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "glass-card p-5 rounded-lg transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
