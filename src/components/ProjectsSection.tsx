import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "2ALBY BYKLMNI",
    title: "2ALBY BYKLMNI",
    category: "Post production · Video Editing",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/1093920439?h=92cc7faf7e" width="640" height="360" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2025",
    client: "Phantom Studios",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
  {
    id: "ALBS YA NAKR KHEREY - Karim Cr7",
    title: "ALBS YA NAKR KHEREY",
    category: "Post production · Video Editing",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/1093915525?h=9c05add1ce" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2025",
    client: "Karim Kristiano \"CR7\"",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
  {
    id: "red-shift",
    title: "Basha ElBalad",
    category: "Post production · Video Editing",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/1108149182?h=3aa6666e7d" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2025",
    client: "Felo & 3enba",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
  {
    id: "neon-cult",
    title: "VINESIA resort AD",
    category: "Post production · Video Editing",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/872086981?h=ba20bd7d1f" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2024",
    client: "VINESIA resort",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
  {
    id: "neon-cult",
    title: "TRAILER GAMED",
    category: "Post production · Video Editing",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/922380699?h=f82840676f" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2024",
    client: "TRAILER GAMED",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience."
},
  {
    id: "neon-cult",
    title: "GARA7 2OLOB",
    category: "Post production · Director",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/916734576?h=5ae4f1b5b2" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2025",
    client: "FAHD",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
  {
    id: "neon-cult",
    title: "7ELWA",
    category: "Post production · Video Editing · Coloring · Director",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/948316215?h=0d25e73469" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2025",
    client: "ABDO ELSO8AYER",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
  {
    id: "neon-cult",
    title: "3AMEL HAKAWI",
    category: "Post production · Video Editing",
    image: <iframe title="vimeo-player" src="https://player.vimeo.com/video/1055451294?h=620448a709" width="640" height="360" frameBorder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>,
    year: "2025",
    client: "Karim Kristiano \"CR7\"",
    description: "A creative visual project that combines design, precision, and storytelling to deliver a smooth, impactful, and engaging experience.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 noise-bg relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
        >
          PROJECTS
        </motion.h2>
        <div className="w-20 h-[1px] bg-foreground/20 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden cursor-pointer aspect-video"
              >
                {typeof project.image === 'string' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-80"
                  />
                ) : (
                  <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-80">
                    {project.image}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">
                    {project.category} — {project.year}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">View →</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
