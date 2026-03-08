"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Terminal,
  GitPullRequest,
  Heart,
  CircleDot,
  MessageCircle,
  CheckCircle2,
  Link2,
  Link2Icon,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function OSSPage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const prsRaised = [
    {
      repo: "sugarlabs/musicblocks",
      url: "https://github.com/sugarlabs/musicblocks/pull/6101",
      title: "Feat(planet): implement progressive loading for project cards",
      status: "open",
    },
    {
      repo: "sugarlabs/musicblocks",
      url: "https://github.com/sugarlabs/musicblocks/pull/5644",
      title: "Chore: remove debug console statements from js/palette.js",
      status: "merged",
    },
    {
      repo: "sugarlabs/musicblocks",
      url: "https://github.com/sugarlabs/musicblocks/pull/5748",
      title: "Fix: remove debug console statements from js/EnsembleBlocks.js",
      status: "merged",
    },
    {
      repo: "sugarlabs/musicblocks-git-backend",
      url: "https://github.com/sugarlabs/musicblocks-git-backend/pull/8",
      title: "Fix: add missing returns from controllers",
      status: "open",
    },
    {
      repo: "sugarlabs/musicblocks-git-backend",
      url: "https://github.com/sugarlabs/musicblocks-git-backend/pull/9",
      title: "Refactor: introduces centralized error handling system",
      status: "open",
    },
    {
      repo: "sugarlabs/musicblocks-git-backend",
      url: "https://github.com/sugarlabs/musicblocks-git-backend/pull/12",
      title: "Feat(ci): added Jest workflow to run tests on every PR",
      status: "open",
    },
  ];

  const issuesOpened = [
    {
      repo: "sugarlabs/musicblocks",
      url: "https://github.com/sugarlabs/musicblocks/issues/6072",
      title: "[UI/UX] Planet server projects in Global load one-by-one causing long wait times",
    },
    {
      repo: "sugarlabs/musicblocks-git-backend",
      url: "https://github.com/sugarlabs/musicblocks-git-backend/issues/10",
      title: "Refactor: Improve consistency of error handling across controllers and middleware",
    },
  ];

  const reviewsAndComments = [
    {
      url: "https://github.com/sugarlabs/musicblocks/pull/6120#pullrequestreview-3903662808",
      title: "Code review on PR #6120: AI Reflection widget UX improvement",
      type: "review",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks-git-backend/issues/7#issuecomment-3915499207",
      title: "Comment on issue #7: Suggestion on collaborating to write a centralized error handling system",
      type: "comment",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks/pull/5773#issuecomment-3915893504",
      title: "Comment on PR #5773: Tested changes locally to make sure it works as expected",
      type: "comment",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks/pull/5788#issuecomment-3933043151",
      title: "Comment on PR #5788: Helped in fixing ci test failure",
      type: "comment",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks/pull/5856#issuecomment-3939220560",
      title: "Code review on PR #5856: Found a bug on incoming changes and reported it",
      type: "review",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks/issues/5857#issuecomment-3941091168",
      title: "Review on issue #5857: Reproduced the issue locally and wrote my views on the behaviour",
      type: "review",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks-git-backend/pull/11#pullrequestreview-3838509444",
      title: "Code review on PR #11: Reported about failed jest tests",
      type: "review",
    },
    {
      url: "https://github.com/sugarlabs/musicblocks/pull/6113#pullrequestreview-3903787284",
      title: "Code review on PR #6113: Pointed out 3 tests that were too loose and had no regression",
      type: "review",
    },
  ];

  const openSourceWork = [
    {
      title: "Docshub",
      slug: "docshub",
      description: "AI documentation pipeline that lives in your CLI",
      github: "https://github.com/subhraneel2005/docshub",
      highlights: [
        "GitHub device authentication with local token encryption",
        "Automated planning and multi-stage content generation",
        "Compiles markdown into high-density context for LLM",
        "Integrates with Fumadocs for instant documentation sites",
      ],
    },
    {
      title: "Study-toolkit",
      slug: "study-toolkit",
      description: "Student-first productivity platform with AI-powered tools",
      github: "https://github.com/subhraneel2005/study-toolkit",
      highlights: [
        "Full user onboarding with betterauth, resend, prisma",
        "AI tools: flashcards, PDF chat, summarizers powered by Gemini",
        "Daily logs, checklist, and study heatmap tracking",
        "Community-driven with open-source contributions",
      ],
    },
    {
      title: "AI Shorts Generator",
      slug: "ai-shorts-generator",
      description: "End-to-end pipeline for AI short video generation",
      github: "https://github.com/subhraneel2005/ai-shorts-generator",
      highlights: [
        "Script → audio → transcription → video rendering flow",
        "ElevenLabs API for high-quality text-to-speech",
        "Server-side video rendering with Remotion",
        "Production-grade reliability with error handling",
      ],
    },
    {
      title: "Real-time Notification Service",
      slug: "trpc-realtime-notifications",
      description: "tRPC + WebSockets for low-latency event delivery",
      github: "https://github.com/subhraneel2005/trpc-realtime-notification-service",
      highlights: [
        "Authenticated WebSocket connections on user login",
        "Full E2E JWT authentication flow",
        "Multiple outbound events: LIKE ACK and NOTIFICATION",
        "Fully documented architecture and event flows",
      ],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
        <Link href="/">
          <motion.button
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            back
          </motion.button>
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              proof of work
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              i actively contribute to open source and build tools that solve real
              problems. here&apos;s a collection of my work and contributions.
            </p>

          </div>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              PRs raised
            </h2>
            <div className="space-y-2">
              {prsRaised.map((pr, index) => (
                <motion.a
                  key={index}
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-accent/50"
                >
                  <GitPullRequest className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="flex-1 text-sm">{pr.title}</span>
                  <Badge
                    variant={pr.status === "merged" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {pr.status === "merged" ? (
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                    ) : (
                      <CircleDot className="mr-1 h-3 w-3" />
                    )}
                    {pr.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {pr.repo.split("/")[1]}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.section>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              issues opened
            </h2>
            <div className="space-y-2">
              {issuesOpened.map((issue, index) => (
                <motion.a
                  key={index}
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-accent/50"
                >
                  <CircleDot className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="flex-1 text-sm">{issue.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {issue.repo.split("/")[1]}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.section>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              reviews & comments
            </h2>
            <div className="space-y-2">
              {reviewsAndComments.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-accent/50"
                >
                  {item.type === "review" ? (
                    <GitPullRequest className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <MessageCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                  <span className="text-sm">{item.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.section>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-8"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              projects
            </h2>
            <div className="space-y-8">
              {openSourceWork.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Link href={`projects/${project.slug}`}>
                      <div className="space-y-1">
                        <div className="flex justify-start items-center gap-2">
                          <h3 className="text-lg font-semibold">{project.title}</h3>

                          <ArrowUpRight className="h-5 w-5" />

                        </div>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Separator />

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              organizations
            </h2>
            <motion.a
              href="https://github.com/sugarlabs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:bg-accent/50"
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium">Sugar Labs</span>
                <p className="text-xs text-muted-foreground">
                  Contributing to real-world codebases in distributed teams
                </p>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
            </motion.a>
          </motion.section>


          <span className="flex justify-center items-center space-x-1">built with <Heart className="h-4 w-4 text-red-500 ml-1" /> by <Link className="ml-1 underline" href={"https://x.com/subhraneeltwt"}>subhraneel</Link> </span>

        </motion.section>
      </div>
    </main>
  );
}
