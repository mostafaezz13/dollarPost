import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Who We Are", id: "who-we-are" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;
      
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollThreshold = 120; // 80px navbar + 40px buffer

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          if (section.getBoundingClientRect().top <= scrollThreshold) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const navbarHeight = 80;
          const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
      window.history.pushState(null, "", `/#${id}`);
      setActiveSection(id);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        scrollTo(id);
      }, 100);
    }
  }, [location.pathname, scrollTo]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              scrollTo("home");
            }
          }}
          className="font-display text-xl tracking-[0.2em] text-foreground"
        >
          DOLLAR
        </Link>

        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-colors ${
                      activeSection === item.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
