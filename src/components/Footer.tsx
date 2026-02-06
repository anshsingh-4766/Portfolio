import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-gray-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="text-xl font-bold text-white">
              <span className="text-purple-500">&lt;</span>
              Ansh
              <span className="text-purple-500">/&gt;</span>
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Building digital experiences that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/anshsingh-4766' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ansh-singh-6a2940334/' },
              { icon: Twitter, href: 'https://x.com/anshsingh4766' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-all duration-300"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-white/5"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Ansh Singh
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
