"use client";

import { marqueeWords } from "@/lib/data";

export default function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];

  return (
    <div className="marquee-row overflow-hidden border-y border-hairline-light dark:border-hairline-dark bg-paper dark:bg-obsidian py-5">
      <div className="marquee-track">
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 items-center">
            {words.map((word, i) => (
              <span
                key={`${set}-${i}`}
                className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-xl sm:text-2xl font-light italic text-muted-light dark:text-muted-dark"
              >
                {word}
                <span className="h-1.5 w-1.5 rounded-full bg-brass not-italic" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
