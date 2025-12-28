import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Code2,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const techStack = [
  { name: "Next.js", src: "/nextjs.png" },
  { name: "Prisma", src: "/prisma.png" },
  { name: "Vercel", src: "/vercel.svg" },
  { name: "Gemini", src: "/gemini.png" },
  { name: "PostgreSQL", src: "/postgre.png" },
  { name: "Zustand", src: "/zustand.svg" },
  { name: "React", src: "/react.png" },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground mt-6">
      <div className="mx-auto w-full max-w-3xl px-4 pt-20 pb-16">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 sm:mb-12 -ml-2 text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back
          </Button>
        </Link>

        <header className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            study-toolkit
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            An open-source, student-first productivity platform built to help
            students manage their academics efficiently.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="https://study-toolkit.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a
              href="https://github.com/subhraneel2005/study-toolkit"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          </div>
        </header>

        <div className="space-y-12">
          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Cpu className="w-4 h-4" />}
                title="AI Tools"
                desc="Flashcards, PDF Chat, and Summarizers using Gemini API."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-4 h-4" />}
                title="Secure BYOK"
                desc="Two-layer encryption for personal API key storage."
              />
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm list-disc pl-4">
              <li>Daily logs, checklists, and study heatmap tracking.</li>
              <li>Clean, responsive UI focused on minimal distraction.</li>
              <li>Fully open-source and community driven.</li>
            </ul>
          </section>

          <Separator />

          {/* Architecture / Tech Stack Section */}
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  variant={"outline"}
                  key={tech.name}
                  className="flex items-center gap-1 group bg-secondary"
                >
                  <div className="relative w-[15px] h-[15px]">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold tracking-tight">
                    {tech.name}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Impact */}
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
              The Goal
            </h2>
            <p className="text-foreground/70 italic leading-relaxed">
              &ldquo;Provide a beta platform for 1k to 5k students to manage and
              enhance their study workflow while collecting feedback to refine
              the platform.&ldquo;
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="flex items-center gap-2 mb-2 font-semibold text-sm">
        {icon} {title}
      </div>
      <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
