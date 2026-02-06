import { color, motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 80, color: 'from-green-500 to-green-700' },
  { name: 'CSS', level: 65, color: 'from-blue-500 to-indigo-600' },
  { name: 'JavaScript', level: 55, color: 'from-yellow-400 to-orange-500' },
  { name: 'Python', level: 55, color: 'from-blue-500 to-yellow-500' },
  { name: 'Git', level: 55, color: 'from-green-400 to-red-200' },
  { name: 'Docker', level: 65, color: 'from-blue-500 to-white-300' },
  { name: 'AWS', level: 45, color: 'from-orange-600 to-indigo-400' },
  { name: 'Figma', level: 46, color: 'from-indigo-500 to-green-400' },
  { name: 'GraphQL', level: 45, color: 'from-purple-600 to-white-400' }
];

const technologies = [
  { name: 'HTML', icon: '⚛️' },
  { name: 'CSS', icon: '🟢' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'Python', icon: '🐍' },
  { name: 'Git', icon: '🔧' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Figma', icon: '🎯' },
  { name: 'GraphQL', icon: '◼️' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Proficiency</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Code Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-gray-500 text-sm">developer.js</span>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">developer</span> = {'{'}
              {'\n'}
              {'  '}<span className="text-green-400">name</span>:{' '}
              <span className="text-yellow-400">"Ansh Singh"</span>,{'\n'}
              {'  '}<span className="text-green-400">skills</span>:{' '}
              <span className="text-gray-400">[</span>
              <span className="text-yellow-400">"HTML"</span>,{' '}
              <span className="text-yellow-400">"CSS"</span>,{' '}
              <span className="text-yellow-400">"JavaScript",</span>{' '}
              <span className="text-yellow-400">"AWS",</span>{' '}
              <span className="text-yellow-400">"Git/Github"</span>{''}
              <span className="text-gray-400">]</span>,{'\n'}
              {'  '}<span className="text-green-400">passionate</span>:{' '}
              <span className="text-orange-400">true</span>,{'\n'}
              {'  '}<span className="text-green-400">hireable</span>:{' '}
              <span className="text-purple-400">function</span>() {'{'}
              {'\n'}
              {'    '}<span className="text-purple-400">return</span>{' '}
              <span className="text-blue-400">this</span>.passionate === <span className="text-orange-400">true</span>;
              {'\n'}
              {'  }'}{'\n'}
              {'}'};
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
