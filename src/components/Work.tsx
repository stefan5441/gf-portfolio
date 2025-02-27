import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <>
      <div className="mt-28 text-2xl" id="work">
        Work
      </div>
      <div className="mt-5 flex flex-wrap justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
}
