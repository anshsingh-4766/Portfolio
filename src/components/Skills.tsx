import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 78 },
  { name: "JavaScript", level: 72 },
  { name: "Python", level: 62 },
  { name: "Git/GitHub", level: 70 },
  { name: "Figma", level: 58 },
];

const tools = ["Tailwind CSS", "Responsive UI", "Framer Motion", "Vite", "REST APIs", "UI Prototyping"];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Skills & Tools</h2>
          <p className="muted mx-auto mt-4 max-w-2xl">
            A practical stack focused on front-end delivery, consistent design, and maintainable code.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="glass-surface rounded-[2rem] p-7 sm:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-slate-900">Proficiency</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-slate-900 to-sky-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 sm:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-slate-900">Toolkit</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.32, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="mt-7 rounded-[1.5rem] bg-slate-900 p-5 text-slate-100">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Current Focus</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Improving interface polish, component quality, and real-world project delivery with
                cleaner UX decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
