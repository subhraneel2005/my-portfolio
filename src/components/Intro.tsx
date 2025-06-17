import React from "react";
import { motion } from "motion/react";

interface AppProps {
  words: string[];
  totalHeadlineDelay: number;
}

export default function Intro({ words, totalHeadlineDelay }: AppProps) {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      <div className="space-y-3 max-w-3xl w-full px-4">
        {words.map((word, index) => (
          <motion.h1
            key={index}
            initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="font-bold text-2xl md:text-4xl inline-block mr-1.5"
          >
            {word}
          </motion.h1>
        ))}

        <motion.img
          src="/hi.jpeg"
          alt="hiImage"
          className="size-20 md:size-24 rounded-xl"
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: totalHeadlineDelay }}
        />
      </div>
      <motion.div
        initial={{ filter: "blur(6px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: totalHeadlineDelay + 0.4 }}
        className="space-y-3 max-w-3xl px-4 mt-6"
      >
        <h2 className="font-bold text-2xl">About me</h2>
        <p>
          20-year-old backend developer from Kolkata, India, with a passion for
          building scalable and practical tech solutions. I’ve been diving deep
          into coding, focusing on backend systems, microservices, and AI-driven
          tools. I enjoy working on open-source projects and creating tools that
          make development easier for others. My work spans around{" "}
          <span className="font-bold">remote startup in San Francisco</span> to
          my own initiatives at <span className="font-bold">Kasukabe Labs</span>{" "}
          , where I explore everything from authentication systems to content
          management platforms. I’m always learning, experimenting, and striving
          to write clean, efficient code.
        </p>
      </motion.div>
    </div>
  );
}
