import React from "react";
import { motion } from "motion/react";
import ExperinceCard from "./Cards/ExperinceCard";

export default function WorkExperience({
  totalHeadlineDelay,
}: {
  totalHeadlineDelay: number;
}) {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      <motion.div
        initial={{ filter: "blur(6px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: totalHeadlineDelay + 0.8 }}
        className="space-y-3 max-w-3xl px-4 mt-6"
      >
        <h2 className="font-bold text-2xl text-black dark:text-white">
          Experience
        </h2>
        <div className="space-y-6 mt-4">
          <ExperinceCard
            role={"Backend Developer"}
            logo={"/logos/klabs.jpg"}
            logoAlt="jobsforce.ai"
            company={"Kasukabe Labs,"}
            date={"Present"}
            location={"Kolkata, West Bengal"}
            context={
              "Presently I do backend development for a web agency, focusing on full-stack projects for college and freelance clients. My role involves designing scalable systems, managing databases, and building APIs. I've implemented microservices architectures, optimized performance for high-traffic apps, and I also do deployment practices to ensure smooth delivery."
            }
          />
          <ExperinceCard
            role={"Fullstack Developer Intern"}
            logo={"/logos/josbforceai.png"}
            logoAlt="kasukabe labs"
            company={"Jobsforce.ai,"}
            date={"February 2025 – April 2025"}
            location={"San Francisco, CA (Remote)"}
            context={
              "I worked with a US-based startup to develop AI-powered job-matching systems. Using Node.js and Express.js, I built and maintained scalable backend systems and RESTful APIs. I collaborated with cross-functional teams across time zones and integrated third-party services to enhance functionality."
            }
          />
        </div>
      </motion.div>
    </div>
  );
}
