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
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-4 pt-16 pb-4">
      <Intro words={words} totalHeadlineDelay={totalHeadlineDelay} />
      <TechStack totalHeadlineDelay={totalHeadlineDelay} />
      <WorkExperience totalHeadlineDelay={totalHeadlineDelay} />
      <Github totalHeadlineDelay={totalHeadlineDelay} />
      <Project totalHeadlineDelay={totalHeadlineDelay} />

      <div className="w-full mt-12 dark:text-white/80 bottom-2 text-black/80 flex justify-center items-center max-w-3xl px-4">
        Developed with ❤️ by{" "}
        <a
          className="cursor-pointer ml-1"
          href="https://x.com/Subhraneel55545"
          target="_blank"
        >
          Subhraneel
        </a>
      </div>
    </div>
  );
}
