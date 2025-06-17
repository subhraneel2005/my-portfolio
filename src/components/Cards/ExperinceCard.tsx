import { motion } from "motion/react";
import type { Variants } from "motion/react";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface ExperinceCardProps {
  role: string;
  company: string;
  location: string;
  date: string;
  context: string;
  logo: string;
  logoAlt: string;
}

export default function ExperinceCard({
  role,
  company,
  location,
  date,
  context,
  logo,
  logoAlt,
}: ExperinceCardProps) {
  const [showContext, setShowContext] = useState(false);

  const toggleContext = () => setShowContext((prev) => !prev);

  const contentVariants: Variants = {
    collapsed: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.2 },
      },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      marginTop: 12, // equivalent to mt-3
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.2 },
      },
    },
  };

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <div className="w-full flex flex-col justify-center items-start border border-dashed p-3 rounded-xl border-[#00A9FF]/60 bg-[#CDF5FD]/10">
      <span className="flex gap-2 items-center w-full justify-between">
        <span className="flex gap-2 items-center">
          <h3 className="font-bold text-lg">{role}</h3>
          <img src={logo} alt={logoAlt} className="size-8 rounded-md" />
        </span>
        <motion.div
          onClick={toggleContext}
          className="cursor-pointer"
          variants={chevronVariants}
          animate={showContext ? "expanded" : "collapsed"}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <BiChevronDown size={24} className="text-[#00A9FF]/60" />
        </motion.div>
      </span>

      <div className="flex gap-2 mt-2">
        <span className="italic text-zinc-700">{company}</span>
        <span className="italic text-zinc-700">{location}</span>
      </div>
      <span className="italic text-zinc-700">{date}</span>

      <motion.div
        variants={contentVariants}
        initial="collapsed"
        animate={showContext ? "expanded" : "collapsed"}
        style={{ overflow: "hidden" }}
      >
        <p className="text-zinc-800 text-sm">{context}</p>
      </motion.div>
    </div>
  );
}
