"use client";

import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-px py-24 md:py-32 border-t border-hairline-light dark:border-hairline-dark"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Capabilities"
          title="A stack chosen for speed, not novelty."
          description="Tools I reach for consistently because they hold up under real product constraints."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.08}>
              <h3 className="font-display text-xl font-normal mb-5 flex items-center gap-3">
                {group.category}
                <span className="h-px flex-1 bg-hairline-light dark:bg-hairline-dark" />
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-hairline-light dark:border-hairline-dark px-4 py-1.5 text-sm text-ink/80 dark:text-bone/80 transition-colors duration-300 hover:border-brass hover:text-brass"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
