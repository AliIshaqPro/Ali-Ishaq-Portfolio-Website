
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            Developer<span className="text-primary">.Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out md:hidden pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a
            href="#"
            className="text-xl nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-xl nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-xl nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-xl nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
