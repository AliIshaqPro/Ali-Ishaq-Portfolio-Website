
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
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

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if the link is active based on the current route
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
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
          <Link to="/" className="text-xl font-bold tracking-tight group">
            Developer<span className="text-gradient-primary">.Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn("nav-link", isActive("/") && "text-foreground font-medium")}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn("nav-link", isActive("/about") && "text-foreground font-medium")}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={cn("nav-link", isActive("/projects") && "text-foreground font-medium")}
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              className={cn("nav-link", isActive("/skills") && "text-foreground font-medium")}
            >
              Skills
            </Link>
            <Link 
              to="/contact" 
              className={cn("nav-link", isActive("/contact") && "text-foreground font-medium")}
            >
              Contact
            </Link>
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
          <Link
            to="/"
            className={cn("text-xl nav-link", isActive("/") && "text-foreground font-medium")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn("text-xl nav-link", isActive("/about") && "text-foreground font-medium")}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={cn("text-xl nav-link", isActive("/projects") && "text-foreground font-medium")}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={cn("text-xl nav-link", isActive("/skills") && "text-foreground font-medium")}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={cn("text-xl nav-link", isActive("/contact") && "text-foreground font-medium")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
