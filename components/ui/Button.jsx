"use client";

const variants = {
  primary:
    "bg-ink text-paper dark:bg-bone dark:text-obsidian hover:opacity-90",
  outline:
    "border border-ink/30 dark:border-bone/30 text-ink dark:text-bone hover:border-ink dark:hover:border-bone",
  ghost:
    "text-ink dark:text-bone hover:text-brass dark:hover:text-brass-light",
  // Always-light styling, used over the transparent/video navbar regardless of theme
  onDark: "bg-white text-ink hover:bg-white/90",
};

export default function Button({
  children,
  variant = "primary",
  as: Tag = "button",
  className = "",
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-editorial ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
