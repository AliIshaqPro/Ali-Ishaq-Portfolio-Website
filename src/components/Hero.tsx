
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="blur-dot bg-blue-300/30 w-[300px] h-[300px] top-1/4 -left-20 animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="blur-dot bg-purple-300/20 w-[250px] h-[250px] bottom-1/4 -right-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary text-secondary-foreground animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="text-sm font-medium">Full-Stack Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Crafting Digital <br /> Experiences with Code
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            I build beautiful, functional, and user-centered digital experiences
            with clean, efficient, and maintainable code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a
              href="#projects"
              className={cn(
                "px-8 py-3 rounded-md bg-primary text-primary-foreground",
                "hover:opacity-90 transition-all duration-200 ease-in-out"
              )}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={cn(
                "px-8 py-3 rounded-md bg-secondary text-secondary-foreground",
                "hover:bg-secondary/80 transition-all duration-200 ease-in-out"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground transition-colors animate-fade-in opacity-0"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <span className="mb-2 text-sm">Scroll to explore</span>
        <ArrowDown className="animate-pulse-subtle" size={20} />
      </a>
    </section>
  );
};

export default Hero;
