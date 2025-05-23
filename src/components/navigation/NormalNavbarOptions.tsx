import resume from "../../assets/resume.pdf";
import resumeIcon from "../../assets/icons/resume.svg";
import hiremeIcon from "../../assets/icons/hireme.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import useScrollToProjects from "../../hooks/useScrollToProjects";

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
        href={resume}
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
