import { motion } from "framer-motion";
import { Code, Palette, Rocket, Coffee } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "Fresher" },
  { label: "Projects Completed", value: "06" },
  { label: "Technologies", value: "4+" },
  { label: "Coffee Cups", value: "∞" },
];

const features = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using HTML, CSS, and JavaScript.",
  },
  {
    icon: Palette,
    title: "UI Design Interest",
    description:
      "Enjoy designing clean layouts and improving the visual experience of web pages.",
  },
  {
    icon: Rocket,
    title: "Learning Mindset",
    description:
      "Continuously learning new tools, frameworks, and best practices in web development.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description:
      "I enjoy solving logical problems and improving code through practice and experimentation.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion
            for development.
          </p>
        </motion.div>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* IMAGE SECTION (UPDATED) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="My Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              I'm a Frontend Developer and student with a strong foundation in
              HTML, CSS, JavaScript, and Git/GitHub. I enjoy building clean,
              responsive user interfaces and focusing on both functionality and
              design.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently, I'm gaining practical experience through a Web
              Development internship at CodeSoft, where I work on real projects
              and improve my development skills. I'm passionate about problem
              solving, UI designing, and continuously learning new technologies
              to grow as a developer.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My main goal is to showcase my work through a strong portfolio and
              build user-friendly web experiences that reflect both creativity
              and clean code.
            </p>

            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies or
              enjoying a good cup of coffee while planning my next project.
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/30 transition-colors">
                <feature.icon size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
