import { motion } from "framer-motion";
import { Mail, Instagram, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 noise-bg relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl text-foreground mb-4"
        >
          CONTACT
        </motion.h2>
        <div className="w-20 h-[1px] bg-foreground/20 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="font-body text-muted-foreground leading-relaxed max-w-md">
              Ready to bring your vision to life? We'd love to hear about your project.
              Let's create something extraordinary together.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@dollarpostproduction.com" className="flex items-center gap-4 text-foreground/60 hover:text-foreground transition-colors group">
                <Mail className="w-4 h-4" strokeWidth={1} />
                <span className="font-mono text-sm">hello@dollarpostproduction.com</span>
              </a>
              <a href="https://www.instagram.com/dollar.creative.lab/" className="flex items-center gap-4 text-foreground/60 hover:text-foreground transition-colors group">
                <Instagram className="w-4 h-4" strokeWidth={1} />
                <span className="font-mono text-sm">@dollar.creative.lab</span>
              </a>
              <div className="flex items-center gap-4 text-foreground/40">
                <MapPin className="w-4 h-4" strokeWidth={1} />
                <span className="font-mono text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-transparent border-b border-border px-0 py-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-transparent border-b border-border px-0 py-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none transition-colors"
            />
            <textarea
              placeholder="TELL US ABOUT YOUR PROJECT"
              rows={4}
              className="w-full bg-transparent border-b border-border px-0 py-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="mt-6 px-10 py-4 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
