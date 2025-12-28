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
  LayoutGrid,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "../ui/badge";

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

  const projects = [
    {
      id: "study-toolkit",
      title: "study-toolkit",
      description:
        "An open-source, student-first productivity platform with AI-powered tools.",
      tech: ["Next.js", "Vercel AI SDK", "Prisma"],
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
            hi, i&apos;m subhraneel👋 <br />
            <span className="italic font-light opacity-40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              i build things for the web
            </span>
          </h1>
          <div className="space-y-8 sm:space-y-10">
            <p className="text-lg leading-tight text-zinc-500 dark:text-zinc-400">
              i like to create open-source tools and exploring new tech.
              currently focused on skillmaxxing and shipping usefull tools.
            </p>

            <Separator />

            {/* NEW: Projects Section */}
            <div id="projects" className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
                <span>sideprojects</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {projects.map((project) => (
                  <Link href={`/projects/${project.id}`} key={project.id}>
                    <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group cursor-pointer p-3">
                      {/* Small, fixed-size Thumbnail for horizontal look */}
                      <div className="relative h-28 w-full sm:w-40 shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                        <Image
                          src="/opengraph.png"
                          alt={`${project.title} thumbnail`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-col justify-center flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-md font-semibold leading-snug tracking-[-1.1px]">
                            {project.title}
                          </span>
                          <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <span className="text-[13px] opacity-70 mb-4 line-clamp-2">
                          {project.description}
                        </span>

                        {/* Your exact Badge styles preserved */}
                        <div className="flex flex-wrap gap-2">
                          {[
                            { name: "Next.js", src: "/nextjs.png" },
                            { name: "Prisma", src: "/prisma.png" },
                            { name: "Vercel", src: "/vercel.svg" },
                            { name: "Gemini", src: "/gemini.png" },
                          ].map((tech) => (
                            <Badge
                              variant={"outline"}
                              key={tech.name}
                              className="bg-secondary gap-1"
                            >
                              <Image
                                src={tech.src}
                                alt={tech.name}
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-[13px] font-medium tracking-tight">
                                {tech.name}
                              </span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Separator />

            {/* Current Working and Documenting Section */}
            <div id="work" className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
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
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
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
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
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
                        <Play className="w-3 h-3 text-muted-foreground" />
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
