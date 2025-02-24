
import { motion } from "framer-motion";
import { Home, BookOpen, PenSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {children}
    </Link>
  );
};

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
    >
      <div className="container flex h-16 items-center">
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink to="/articles">
            <BookOpen className="h-4 w-4" />
            Articles
          </NavLink>
          <NavLink to="/create">
            <PenSquare className="h-4 w-4" />
            Create
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
}
