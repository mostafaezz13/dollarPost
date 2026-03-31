import { motion } from "framer-motion";
import { Film, Palette, Layers, Monitor, Clapperboard, Sparkles } from "lucide-react";

const services = [
  { icon: Sparkles, title: "VFX", desc: "High-end visual effects, compositing, and CGI for film and commercials." },
  { icon: Film, title: "VIDEO EDITING", desc: "Narrative and commercial editing with precision storytelling." },
  { icon: Palette, title: "COLOR GRADING", desc: "Cinematic color science to define the mood of every frame." },
  { icon: Layers, title: "MOTION GRAPHICS", desc: "Dynamic animations, title sequences, and broadcast design." },
  { icon: Clapperboard, title: "DIRECTION", desc: "Creative direction from concept to final delivery." },
  { icon: Monitor, title: "GRAPHIC DESIGN", desc: "Brand identity, poster design, and visual communication." },
];

const ServicesSection = () => {
  return (
    <section className="py-8 md:py-16 noise-bg relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
        >
          SERVICES
        </motion.h2>
        <div className="w-20 h-[1px] bg-foreground/20 mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-10 bg-background hover:bg-card transition-colors duration-500"
            >
              <service.icon className="w-6 h-6 text-muted-foreground mb-8 group-hover:text-foreground transition-colors duration-300" strokeWidth={1} />
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
