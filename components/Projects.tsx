import { projects } from "@/src/data/projects";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-gray-600/20 glass dark:bg-slate-900 p-6 transition hover:-translate-y-2"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mb-4 ">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black dark:bg-slate-800 dark:text-white transition hover:scale-105"
              >
                <FaGithub size={18} />
                Frontend
              </a>

              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-gray-600/20 px-5 py-3 font-semibold transition hover:bg-white/10 dark:hover:bg-white/10"
              >
                <FaGithub size={18} />
                Backend
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600/20 px-4 py-2"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}