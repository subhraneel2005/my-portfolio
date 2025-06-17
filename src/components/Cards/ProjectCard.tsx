import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const tech = [
  { src: "/tech/docker.webp", name: "Docker" },
  { src: "/tech/ex.png", name: "Express" },
  { src: "/tech/fastify.png", name: "Fastify" },
  { src: "/tech/git.png", name: "Git" },
  { src: "/tech/html.png", name: "HTML" },
  { src: "/tech/js.png", name: "JavaScript" },
  { src: "/tech/mongodb.png", name: "MongoDB" },
  { src: "/tech/next.png", name: "Next.js" },
  { src: "/tech/nodejs.png", name: "Node.js" },
  { src: "/tech/pg.webp", name: "PostgreSQL" },
  { src: "/tech/react.webp", name: "React" },
  { src: "/tech/tailwind.png", name: "Tailwind CSS" },
  { src: "/tech/ts.png", name: "TypeScript" },
];

interface ProjectCardProps {
  title: string;
  technologies: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  technologies,
  description,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  const getTechWithImages = (techNames: string[]) => {
    return techNames.map((techName) => {
      const foundTech = tech.find((t) => t.name === techName);
      return foundTech || { src: "", name: techName };
    });
  };

  const techWithImages = getTechWithImages(technologies);

  return (
    <div className="w-full flex flex-col justify-center items-start border border-dashed p-4 rounded-xl border-[#00A9FF]/40 bg-[#CDF5FD]/5">
      <div className="flex gap-3 items-center w-full">
        {image && (
          <img
            src={image}
            alt={`${title} logo`}
            className="size-8 rounded-md flex-shrink-0"
          />
        )}
        <div className="flex justify-center gap-3">
          <h3 className="font-bold text-lg text-zinc-900">{title}</h3>
          <div className="flex gap-4 justify-center items-center">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-gray-200 text-gray-600 transition-all duration-300 hover:w-24"
              >
                <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover:-translate-x-2.5 group-hover:opacity-100">
                  Live Site
                </p>
                <div className="absolute right-1.5">
                  <FiExternalLink size={14} />
                </div>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-gray-200 text-gray-600 transition-all duration-300 hover:w-24"
              >
                <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover:-translate-x-2.5 group-hover:opacity-100">
                  GitHub
                </p>
                <div className="absolute right-1.5">
                  <FiGithub size={14} />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-3">
        {techWithImages.map((t, index) => (
          <span
            key={index}
            className="flex justify-center items-center gap-1 border border-dashed px-1 rounded-md border-[#00A9FF]/60 bg-[#CDF5FD]/30"
          >
            {t.src && (
              <img src={t.src} alt={t.name} className="size-4 rounded-md" />
            )}
            <p className="text-sm">{t.name}</p>
          </span>
        ))}
      </div>
      <p className="text-zinc-700 text-sm leading-relaxed mt-3">
        {description}
      </p>
    </div>
  );
}
