"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Database,
  Trophy,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    color: "text-blue-400",
    desc: "B.Tech Computer Science\nKL University\nCGPA 8.98",
  },
  {
    icon: Code2,
    title: "Full Stack",
    color: "text-cyan-400",
    desc: "React\nNext.js\nNode.js",
  },
  {
    icon: Database,
    title: "Backend",
    color: "text-purple-400",
    desc: "MongoDB\nSystem Design\nDistributed Systems",
  },
  {
    icon: Trophy,
    title: "Achievements",
    color: "text-yellow-400",
    desc: "300+ DSA Problems\n40+ Repositories\n1000+ Users Served",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-cyan-400">
          Get To Know Me
        </p>

        <h2 className="text-5xl font-black">
          About Me
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </motion.div>

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-4xl font-bold">
            Building software that solves
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}real problems.
            </span>
          </h3>

          <p className="mb-6 text-lg leading-8">
            I'm <span className="font-bold">Saneesh Reddy</span>,
            a Computer Science student at KL University who enjoys
            transforming ideas into scalable products.
          </p>

          <p className="mb-6 text-lg leading-8">
            My focus lies in backend engineering, system design,
            distributed systems, and building products that continue
            to work even in challenging environments.
          </p>

          <p className="mb-6 text-lg leading-8">
            Recently I've been building food ordering platforms,
            offline-first POS systems, QR-based ordering solutions,
            and full-stack web applications that serve real users.
          </p>

          {/* Highlights */}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
              <h4 className="font-bold text-cyan-400">
                Problem Solver
              </h4>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Strong DSA and algorithmic thinking.
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <h4 className="font-bold text-purple-400">
                Product Builder
              </h4>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Building applications used by real people.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="
group
rounded-3xl
border
border-slate-200
dark:border-white/10
glass
dark:bg-slate-900/60
p-6
backdrop-blur-xl
transition-all
hover:shadow-xl
hover:shadow-cyan-500/10
"
              >
                <Icon
                  className={`mb-5 h-10 w-10 ${card.color}`}
                />

                <h4 className="mb-3 text-xl font-bold">
                  {card.title}
                </h4>

                <p className="whitespace-pre-line text-slate-700 dark:text-slate-400">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}