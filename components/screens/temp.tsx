"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  ExternalLink,
  Twitter,
  ArrowRight,
  ArrowUpRight,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "../ui/badge";

export default function PortfolioV2() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const techStack = [
    "Next.js",
    "TypeScript",
    "React",
    "Prisma",
    "PostgreSQL",
    "Node.js",
    "AI SDK",
    "Tailwind",
  ];

  const projects = [
    {
      id: "docshub",
      title: "Docshub",
      description:
        "AI documentation pipeline that lives in your CLI. Generate high-fidelity docs from any GitHub repo.",
      longDescription:
        "Authenticate via GitHub device flow, select a repo, and let AI generate structured documentation. Output to Fumadocs-ready format.",
      tech: ["Bun",
        "Turborepo",
        "AI SDK",
        "OpenRouter",
        "GitHub API",
        "OpenTUI",
        "TypeScript"],
      url: "https://docshubb.vercel.app",
      github: "https://github.com/subhraneel2005/docshub",
    },
    {
      id: "ai-shorts-generator",
      title: "Local AI Shorts Generator",
      description:
        "End-to-end pipeline that converts text prompts into ready-to-publish TikTok/Reels/Shorts videos.",
      longDescription:
        "A multi-flow architecture for script generation, audio synthesis, transcription, and server-side video rendering using Remotion.",
      tech: ["TypeScript", "Remotion", "ElevenLabs", "OpenAI", "Whisper.cpp"],
      url: "https://vidgen-docs.vercel.app",
      github: "https://github.com/subhraneel2005/ai-shorts-generator",
    },
    {
      id: "study-toolkit",
      title: "Study-toolkit",
      description:
        "An open-source, student-first productivity platform with AI-powered tools.",
      longDescription:
        "A comprehensive platform helping students manage academics with AI tools, daily logs, and study tracking.",
      tech: ["Next.js", "Vercel AI SDK", "Prisma", "PostgreSQL"],
      url: "https://study-toolkit.vercel.app/",
      github: "https://github.com/subhraneel2005/study-toolkit",
    },
    {
      id: "trpc-realtime-notifications",
      title: "Real-time Notifications",
      description:
        "A real-time notification system using tRPC and WebSockets for low-latency event delivery.",
      longDescription:
        "Designed and built a production-grade notification system with authenticated WebSocket connections and E2E post-like flow.",
      tech: ["Next.js", "tRPC", "WebSockets", "Prisma", "PostgreSQL"],
      url: "",
      github: "https://github.com/subhraneel2005/trpc-realtime-notification-service",
    },

  ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              hi, i&apos;m subhraneel.
            </h1>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                i love building challenging projects, coding, shipping, and improving them. taking ideas from 0 → 1 and scaling them is exactly the kind of environment i want to be in.
              </p>
              <p>
                i contribute to open source under organizations like Sugar Labs, working on real codebases in distributed teams. i&apos;m also building my own cli/tui interface, focused on clean architecture and developer experience.
              </p>
              <p>
                recently, i built an ai shorts generator pipeline using typescript, node, ai sdk, and elevenlabs, handling async orchestration, media processing, and api integrations end to end.
              </p>
              <p>
                i document my work on github, write technical breakdowns on my portfolio blog, and share what i build on X.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/blogs">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  read blogs
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/blogs/whos-this-guy">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  about me
                </motion.button>
              </Link>
            </div>
          </div>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              open source
            </h2>
            <Link href="/oss">
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/80 hover:bg-accent/20"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">my open source work</h3>
                  <p className="text-sm text-muted-foreground">
                    Projects, contributions, and tools i&apos;ve built.
                  </p>

                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.section>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/80 hover:bg-accent/20"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold tracking-tight">
                            {project.title}
                          </h3>
                          <div className="flex gap-4">
                            {project.url && (
                              <a
                                href={project.url}
                                onClick={(e) => e.stopPropagation()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Link2 className="h-4 w-4" />
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                onClick={(e) => e.stopPropagation()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tech.map((t) => (
                            <Badge key={t} variant="outline" className="text-xs">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              let&apos;s connect
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <SocialLink
                href="https://x.com/subhraneeltwt"
                label="@subhraneeltwt"
                icon={<Twitter className="h-4 w-4" />}
              />
              <SocialLink
                href="https://github.com/subhraneel2005"
                label="github"
                icon={<Github className="h-4 w-4" />}
              />
              <SocialLink
                href="mailto:subhraneeljobs@gmail.com"
                label="email"
                icon={<Mail className="h-4 w-4" />}
              />
            </div>
          </motion.section>
        </motion.section>
      </div>
    </main>
  );
}

function SocialLink({
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
      whileHover={{ x: 2 }}
      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
