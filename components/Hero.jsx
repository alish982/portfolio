"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex h-[100svh] w-full items-end overflow-hidden">
      {/* Background video. Replace /videos/hero-bg.mp4 with your own optimized clip (≤6MB, 1080p, muted). */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Fallback / overlay gradient for readability, works even without a video file present */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-obsidian/30" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full section-px pb-20 sm:pb-24"
      >
        <motion.p variants={item} className="eyebrow mb-6 text-white/70">
          {profile.role} — {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-white text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.98] max-w-4xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button variant="primary" onClick={() => scrollTo("contact")}>
            Hire Me
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:border-white"
            onClick={() => scrollTo("projects")}
          >
            View Projects
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 right-6 md:right-12 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white animate-bounce"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
