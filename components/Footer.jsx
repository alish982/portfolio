"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-px border-t border-hairline-light dark:border-hairline-dark py-12">
      <div className="mx-auto max-w-content flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-xl font-light">{profile.name}</p>
          <p className="text-sm text-muted-light dark:text-muted-dark">{profile.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted-light dark:text-muted-dark hover:text-brass transition-colors"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted-light dark:text-muted-dark hover:text-brass transition-colors"
          >
            <Linkedin size={19} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-muted-light dark:text-muted-dark hover:text-brass transition-colors"
          >
            <Mail size={19} />
          </a>
        </div>

        <p className="text-xs text-muted-light dark:text-muted-dark">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
