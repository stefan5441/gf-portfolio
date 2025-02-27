import { Project } from "./projects";
import { Link } from "react-router-dom";

export default function ProjectCard({ imageSrc, title, pillText, description, year }: Project) {
  const urlFriendlyTitle = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      to={`/${urlFriendlyTitle}`}
      className="w-92 h-100 mb-4 flex flex-col gap-3 transition-transform duration-300 
    hover:shadow-lg hover:scale-105 hover:bg-gray-100 hover:rounded-xl p-4"
    >
      <img src={imageSrc} className="rounded-xl"></img>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold">{title}</div>
        <div
          className="h-6 flex items-center justify-center border border-blue-500 text-blue-500
         text-xs font-medium rounded-full px-3"
        >
          {pillText}
        </div>
      </div>
      <div>{description}</div>
      <div className="font-bold">{year}</div>
    </Link>
  );
}
