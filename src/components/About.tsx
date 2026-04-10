import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const highlights = [
  "Strong base in HTML, CSS, JavaScript, and Git/GitHub",
  "Focused on responsive layouts and accessible UI structure",
  "Currently gaining project experience through internship work",
  "Interested in clean visual systems and design consistency",
];

const stats = [
  { label: "Projects", value: "06+" },
  { label: "Core Skills", value: "4+" },
  { label: "Learning Track", value: "Frontend" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="muted mx-auto mt-4 max-w-2xl">
            I enjoy building practical, modern interfaces where visual clarity and performance
            work together.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="glass-surface rounded-[2rem] p-7 sm:p-9"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white">
              <Sparkles size={14} />
              Profile Snapshot
            </div>

            <p className="muted leading-relaxed">
              I am a frontend developer and student who likes translating ideas into interfaces
              that are simple, elegant, and easy to navigate. I focus on writing structured code,
              improving UI details, and continuously learning better development practices.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-full border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.2rem] soft-ring">
              <img src="/profile.jpg" alt="Ansh Singh" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/55 to-transparent p-6">
                <p className="text-sm font-medium text-white">Frontend Developer</p>
                <p className="text-xs text-slate-100/90">Building real-world experience one project at a time.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.3rem] border border-slate-200 bg-white/90 px-3 py-4 text-center">
                  <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
