import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Scene3DBackground from "@/components/Scene3DBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3DBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-none text-foreground">
            DOLLAR
            <br />
            <span className="text-primary">CREATIVE LAB</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 font-mono text-xs md:text-sm text-muted-foreground max-w-xl mx-auto tracking-[0.3em] uppercase"
        >
          Post-Production · Video-Editing · Color-Grading
        </motion.p>

        <a href="#projects" onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("projects");
          if (element) {
            const navbarHeight = 80;
            const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
            window.history.pushState(null, "", "/#projects");
          }
        }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="inline-block mt-14 px-10 py-4 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500"
          >
            View Our Work
          </motion.span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
