"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Contact Me
        </p>

        <h2 className="text-5xl font-black">
          Let's Build Something Amazing
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-slate-400">
          Whether you have a project idea, internship opportunity,
          collaboration proposal, or simply want to connect,
          my inbox is always open.
        </p>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </motion.div>

      {/* Main Card */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          border border-gray-600
          glass
          dark:bg-slate-900/60
          p-10
          backdrop-blur-xl
        "
      >
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div>
            <h3 className="mb-8 text-3xl font-bold">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <a
                href="mailto:sanukyj@gmail.com"
                className="flex items-center gap-4"
              >
                <Mail className="text-cyan-400" />
                <span className="text-slate-300">
                  sanukyj@gmail.com
                </span>
              </a>

              <a
                href="tel:+918055221419"
                className="flex items-center gap-4"
              >
                <Phone className="text-cyan-400" />
                <span className="text-slate-300">
                  +91 8055221419
                </span>
              </a>

              <a
                href="https://linkedin.com/in/saneesh-reddy"
                target="_blank"
                className="flex items-center gap-4"
              >
                <FaLinkedin className="text-cyan-400" />
                <span className="text-slate-300">
                  LinkedIn Profile
                </span>
              </a>

              <a
                href="https://github.com/2300031420"
                target="_blank"
                className="flex items-center gap-4"
              >
                <FaGithub className="text-cyan-400" />
                <span className="text-slate-300">
                  GitHub Profile
                </span>
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-3xl font-bold">
              Ready to Collaborate?
            </h3>

            <p className="mb-8 leading-8 text-slate-600 dark:text-slate-400">
              I'm currently seeking software engineering internships,
              backend development opportunities, and exciting
              projects where I can contribute and grow.
            </p>

            <a
              href="mailto:sanukyj@gmail.com"
              className="
                flex w-fit items-center gap-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-6 py-4
                font-semibold
                transition
                hover:scale-105
              "
            >
              <Send size={18} />
              Send Message
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}