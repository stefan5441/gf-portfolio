import sundayProjectImage from "../assets/sunday.png";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const projects = [
    {
      imageSrc: sundayProjectImage,
      title: "Sunday",
      pillText: "Pill button",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis.",
      footer: "2025",
    },
    {
      imageSrc: sundayProjectImage,
      title: "Sunday",
      pillText: "Pill button",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis.",
      footer: "2025",
    },
    {
      imageSrc: sundayProjectImage,
      title: "Sunday",
      pillText: "Pill button",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis.",
      footer: "2025",
    },
  ];

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
