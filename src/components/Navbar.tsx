import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="section-wrap rounded-full glass-surface">
        <div className="flex h-16 items-center justify-between px-4 sm:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900">
            Ansh Singh
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 rounded-full bg-slate-900 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          <button
            className="rounded-full border border-slate-300/80 bg-white/80 p-2 text-slate-800 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="section-wrap mt-3 rounded-3xl bg-white/95 p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-slate-700 transition-colors hover:bg-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
