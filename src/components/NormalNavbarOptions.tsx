import { useScrollToProjects } from "./utils";

import projectsIcon from "../assets/icons/projects.svg";
import resumeIcon from "../assets/icons/resume.svg";
import resumePDF from "../assets/sarakochovska-resume.pdf";
import hiremeIcon from "../assets/icons/hireme.svg";

export default function NormalNavbarOptions() {
  const scrollToProjects = useScrollToProjects();

  return (
    <div className="flex gap-12">
      <a
        href="#projects"
        className="text-xl flex gap-2 items-end hover:underline hover:underline-offset-5"
        onClick={(e) => scrollToProjects(e)}
      >
        <img src={projectsIcon} alt="icon" className="w-auto h-8" />
        Projects
      </a>
      <a
        href={resumePDF}
        className="text-xl flex gap-2 items-end hover:underline hover:underline-offset-5"
        rel="noreferrer"
        target="_blank"
      >
        <img src={resumeIcon} alt="icon" className="w-auto h-8" />
        Resume
      </a>
      <a
        href="mailto:sara_kochovska@yahoo.com"
        className="text-xl flex gap-2 items-end hover:underline hover:underline-offset-5"
        rel="noreferrer"
        target="_blank"
      >
        <img src={hiremeIcon} alt="icon" className="w-auto h-8" />
        Hire me
      </a>
    </div>
  );
}
