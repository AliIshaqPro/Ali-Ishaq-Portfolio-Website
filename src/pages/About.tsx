
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ShieldCheck, LayoutGrid, Code2, Database, Server, Globe, Blocks, CodepenIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const About = () => {
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

  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-primary" />,
      title: "WordPress Development",
      description: "Creating custom themes, plugins, and high-performance WordPress websites with advanced functionality."
    },
    {
      icon: <Blocks className="w-10 h-10 text-primary" />,
      title: "React Development",
      description: "Building modern, responsive single-page applications with React, Redux, and related technologies."
    },
    {
      icon: <CodepenIcon className="w-10 h-10 text-primary" />,
      title: "Ruby on Rails Development",
      description: "Developing scalable web applications using Ruby on Rails with MVC architecture and RESTful APIs."
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "DevOps Engineering",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure management for seamless deployments."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-background to-secondary/20 min-h-screen pt-20 pb-16">
        <div className="container px-4 mx-auto mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-primary">About Me</h1>
            <div className="glass-card p-8 md:p-10 rounded-2xl mb-12">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden border-2 border-primary/20 shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                      alt="Ali Ishaq" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-3">Ali Ishaq</h2>
                  <p className="text-primary font-medium mb-4">Full Stack Developer</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <span>Islamabad, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CodepenIcon className="w-5 h-5 text-primary" />
                      <span>Bachelor of Computer Science - Virtual University of Pakistan</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">WordPress</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">React</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Ruby on Rails</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">DevOps</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">PHP</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">JavaScript</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Docker</Badge>
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">AWS</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/AliIshaqPro" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2">
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ali-ishaq-sandhu" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2">
                      LinkedIn
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01ea89981961c95a70?mp_source=share" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2">
                      Upwork
                    </a>
                    <a href="https://www.fiverr.com/s/0b80y6k" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2">
                      Fiverr
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-primary/10 pt-8">
                <p className="text-lg mb-6">
                  I'm a versatile Full Stack Developer with extensive experience in WordPress, React, Ruby on Rails, and DevOps. 
                  My approach combines technical expertise with creative problem-solving to deliver robust, scalable, and user-friendly 
                  digital solutions for clients across various industries.
                </p>
                <p className="text-lg mb-6">
                  In WordPress development, I excel at creating custom themes, plugins, and complex websites that go beyond traditional 
                  templates. My React projects feature modern UI/UX with state-of-the-art performance optimizations. Using Ruby on Rails, 
                  I build maintainable, test-driven applications with efficient database designs.
                </p>
                <p className="text-lg">
                  Additionally, my DevOps knowledge enables me to implement CI/CD pipelines, containerization with Docker, and cloud 
                  infrastructure management, ensuring smooth deployment and operation of web applications.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-24">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Services & Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-lg",
                    "border border-white/10 hover:border-primary/20"
                  )}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-5">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
