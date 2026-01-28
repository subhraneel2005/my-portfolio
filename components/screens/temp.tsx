"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Mail,
  GitPullRequestArrow,
  ExternalLink,
  Twitter,
  Terminal,
  Play,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function PortfolioV2() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

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
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="mb-6 text-3xl font-semibold leading-[0.9] tracking-tight sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            hi, i&apos;m subhraneel 👋 <br />
            <span className="mt-2 inline-block text-2xl font-light italic text-muted-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              i build things for the web.
            </span>
          </h1>
          <div className="space-y-8 sm:space-y-10">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              i like to create open-source tools and explore new tech. currently
              focused on skillmaxxing and shipping useful tools.
            </p>

            <Separator />

            {/* NEW: Projects Section */}
            <div id="projects" className="space-y-4">
              <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>side projects</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {projects.map((project) => (
                  <Link href={`/projects/${project.id}`} key={project.id}>
                    <div className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-border/80 bg-card/70 p-3 transition-colors hover:bg-accent/40 sm:flex-row">
                      {/* Small, fixed-size Thumbnail for horizontal look */}
                      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg border border-border/60 sm:w-40">
                        <Image
                          src="/opengraph.png"
                          alt={`${project.title} thumbnail`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-center flex-1">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm font-semibold leading-snug tracking-tight sm:text-base">
                            {project.title}
                          </span>
                          <ChevronRight className="h-4 w-4 opacity-20 transition-opacity group-hover:opacity-100" />
                        </div>

                        <span className="mb-4 line-clamp-2 text-[13px] text-muted-foreground">
                          {project.description}
                        </span>

                        <div className="flex flex-wrap gap-2">
                          {[
                            { name: "Next.js", src: "/nextjs.png" },
                            { name: "Prisma", src: "/prisma.png" },
                            { name: "Vercel", src: "/vercel.svg" },
                            { name: "Gemini", src: "/gemini.png" },
                          ].map((tech) => (
                            <Badge variant="outline" key={tech.name} className="gap-1 bg-secondary/60">
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
              <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>current work & documenting</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {pullRequests.map((pr) => (
                  <motion.a
                    key={pr.id}
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-start justify-between rounded-xl border border-border/80 bg-card/70 p-4 transition-colors hover:bg-accent/40"
                  >
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <GitPullRequestArrow className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold leading-snug">
                          {pr.title}
                        </span>
                        <span className="text-[13px] text-muted-foreground">
                          PR #{pr.id} — study-toolkit
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="mt-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-40" />
                  </motion.a>
                ))}
              </div>
            </div>

            <Separator />

            {/* Blog Section */}
            <div id="blog" className="space-y-4">
              <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>blogs</span>
              </h2>
              <Link href="/blogs">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="group flex cursor-pointer items-start justify-between rounded-xl border border-border/80 bg-card/70 p-4 transition-colors hover:bg-accent/40"
                >
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <BookOpen className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold leading-snug">
                        read my blogs
                      </span>
                      <span className="text-[13px] text-muted-foreground">
                        thoughts and learnings
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="mt-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-40" />
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
                  className="group flex items-center justify-between rounded-xl border border-border/80 bg-card/80 p-4 transition-colors hover:bg-accent/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg border border-border/70 bg-background p-2">
                      <Twitter className="h-5 w-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        let&apos;s chat on x
                      </p>
                      <p className="text-xs italic text-muted-foreground">
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
              <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>some walkthroughs</span>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {featureDemos.map((demo, index) => (
                  <div key={index} className="space-y-3 group">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/80 bg-card/70">
                      <iframe
                        src={demo.loomUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                    <div className="px-1">
                      <div className="flex items-center gap-2">
                        <Play className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm font-semibold leading-snug">
                          {demo.title}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] italic text-muted-foreground">
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
      className="group flex items-center gap-2 border-b border-transparent pb-1 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
    >
      <span className="opacity-60">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
}
