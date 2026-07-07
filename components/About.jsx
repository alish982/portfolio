"use client";

import { profile, strengths } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-px py-24 md:py-32">
      <div className="mx-auto max-w-content grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Seven years of building interfaces that hold up.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md bg-gradient-to-br from-brass/30 to-ink dark:to-bone/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-light text-white/90">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-lg sm:text-xl leading-relaxed text-ink/90 dark:text-bone/90">
              I started building for the web because I liked seeing an idea
              become something people could touch. Over {profile.yearsExperience}{" "}
              years, that curiosity turned into a career spent mostly on the
              details other engineers skip past — the 40ms of jank, the
              button that doesn&apos;t quite feel right, the layout that breaks
              at 375px.
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-light dark:text-muted-dark">
              I&apos;ve worked inside product teams and independently, on
              everything from analytics dashboards to storefronts to design
              systems used by hundreds of engineers. My focus stays the same
              regardless of the brief: interfaces that are fast, accessible,
              and quietly well made.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-hairline-light dark:border-hairline-dark pt-8">
            <Reveal>
              <p className="font-display text-4xl font-light text-brass">
                {profile.yearsExperience}+
              </p>
              <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
                Years experience
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-display text-4xl font-light text-brass">25+</p>
              <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
                Projects shipped
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-4xl font-light text-brass">10</p>
              <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
                Teams collaborated with
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-display text-4xl font-light text-brass">92</p>
              <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
                Avg. Lighthouse score
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <h3 className="font-display text-lg font-normal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
