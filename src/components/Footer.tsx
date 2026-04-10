import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pb-12">
      <div className="section-wrap rounded-[2rem] border border-slate-200 bg-white/85 px-6 py-7">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <p className="text-lg font-semibold text-slate-900">Ansh Singh</p>
            <p className="text-sm text-slate-600">Building clean digital experiences.</p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/anshsingh-4766", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ansh-singh-6a2940334/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/anshsingh4766", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-600 transition-colors hover:border-slate-900 hover:text-slate-900"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="rounded-full bg-slate-900 p-2.5 text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Ansh Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
