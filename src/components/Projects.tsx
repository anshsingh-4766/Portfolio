import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const GITHUB_PROFILE = "https://github.com/anshsingh-4766";

const projects = [
  {
    title: 'Command-palette',
    description:
      'A clean and responsive command palette interface designed to improve quick navigation and search experience.',
    image: '⌘',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'HTML'],
    github: '#',
    live: '#',
  },
  {
    title: 'Calculator',
    description:
      'A basic calculator web app that performs standard arithmetic operations with a clean and responsive UI. Built to practice JavaScript logic and frontend fundamentals.',
    image: '🧮',
    tags: ['HTML', 'JavaScript', 'CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Vahan Info',
    description:
      'A basic website to fetch vehicle information such as owner name, registration year, and other vehicle details.',
    image: '🚗',
    tags: ['HTML', 'JavaScript', 'CSS'],
    github: '#',
    live: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            My <span className="text-purple-400">Projects</span>
          </h2>

          {/* GitHub Profile Link */}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-5"
          >
            <Github size={20} />
            github.com/anshsingh-4766
          </a>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6" />

          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of the projects I’ve built while learning and improving my frontend skills.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <motion.div whileHover={{ scale: 1.03 }} className="relative group">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                  <span className="text-8xl transition-transform group-hover:scale-110">
                    {project.image}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20"
                  >
                    <Github className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20"
                  >
                    <ExternalLink className="text-white" />
                  </a>
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <div className="bg-gray-900/80 rounded-xl p-6 border border-white/10 mb-4">
                  <p className="text-gray-400">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
