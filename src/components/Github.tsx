import React from "react";
import { GithubGraph } from "./ui/github";
import { motion } from "motion/react";

export default function Github({
  totalHeadlineDelay,
}: {
  totalHeadlineDelay: number;
}) {
  return (
    <div className="w-full md:flex justify-center items-center flex-col gap-4 mt-4 hidden">
      <motion.div
        initial={{ filter: "blur(6px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: totalHeadlineDelay + 1.0 }}
        className="space-y-3 max-w-3xl mt-6"
      >
        <h2 className="font-bold text-2xl text-black dark:text-white">
          Contributions
        </h2>
        <div className="overflow-x-auto">
          <GithubGraph
            username="subhraneel2005"
            blockMargin={window.innerWidth < 640 ? 1 : 2}
            lightColorPalette={[
              "#e6fbff", // very light cyan
              "#b3ecf5", // light blue-cyan
              "#80def0", // soft cyan
              "#4ED7F1", // main vibrant cyan
              "#1cb3cc", // deeper tone
            ]}
            darkColorPalette={[
              "#102529", // deep dark
              "#17434a", // dark teal
              "#217e8c", // ocean blue
              "#4ED7F1", // core color
              "#8df1ff", // highlight glow
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
}
