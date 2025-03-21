
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ContactPage = () => {
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

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24 bg-gradient-to-b from-background to-secondary/20 min-h-screen"
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">Get In Touch</h1>
            <p className="section-subtitle max-w-3xl">
              Have a project in mind or want to discuss potential collaborations?
              I'd love to hear from you and explore how we can work together to create exceptional digital experiences.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Let's Connect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <a 
                  href="https://github.com/AliIshaqPro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 bg-primary/5 rounded-xl flex flex-col items-center text-center transition-all hover:bg-primary/10 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                  <p className="text-sm text-muted-foreground mb-3">View my code repositories and open-source contributions</p>
                  <span className="text-primary flex items-center gap-1 text-sm">
                    github.com/AliIshaqPro
                    <ExternalLink size={14} />
                  </span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/ali-ishaq-sandhu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 bg-primary/5 rounded-xl flex flex-col items-center text-center transition-all hover:bg-primary/10 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground mb-3">Connect professionally and view my career history</p>
                  <span className="text-primary flex items-center gap-1 text-sm">
                    linkedin.com/in/ali-ishaq-sandhu
                    <ExternalLink size={14} />
                  </span>
                </a>
                
                <a 
                  href="https://www.upwork.com/freelancers/~01ea89981961c95a70?mp_source=share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 bg-primary/5 rounded-xl flex flex-col items-center text-center transition-all hover:bg-primary/10 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold mb-2">Upwork</h3>
                  <p className="text-sm text-muted-foreground mb-3">Hire me for freelance projects and view my client reviews</p>
                  <span className="text-primary flex items-center gap-1 text-sm">
                    View Upwork Profile
                    <ExternalLink size={14} />
                  </span>
                </a>
                
                <a 
                  href="https://www.fiverr.com/s/0b80y6k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 bg-primary/5 rounded-xl flex flex-col items-center text-center transition-all hover:bg-primary/10 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold mb-2">Fiverr</h3>
                  <p className="text-sm text-muted-foreground mb-3">Explore my service packages and past client work</p>
                  <span className="text-primary flex items-center gap-1 text-sm">
                    View Fiverr Profile
                    <ExternalLink size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <Contact />
        </div>
      </motion.section>
    </Layout>
  );
};

export default ContactPage;
