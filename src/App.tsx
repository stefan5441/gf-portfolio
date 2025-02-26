import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

import sundayProjectImage from "./assets/sunday.png";
import FloatingNavBar from "./components/FloatingNavBar";

export default function App() {
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
      <div className="container mx-auto">
        <NavBar />
        <FloatingNavBar />
        <Heading />
        <div className="mt-28 flex flex-wrap justify-between">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
