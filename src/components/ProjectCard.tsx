import { useState } from "react";
import { Project } from "./projects";
import { Link } from "react-router-dom";

export default function ProjectCard({ image, frontPageVideo, title, pillText, description, year }: Project) {
  const urlFriendlyTitle = title.toLowerCase().replace(/\s+/g, "-");

  const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoverBg, setHoverBg] = useState<string>(randomColor());

  return (
    <Link
      to={`/${urlFriendlyTitle}`}
      className="w-80 mb-4 p-2 flex flex-col gap-2 border-2 rounded-2xl"
      onMouseEnter={() => {
        setIsHovered(true);
        setHoverBg(randomColor());
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverBg : "transparent",
        borderColor: hoverBg,
      }}
    >
      <div>
        <img src={isHovered ? frontPageVideo : image} alt={title} className="rounded-xl" />
        <div className="flex items-center mt-2">
          <div className="px-2 text-xl font-bold">{title}</div>
          <div className="h-6 flex items-center justify-center bg-white/80 border border-blue-500 text-blue-500 text-xs font-medium rounded-full px-3">
            {pillText}
          </div>
        </div>
      </div>
      <div className="px-2 line-clamp-4">{description}</div>
      <div className="px-2 font-bold">{year}</div>
    </Link>
  );
}
