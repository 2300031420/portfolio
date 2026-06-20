"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  Download,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      
      {/* Background Glows */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for Internships
          </motion.div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Saneesh Reddy
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-slate-300">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Backend Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Building scalable backend systems, offline-first applications,
            intelligent platforms, and real-world products that solve
            meaningful problems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-gray-600/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/2300031420"
              className="rounded-full border border-gray-600/10 p-3 transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/saneesh-reddy"
              className="rounded-full border border-gray-600/10 p-3 transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-600/10 p-3 transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-slate-600 dark:text-slate-400">Open Source <br></br>Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">300+</h3>
              <p className="text-slate-600 dark:text-slate-400">LeetCode</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">8.9+</h3>
              <p className="text-slate-600 dark:text-slate-400">CGPA</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative flex justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <Image
            src="/saneesh_photo.jpg"
            alt="Saneesh"
            width={350}
            height={350}
            className="relative rounded-full border-4 border-cyan-500/30 shadow-[0_0_80px_rgba(34,211,238,0.3)]"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-slate-600 dark:text-slate-400" />
      </motion.div>
    </section>
  );
}