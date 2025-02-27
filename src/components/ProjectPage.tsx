import { useParams } from "react-router-dom";
import { projects } from "./projects";
import LineThing from "./LineThing";

export default function ProjectPage() {
  const { projectTitle } = useParams();

  const project = projects.find((p) => {
    const urlFriendlyTitle = p.title.toLowerCase().replace(/\s+/g, "-");
    return urlFriendlyTitle === projectTitle;
  });

  if (!project) {
    return <div className="container mx-auto max-w-3xl py-10">Project not found</div>;
  }

  const { title, year } = project;

  return (
    <div className="mt-28 mb-28 flex flex-col gap-16">
      {/* Company title */}
      <div className="flex items-end gap-6">
        <div className="h-32 w-32 bg-black"></div>
        <div className="text-8xl">{title}</div>
      </div>

      {/* The thing with lines */}
      <div className="flex flex-col gap-6">
        <LineThing leftSideText="Year" rightSideText={year} />
        <LineThing leftSideText="My role" rightSideText={year} />
        <LineThing leftSideText="Team" rightSideText={year} />
        <LineThing leftSideText="See live" rightSideText={year} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-4xl">What's been done</div>
        <div>
          Created a foundational design system, designed an app for iOS and Android, created a few illustrations,
          designed the website and various marketing materials.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-4xl">Needs</div>
        <div>
          Sunday is a startup that I joined as designer at an early stage and designed everything from the ground up.
          The idea of the product is to digitilize word of mouth and bring recommendations of professionals in different
          fields that you'd ask for physically to an app.
        </div>
      </div>

      <div className="flex flex-col">
        <div className="bg-black w-full h-92"></div>
        <div className="self-end">Some sentence to go bottom right of the image</div>
      </div>

      <div>
        Sunday is a startup that I joined as a designer at an early stage, where I had the opportunity to build
        everything from the ground up. The core idea behind the product is to digitize word-of-mouth recommendations,
        making it easier for people to find trusted professionals in various fields. Instead of relying on in-person
        conversations or scattered online reviews, the app centralizes personal recommendations, allowing users to
        access reliable suggestions from their network. From branding to user experience, I designed the entire platform
        to ensure a seamless and intuitive experience that encourages engagement and trust.
      </div>
    </div>
  );
}
