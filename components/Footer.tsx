"use client";

import {
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gray-600/20">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">

        {/* Top */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent">
              Saneesh Reddy
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Software Engineer • Backend Developer • Full Stack Developer
            </p>
          </div>

          {/* Socials */}

          <div className="flex gap-4">
            <a
              href="https://github.com/2300031420"
              target="_blank"
              className="rounded-full border border-gray-600/20 p-3 transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/saneesh-reddy"
              target="_blank"
              className="rounded-full border border-gray-600/20 p-3 transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sanukyj@gmail.com"
              className="rounded-full border border-gray-600/20 p-3 transition hover:bg-white/10 dark:hover:bg-white/10"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-gray-600/20" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p className="flex items-center gap-2">
            Built with
            <Heart
              size={14}
              className="text-red-500"
            />
            using Next.js & Tailwind CSS
          </p>

          <p>
            © {new Date().getFullYear()} Saneesh Reddy.
            All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex items-center gap-2
              rounded-full
              border border-gray-600/20
              px-4 py-2
              transition
              hover:bg-white/10
            "
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}