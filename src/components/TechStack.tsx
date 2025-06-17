import { motion } from "motion/react";
import { tech } from "../utils/tech";

export default function TechStack({
  totalHeadlineDelay,
}: {
  totalHeadlineDelay: number;
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        initial={{ filter: "blur(6px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: totalHeadlineDelay + 0.6 }}
        className="space-y-3 max-w-3xl px-4 mt-6"
      >
        <h2 className="font-bold text-2xl text-black dark:text-white">Stack</h2>
        <div className="flex gap-4 flex-wrap">
          {tech.map((t, index) => (
            <motion.span
              key={index}
              initial={{ filter: "blur(6px)", opacity: 0, y: 10 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: totalHeadlineDelay + 0.3 + index * 0.1,
              }}
              className="flex justify-center items-center gap-1 border border-dashed px-1 rounded-sm border-[#00A9FF]/60 bg-[#CDF5FD]/10 dark:border-[#00A9FF]/40 dark:bg-[#CDF5FD]/5"
            >
              <img src={t.src} alt={t.name} className="size-4 rounded-md" />
              <p className="text-sm text-black dark:text-white">{t.name}</p>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
