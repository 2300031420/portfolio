"use client";

import { motion } from "framer-motion";

const skills = {
  Languages: ["Java", "JavaScript", "C", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "MySQL", "IndexedDB"],
  Cloud: ["AWS", "Azure", "GitHub Actions"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-cyan-400">
          My Technical Arsenal
        </p>

        <h2 className="text-5xl font-black">
          Skills & Technologies
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </motion.div>

      {/* Skills Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(skills).map(
          ([category, items], index) => (
            <motion.div
              key={category}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-gray-400/30 glass dark:bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
            >
              <h3 className="mb-6 text-2xl font-bold ">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-cyan-300
                      transition-all
                      hover:border-cyan-400
                      hover:shadow-lg
                      hover:shadow-cyan-500/20
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Bottom Tech Cloud */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-wrap justify-center gap-4"
      >
        {[
          "Java",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "MySQL",
          "AWS",
          "problem solving",
          "Docker",
          "Git",
          "Tailwind",
          "System Design",
        ].map((skill, index) => (
          <motion.div
            key={skill}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
            }}
            className="
              rounded-full
              bg-gradient-to-r
              from-cyan-500/20
              to-purple-500/20
              px-5
              py-2
              text-sm
              font-semibold
              backdrop-blur-xl
            "
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}