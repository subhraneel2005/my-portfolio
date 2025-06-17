import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";

export const socialLinks = [
  {
    icon: FaSquareXTwitter,
    url: "https://x.com/Subhraneel55545",
    label: "Twitter",
    color: "hover:text-blue-400",
  },
  {
    icon: FaGithub,
    url: "https://github.com/subhraneel2005",
    label: "GitHub",
    color: "hover:text-gray-600 dark:hover:text-gray-300",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/subhraneel-goswami-599931282/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: IoIosDocument,
    url: "https://drive.google.com/file/d/1NtLKxW7QbI9Z8h6QuBkwK9XmNIENgRlB/view?usp=sharing",
    label: "Resume",
    color: "hover:scale-110",
  },
];
