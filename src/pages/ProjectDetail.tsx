import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/components/ProjectsSection";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-mono text-muted-foreground">Project not found.</p>
        <Link to="/projects" className="font-mono text-xs text-foreground/40 hover:text-foreground mt-4 inline-block">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] text-muted-foreground hover:text-foreground uppercase tracking-[0.3em] transition-colors mb-12"
          >
            <ArrowLeft size={14} strokeWidth={1} />
            Back to projects
          </Link>

          {/* Hero Image */}
          <div className="aspect-video w-full overflow-hidden mb-16">
            {typeof project.image === 'string' ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70"
                width={800}
                height={600}
              />
            ) : (
              <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full opacity-70">
                {project.image}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-5xl md:text-7xl text-foreground mb-6"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-body text-foreground/60 leading-relaxed text-base max-w-2xl"
              >
                {project.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">Category</p>
                <p className="font-body text-sm text-foreground">{project.category}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">Year</p>
                <p className="font-body text-sm text-foreground">{project.year}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">Client</p>
                <p className="font-body text-sm text-foreground">{project.client}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
