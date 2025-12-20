"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Github,
  Mail,
  Moon,
  Sun,
  GitPullRequestArrow,
  ExternalLink,
  Twitter,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PortfolioV2() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  if (!mounted) return null;

  const pullRequests = [
    {
      id: "19",
      url: "https://github.com/subhraneel2005/study-toolkit/pull/19",
      title: "feat: Built the Daily Checklist feature e2e",
    },
    {
      id: "18",
      url: "https://github.com/subhraneel2005/study-toolkit/pull/18",
      title: "feat: Added RSC for DailyLog screen",
    },
    {
      id: "17",
      url: "https://github.com/subhraneel2005/study-toolkit/pull/17",
      title: "feat: Added Dailylog feature e2e",
    },
    {
      id: "14",
      url: "https://github.com/subhraneel2005/study-toolkit/pull/14",
      title:
        "feat: Added chat peristance and dispose chat button in Chat with pdf agent",
    },
    {
      id: "11",
      url: "https://github.com/subhraneel2005/study-toolkit/pull/11",
      title: "feat/Added flashcards generator with disposable zustand store",
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a] text-black dark:text-white lowercase selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-700 ease-in-out">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 max-w-7xl bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 font-bold tracking-tighter"
        >
          <Terminal className="w-4 h-4" />
          <span>subhraneel.</span>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {isDark ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.div>
          </AnimatePresence>
        </Button>
      </nav>

      {/* Main Content */}
      <main className="relative mt-10 z-10 w-[85%] md:w-[60%] lg:w-[45%] py-24">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] mb-8">
            building in the{" "}
            <span className="italic font-light opacity-40 text-3xl md:text-5xl">
              shadows
            </span>
            <br />
            back in a bit.
          </h1>

          <div className="space-y-10 max-w-md">
            <p className="text-lg leading-tight text-zinc-500 dark:text-zinc-400">
              got bored of my old portfolio so building a new one, currently
              under-contruction
            </p>

            <Separator />

            {/* Current Working and Documenting Section */}
            <div id="work" className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <span>current working and documenting</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {pullRequests.map((pr) => (
                  <motion.a
                    key={pr.id}
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-start justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group"
                  >
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <GitPullRequestArrow className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold leading-snug">
                          {pr.title}
                        </span>
                        <span className="text-[13px]  opacity-50">
                          PR #{pr.id} — study-toolkit
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 mt-1 opacity-0 group-hover:opacity-40 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            <Separator />

            {/* Let's Chat Section */}
            <div id="letsConnect" className="space-y-4">
              <div className="pt-4">
                <motion.a
                  href="https://x.com/subhraneettwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800">
                      <Twitter className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        let&apos;s chat on x
                      </p>
                      <p className="text-xs text-zinc-500 italic">
                        @subhraneettwt
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <ContactLink
                  href="https://github.com/subhraneel2005"
                  label="github"
                  icon={<Github className="w-4 h-4" />}
                />
                <ContactLink
                  href="mailto:subhraneeljobs@gmail.com"
                  label="email"
                  icon={<Mail className="w-4 h-4" />}
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function ContactLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 3 }}
      className="flex items-center gap-2 group border-b border-transparent hover:border-accent pb-1"
    >
      <span className="opacity-50">{icon}</span>
      <span className="text-base font-medium">{label}</span>
    </motion.a>
  );
}
