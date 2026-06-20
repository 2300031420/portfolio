"use client";

import {
  Trophy,
  Code2,
  FolderGit2,
  GraduationCap,
  Award,
} from "lucide-react";

const achievements = [
  {
    icon: Code2,
    value: "300+",
    title: "DSA Problems",
    description: "Solved across LeetCode, CodeChef & Codeforces",
  },
  {
    icon: FolderGit2,
    value: "40+",
    title: "Repositories",
    description: "Public projects on GitHub",
  },
  {
    icon: Trophy,
    value: "1000+",
    title: "Users Served",
    description: "Through production-grade applications",
  },
  {
    icon: Award,
    value: "2+",
    title: "Certifications",
    description: "Azure & MongoDB Certified",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-slate-950/80 py-24 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-sm shadow-cyan-500/20" />
            Achievement Spotlight
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Modern milestones that speak for themselves.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Clean, measurable wins from my development journey — built with modern apps, strong systems, and consistent growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-900/95"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30" />

                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/15 to-cyan-400/15 text-cyan-300 shadow-lg shadow-cyan-500/10 transition duration-300 group-hover:scale-[1.05]">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">
                    {item.title}
                  </p>
                  <h3 className="mt-4 text-5xl font-semibold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}