import { motion } from "framer-motion";

const aspects = [
  { title: "OUR MISSION", desc: "To push the boundaries of visual storytelling through innovative design, flawless execution, and relentless creativity.", number: "01" },
  { title: "OUR VISION", desc: "To be the premier partner for brands and creators seeking to leave an indelible mark on their audience.", number: "02" },
  { title: "OUR APPROACH", desc: "We combine technical expertise with strategic insight, ensuring every frame, pixel, and sound serves a profound purpose.", number: "03" },
  { title: "OUR EXPERTISE", desc: "From high-end VFX and color grading to complex motion design and post-production workflows, we handle it all.", number: "04" },
];

const WhoWeAreSection = () => {
  return (
    <section className="py-32 noise-bg relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl text-foreground mb-4 uppercase"
        >
          Who We Are
        </motion.h2>
        <div className="w-20 h-[1px] bg-foreground/20 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border">
          {aspects.map((aspect, i) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background p-10 lg:p-16 h-full flex flex-col"
            >
              <div className="font-mono text-[10px] text-muted-foreground mb-8">
                [{aspect.number}]
              </div>
              <h3 className="font-display text-3xl text-foreground mb-4">{aspect.title}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mt-auto">
                {aspect.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
