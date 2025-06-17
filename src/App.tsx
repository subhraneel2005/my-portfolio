import React from "react";
import Intro from "./components/Intro";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Github from "./components/Github";

export default function App() {
  const headline = "Hi, Im Subhraneel";
  const words = headline.split(" ");
  const totalHeadlineDelay = 0.2 * words.length;
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-4 py-20">
      <Intro words={words} totalHeadlineDelay={totalHeadlineDelay} />
      <TechStack totalHeadlineDelay={totalHeadlineDelay} />
      <WorkExperience totalHeadlineDelay={totalHeadlineDelay} />
      <Github totalHeadlineDelay={totalHeadlineDelay} />
      <Project totalHeadlineDelay={totalHeadlineDelay} />
    </div>
  );
}
