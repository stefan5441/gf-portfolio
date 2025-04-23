import resume from "../../assets/resume.pdf";
import resumeIcon from "../../assets/icons/resume.svg";
import hiremeIcon from "../../assets/icons/hireme.svg";
import FloatingNavBarItem from "./FloatingNavBarItem";
import projectsIcon from "../../assets/icons/projects.svg";
import useScrollToProjects from "../../hooks/useScrollToProjects";

export default function FloatingNavBar({ visible }: { visible: boolean }) {
  const scrollToProjects = useScrollToProjects();

  return (
    <div
      className={`fixed ml-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 text-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FloatingNavBarItem icon={projectsIcon} text="Projects" href="#projects" onClick={(e) => scrollToProjects(e)} />
      <FloatingNavBarItem icon={resumeIcon} text="Resume" href={resume} isExternal />
      <FloatingNavBarItem icon={hiremeIcon} text="Hire me" href="mailto:sara_kochovska@yahoo.com" />
    </div>
  );
}
