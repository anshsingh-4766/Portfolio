import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/anshsingh-4766", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ansh-singh-6a2940334/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/anshsingh4766", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="floating-orb animate-floaty left-[-8rem] top-28 h-56 w-56 bg-sky-200/80" />
      <div className="floating-orb animate-floaty right-[-7rem] top-20 h-60 w-60 bg-teal-200/70 [animation-delay:1.2s]" />

      <div className="section-wrap relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-600"
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="headline mx-auto max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-6xl"
        >
          Clean Interfaces, Thoughtful Interactions, and Reliable Frontend Code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="muted mx-auto mt-6 max-w-2xl text-base sm:text-lg"
        >
          I am Ansh Singh. I design and build responsive web experiences that look polished,
          feel smooth, and stay easy to use across devices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="/Ansh_Singh_Resume.pdf"
            download="Ansh_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-9 flex items-center justify-center gap-3"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="soft-ring rounded-full bg-white p-3 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-14 flex justify-center"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-slate-500"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={30} />
        </motion.a>
      </motion.div>
    </section>
  );
}
