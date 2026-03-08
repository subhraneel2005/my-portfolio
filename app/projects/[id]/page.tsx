"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  FileText,
  Sparkles,
  Workflow,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

const projectsData: Record<
  string,
  {
    title: string;
    description: string;
    longDescription: string;
    tech: { name: string; src?: string }[];
    features: { icon: React.ReactNode; title: string; desc: string }[];
    highlights: string[];
    url?: string;
    github: string;
    goal?: string;
  }
> = {
  "study-toolkit": {
    title: "study-toolkit",
    description:
      "An open-source, student-first productivity platform built to help students manage their academics efficiently.",
    longDescription:
      "A comprehensive platform helping students manage academics with AI tools, daily logs, and study tracking. Features flashcards, PDF chat, summarizers powered by Gemini, and secure BYOK for personal API key storage.",
    tech: [
      { name: "Next.js" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Vercel AI SDK" },
      { name: "Gemini" },
      { name: "Zustand" },
    ],
    features: [
      {
        icon: <Cpu className="h-4 w-4" />,
        title: "AI Tools",
        desc: "Flashcards, PDF chat, and summarizers powered by Gemini.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "Secure BYOK",
        desc: "Two-layer encryption for personal API key storage.",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Study Tracking",
        desc: "Daily logs, checklist, and study heatmap tracking.",
      },
    ],
    highlights: [
      "Full user onboarding flow with betterauth, resend, prisma",
      "Daily checklist feature built end-to-end",
      "RSC implementation for DailyLog screen",
      "Dailylog feature with chat persistence",
      "Flashcards generator with disposable zustand store",
    ],
    url: "https://study-toolkit.vercel.app/",
    github: "https://github.com/subhraneel2005/study-toolkit",
    goal: "Provide a beta platform for 1k to 5k students to manage and enhance their study workflow while collecting feedback to refine the platform.",
  },
  "ai-shorts-generator": {
    title: "AI Shorts Generator",
    description:
      "End-to-end pipeline that converts text prompts into ready-to-publish TikTok/Reels/Shorts videos.",
    longDescription:
      "A multi-flow architecture for script generation, audio synthesis, transcription, and server-side video rendering. Built with Remotion for programmatic video creation, ElevenLabs for high-quality TTS, and OpenAI/Google Gemini for intelligent script generation.",
    tech: [
      { name: "TypeScript" },
      { name: "Remotion" },
      { name: "ElevenLabs" },
      { name: "OpenAI" },
      { name: "Whisper.cpp" },
      { name: "Google Gemini" },
    ],
    features: [
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "AI Script Generation",
        desc: "Schema validation and metadata extraction using AI-SDK and Gemini.",
      },
      {
        icon: <Workflow className="h-4 w-4" />,
        title: "Multi-flow Architecture",
        desc: "Designed for script → audio → transcription → video rendering.",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Async Orchestration",
        desc: "Handles async media processing and API integrations end-to-end.",
      },
    ],
    highlights: [
      "Converts single text prompt into ready-to-publish TikTok/Reels/Shorts",
      "ElevenLabs API integration for high-quality text-to-speech",
      "Server-side video rendering with Remotion",
      "Input validation and observability for production-grade reliability",
      "API failure handling with graceful degradation",
    ],
    url: "https://vidgen-docs.vercel.app",
    github: "https://github.com/subhraneel2005/ai-shorts-generator",
    goal: "Enable content creators to generate viral short-form videos automatically from text prompts, reducing production time from hours to minutes.",
  },
  "trpc-realtime-notifications": {
    title: "Real-time Notification Service",
    description:
      "A real-time notification system using tRPC and WebSockets for low-latency event delivery.",
    longDescription:
      "A production-grade notification system with authenticated WebSocket connections triggered on user login. Features end-to-end JWT authentication flow to securely authorize private tRPC procedures and socket events.",
    tech: [
      { name: "Next.js" },
      { name: "tRPC" },
      { name: "WebSockets" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "JWT" },
    ],
    features: [
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Low-latency Delivery",
        desc: "WebSockets for real-time event delivery.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "JWT Auth Flow",
        desc: "End-to-end authentication for secure private procedures.",
      },
      {
        icon: <Workflow className="h-4 w-4" />,
        title: "E2E Post Flow",
        desc: "Inbound events update DB and trigger notifications asynchronously.",
      },
    ],
    highlights: [
      "Authenticated WebSocket connections triggered on user login",
      "Full E2E post-like flow with LIKE ACK and NOTIFICATION events",
      "Multiple outbound events: LIKE ACK to actor, NOTIFICATION to post author",
      "Fully documented system architecture, event flows, and payloads",
      "Production-grade reliability with error handling",
    ],
    github: "https://github.com/subhraneel2005/trpc-realtime-notification-service",
    goal: "Demonstrate scalable real-time communication patterns using modern TypeScript stacks with proper authentication and event-driven architecture.",
  },
  docshub: {
    title: "Docshub",
    description:
      "AI documentation pipeline that lives in your CLI. Generate high-fidelity docs from any GitHub repo.",
    longDescription:
      "The AI documentation pipeline that lives in your CLI. Authenticate via GitHub device flow, select a repo, and let AI generate structured documentation ready for Fumadocs or Mintlify.",
    tech: [
      { name: "Bun" },
      { name: "Turborepo" },
      { name: "AI SDK" },
      { name: "OpenRouter" },
      { name: "GitHub API" },
      { name: "OpenTUI" },
      { name: "TypeScript" },
    ],
    features: [
      {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "Secure Auth",
        desc: "GitHub device authentication with local token encryption.",
      },
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: "AI Pipeline",
        desc: "Automated planning and multi-stage content generation.",
      },
      {
        icon: <FileText className="h-4 w-4" />,
        title: "Desktop Delivery",
        desc: "Final files written to Desktop in timestamped folder.",
      },
    ],
    highlights: [
      "GitHub device auth saves accessToken securely in ~/.docshub/config.json",
      "Indexes every MD/MDX file for context selection",
      "LLM analyzes compiled content to generate holistic documentation plan",
      "Compiles selected markdown into high-density context string",
      "Integrates with Fumadocs for instant documentation sites",
    ],
    url: "https://docshubb.vercel.app",
    github: "https://github.com/subhraneel2005/docshub",
    goal: "Automate the tedious process of generating documentation by leveraging AI to understand codebases and produce structured, high-quality docs.",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id];

  const router = useRouter();


  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
        <motion.button
          onClick={() => router.back()}
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          back
        </motion.button>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            project
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          <div className="flex gap-4 pt-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <Link2 className="h-4 w-4" /> live demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              <Github className="h-4 w-4" /> source code
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <Separator className="my-12" />

          <section className="space-y-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech.name} variant="secondary" className="text-xs">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              key features
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                  className="rounded-lg border border-border bg-card/50 p-4"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                    {feature.icon}
                    {feature.title}
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </section>

          {project.goal && (
            <>
              <Separator />
              <section className="space-y-4">
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  the goal
                </h2>
                <p className="italic leading-relaxed text-muted-foreground">
                  &ldquo;{project.goal}&rdquo;
                </p>
              </section>
            </>
          )}
        </motion.section>
      </div>
    </main>
  );
}
