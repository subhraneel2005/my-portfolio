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
    <main className="w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="mb-8 -ml-2 text-muted-foreground sm:mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            back
          </Button>
        </Link>

        <header className="mb-10 space-y-3 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            case study
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            study-toolkit
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            An open-source, student-first productivity platform built to help
            students manage their academics efficiently.
          </p>

          <div className="flex gap-4 pt-4 text-sm">
            <a
              href="https://study-toolkit.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> live demo
            </a>
            <a
              href="https://github.com/subhraneel2005/study-toolkit"
              target="_blank"
              className="flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
            >
              <Github className="h-4 w-4" /> source code
            </a>
          </div>
        </header>

        <div className="space-y-12">
          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              key features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FeatureCard
                icon={<Cpu className="h-4 w-4" />}
                title="ai tools"
                desc="flashcards, pdf chat, and summarizers powered by gemini."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-4 w-4" />}
                title="secure byok"
                desc="two-layer encryption for personal api key storage."
              />
            </div>
            <ul className="list-disc space-y-3 pl-4 text-sm text-muted-foreground">
              <li>daily logs, checklist, and study heatmap tracking.</li>
              <li>clean, responsive ui focused on minimal distraction.</li>
              <li>fully open-source and community driven.</li>
            </ul>
          </section>

          <Separator />

          {/* Architecture / Tech Stack Section */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  variant={"outline"}
                  key={tech.name}
                  className="group flex items-center gap-1 bg-secondary/70"
                >
                  <div className="relative h-[15px] w-[15px]">
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
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              the goal
            </h2>
            <p className="max-w-xl text-sm italic leading-relaxed text-muted-foreground sm:text-base">
              &ldquo;provide a beta platform for 1k to 5k students to manage and
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
    <div className="rounded-xl border border-border/80 bg-card/80 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
        {icon} {title}
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
