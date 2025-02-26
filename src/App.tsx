import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import ProjectCard from "./components/ProjectCard";

import sundayProjectImage from "./assets/sunday.png";
import linkedinIcon from "./assets/linkedinIcon.svg";
import mailIcon from "./assets/mailIcon.svg";

export default function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        <Heading />
        <div className="mt-28 flex flex-wrap justify-between">
          <ProjectCard
            imageSrc={sundayProjectImage}
            title="Sunday"
            pillText="Pill button"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer
        tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis."
            footer="2025"
          />
          <ProjectCard
            imageSrc={sundayProjectImage}
            title="Sunday"
            pillText="Pill button"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer
        tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis."
            footer="2025"
          />
          <ProjectCard
            imageSrc={sundayProjectImage}
            title="Sunday"
            pillText="Pill button"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer
        tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis."
            footer="2025"
          />
        </div>
      </div>
      <div className="bg-black h-28 flex items-center mt-16">
        <div className="container mx-auto text-white flex justify-between items-center">
          <div>© 2025 · Made without 🥛 becasue I'm allergic</div>
          <div className="flex gap-4">
            <div>
              <img src={linkedinIcon} className="invert" />
            </div>
            <div>
              <img src={mailIcon} className="invert" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
