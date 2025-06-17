import { motion } from "motion/react";
import { projectsData } from "../utils/projectData";
import ProjectCard from "./Cards/ProjectCard";

export default function Project({
  totalHeadlineDelay,
}: {
  totalHeadlineDelay: number;
}) {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      <motion.div
        initial={{ filter: "blur(6px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: totalHeadlineDelay + 1.2 }}
        className="space-y-3 max-w-3xl px-4 mt-6"
      >
        <h2 className="font-bold text-2xl">Projects</h2>
        <div className="space-y-6 mt-4">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ filter: "blur(6px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: totalHeadlineDelay + 1.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <ProjectCard
                title={project.title}
                technologies={project.technologies}
                description={project.description}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
