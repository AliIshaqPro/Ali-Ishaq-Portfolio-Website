
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="blur-dot bg-blue-300/30 w-[300px] h-[300px] top-1/4 -left-20 animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="blur-dot bg-indigo-400/20 w-[250px] h-[250px] bottom-1/4 -right-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="blur-dot bg-purple-300/20 w-[200px] h-[200px] top-3/4 left-1/3 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="blur-dot bg-cyan-300/20 w-[350px] h-[350px] top-1/3 right-1/3 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
            variants={fadeIn}
            initial="hidden" 
            animate="visible"
            custom={1}
          >
            <span className="text-sm font-medium">WordPress & Full-Stack Developer</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight"
            variants={fadeIn}
            initial="hidden" 
            animate="visible"
            custom={2}
          >
            Crafting Digital <span className="text-gradient-primary">Experiences</span> <br /> With Code & Creativity
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
            variants={fadeIn}
            initial="hidden" 
            animate="visible"
            custom={3}
          >
            Senior WordPress developer with expertise in custom theme development,
            plugin creation, and full-stack web solutions that deliver exceptional
            user experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            variants={fadeIn}
            initial="hidden" 
            animate="visible"
            custom={4}
          >
            <Link
              to="/projects"
              className={cn(
                "px-8 py-3 rounded-md bg-primary text-primary-foreground",
                "hover:opacity-90 transition-all duration-200 ease-in-out"
              )}
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className={cn(
                "px-8 py-3 rounded-md bg-secondary text-secondary-foreground",
                "hover:bg-secondary/80 transition-all duration-200 ease-in-out"
              )}
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="mb-2 text-sm">Scroll to explore</span>
        <ArrowDown className="animate-pulse-subtle" size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
