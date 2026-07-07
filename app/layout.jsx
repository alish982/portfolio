import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://example-portfolio.dev"),
  title: {
    default: "Alish Acharya — Frontend Developer",
    template: "%s — Alish Acharya",
  },
  description:
    "Alish Acharya is a frontend developer crafting fast, accessible, and elegant web interfaces. Available for freelance and full-time engagements.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "UI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Alish Acharya" }],
  openGraph: {
    title: "Alish Acharya — Frontend Developer",
    description: "Crafting fast, accessible, and elegant web interfaces.",
    url: "https://example-portfolio.dev",
    siteName: "Alish Acharya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alish Acharya — Frontend Developer",
    description: "Crafting fast, accessible, and elegant web interfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body bg-paper text-ink dark:bg-obsidian dark:text-bone antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
