"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = [];
    const visibility = {};

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibility[id] = entry.intersectionRatio;
          const mostVisible = Object.entries(visibility).sort(
            (a, b) => b[1] - a[1]
          )[0];
          if (mostVisible && mostVisible[1] > 0) {
            setActive(mostVisible[0]);
          }
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
