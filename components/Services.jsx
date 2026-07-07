"use client";

import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section
      id="services"
      className="section-px py-24 md:py-32 border-t border-hairline-light dark:border-hairline-dark"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Services"
          title="How I can help."
          description="Engagements scoped to fit a single feature or an entire product build."
        />

        <div className="mt-16 divide-y divide-hairline-light dark:divide-hairline-dark border-t border-b border-hairline-light dark:border-hairline-dark">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 py-7 transition-colors">
                <span className="font-mono text-xs text-muted-light dark:text-muted-dark w-14 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light w-full sm:w-72 shrink-0 transition-colors group-hover:text-brass">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted-light dark:text-muted-dark">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
