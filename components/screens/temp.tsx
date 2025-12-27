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
  Play,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
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
      id: "20",
      url: " https://github.com/subhraneel2005/study-toolkit/pull/20",
      title: "feat: Finished user onboarding e2e",
    },
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

  const featureDemos = [
    {
      title: "onboarding flow walkthrough",
      loomUrl: "https://www.loom.com/embed/71f9e74f32a54221852b099b0e5b6e85",
      description:
        "implemented full user onboarding usign betterauth, resend, prisma and react server actions",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] mb-6 sm:mb-8">
            building in the{" "}
            <span className="italic font-light opacity-40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              shadows
            </span>
            <br />
            back in a bit.
          </h1>

          <div className="space-y-8 sm:space-y-10">
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

            {/* Blog Section */}
            <div id="blog" className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <span>blogs</span>
              </h2>
              <Link href="/blogs">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold leading-snug">
                        read my blogs
                      </span>
                      <span className="text-[13px] opacity-50">
                        thoughts and learnings
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 mt-1 opacity-0 group-hover:opacity-40 transition-opacity" />
                </motion.div>
              </Link>
            </div>

            <Separator />

            {/* Let's Chat Section */}
            <div id="letsConnect" className="space-y-4">
              <div className="pt-4">
                <motion.a
                  href="https://x.com/subhraneeltwt"
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
                        @subhraneeltwt
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

            <Separator />

            {/* Feature Demos Section (LOOM EMBEDS) */}
            <div id="demos" className="space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <span>some walkthroughs</span>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {featureDemos.map((demo, index) => (
                  <div key={index} className="space-y-3 group">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900/50">
                      <iframe
                        src={demo.loomUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                    <div className="px-1">
                      <div className="flex items-center gap-2">
                        <Play className="w-3 h-3 text-zinc-400" />
                        <span className="text-sm font-semibold leading-snug">
                          {demo.title}
                        </span>
                      </div>
                      <p className="text-[13px] opacity-50 mt-1 italic">
                        {demo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
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
