
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ShieldCheck, LayoutGrid, Code2, Database } from "lucide-react";
import { cn } from "@/lib/utils";

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
      title: "Custom Theme Development",
      description: "Crafting unique WordPress themes tailored to your specific needs and brand identity."
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-primary" />,
      title: "Plugin Development",
      description: "Building custom WordPress plugins to extend functionality and integrate with third-party services."
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Performance Optimization",
      description: "Maximizing website speed and efficiency through database optimization and caching strategies."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Security Implementation",
      description: "Implementing robust security measures to protect your WordPress site from vulnerabilities."
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
              <p className="text-lg mb-6">
                I'm a Senior WordPress Developer with over 8 years of experience in creating custom themes,
                plugins, and full-featured websites for clients across various industries.
              </p>
              <p className="text-lg mb-6">
                My development approach focuses on clean, maintainable code and performance optimization.
                I specialize in building complex WordPress solutions that integrate seamlessly with third-party
                services and APIs.
              </p>
              <p className="text-lg">
                With expertise in both front-end and back-end development, I deliver WordPress solutions
                that not only look great but also perform exceptionally well, ensuring the best user experience.
              </p>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-24">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              WordPress Services
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
