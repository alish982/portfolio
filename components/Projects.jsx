"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, projectCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCarousel from "./ui/Swiper";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="section-px py-24 md:py-32 border-t border-hairline-light dark:border-hairline-dark"
    >
      <div className="mx-auto max-w-content">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built to be used, not just demoed."
          />

          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-300 border ${
                  filter === cat
                    ? "border-brass bg-brass text-white"
                    : "border-hairline-light dark:border-hairline-dark text-muted-light dark:text-muted-dark hover:border-brass hover:text-brass"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <motion.article
                layout
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline-light dark:border-hairline-dark transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                  />

                  <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition"
                    >
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow mb-2">{project.category}</p>
                  <h3 className="font-display text-xl font-normal">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-[11px] tracking-wide text-muted-light dark:text-muted-dark rounded border border-hairline-light dark:border-hairline-dark px-2 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
