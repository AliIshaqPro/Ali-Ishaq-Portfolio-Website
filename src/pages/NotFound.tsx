
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <div className="h-1 w-16 bg-primary mx-auto my-6"></div>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        <a
          href="/"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all",
            "bg-primary text-primary-foreground hover:opacity-90"
          )}
        >
          <ArrowLeft size={18} />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
