
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Globe, Layout as LayoutIcon, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
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

  const featuredServices = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "WordPress Development",
      description: "Expert in building custom WordPress themes, plugins, and complete website solutions.",
      link: "/skills"
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Web Application Development",
      description: "Creating interactive web applications using modern JavaScript frameworks like React.",
      link: "/projects"
    },
    {
      icon: <LayoutIcon className="w-10 h-10 text-primary" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that engage and convert visitors.",
      link: "/projects"
    },
    {
      icon: <Laptop className="w-10 h-10 text-primary" />,
      title: "E-commerce Solutions",
      description: "Building robust online stores with WooCommerce and custom checkout experiences.",
      link: "/projects"
    }
  ];

  return (
    <Layout>
      <Hero />
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-24 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Services I Offer</h2>
            <p className="section-subtitle">
              Expert development services tailored to your specific needs and business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-lg border border-white/10 hover:border-primary/20"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                  >
                    Learn more 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-16 bg-gradient-to-b from-secondary/20 to-background"
      >
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to start your project?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge web development.
          </p>
          <Link 
            to="/contact" 
            className={cn(
              "px-8 py-4 rounded-md text-lg inline-flex items-center gap-2",
              "bg-primary text-primary-foreground hover:opacity-90 transition-all"
            )}
          >
            Get in touch
            <ArrowRight className="ml-1" />
          </Link>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
