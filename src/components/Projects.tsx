import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const GITHUB_PROFILE = "https://github.com/anshsingh-4766";

const projects = [
  {
    title: "Command Palette UI",
    description:
      "A responsive command palette concept focused on quick keyboard interaction and clean visual hierarchy.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Calculator",
    description:
      "A lightweight calculator with solid JavaScript logic and a minimal layout that works well on mobile and desktop.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Vahan Info",
    description:
      "A utility website to fetch vehicle details with a clear flow for search input, results display, and usability.",
    tags: ["JavaScript", "API", "UI"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Selected Projects</h2>
          <p className="muted mx-auto mt-4 max-w-2xl">
            Practical builds where I focused on clean UI, responsive behavior, and reliable frontend logic.
          </p>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            <Github size={16} />
            github.com/anshsingh-4766
          </a>
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-surface rounded-[2rem] p-6 sm:p-7"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
