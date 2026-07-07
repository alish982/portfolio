"use client";

import { experience } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-px py-24 md:py-32 border-t border-hairline-light dark:border-hairline-dark"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline-light dark:bg-hairline-dark sm:left-[9px]" />

          <ol className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <li className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brass bg-paper dark:bg-obsidian sm:h-[18px] sm:w-[18px]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-normal">
                      {job.role}{" "}
                      <span className="text-brass">— {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs tracking-wide text-muted-light dark:text-muted-dark shrink-0">
                      {job.duration}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-light dark:text-muted-dark"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
