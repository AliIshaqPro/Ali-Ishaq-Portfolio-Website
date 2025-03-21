
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

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
              I'd love to hear from you and explore how we can work together.
            </p>
          </div>
          
          <Contact />
        </div>
      </motion.section>
    </Layout>
  );
};

export default ContactPage;
