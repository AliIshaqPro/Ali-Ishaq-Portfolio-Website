
import { ExternalLink, Github, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface TechItem {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl: string;
  githubUrl: string;
  techStack: TechItem[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  liveUrl,
  githubUrl,
  techStack,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl glass-card transition-all duration-500 ease-in-out",
        "transform group",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20",
        index % 2 === 0 ? "md:ml-0" : "md:mr-0"
      )}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-in-out",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>

        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className={cn(
                "text-xs px-3 py-1 rounded-full",
                tech.color
              )}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:opacity-80 transition-opacity"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:opacity-80 transition-opacity"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
