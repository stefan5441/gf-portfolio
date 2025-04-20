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

  const { title, showTitle, year, myRole, url, shortUrl, logo, fullPageVideo, description, done, needs, mobileImage } =
    project;

  return (
    <div className="mt-24 mb-28 flex flex-col gap-16">
      {/* Company title */}
      <div className="flex items-end gap-6">
        <img src={logo} className="h-20 w-auto" />
        {showTitle && <div className="text-5xl">{title}</div>}
      </div>

      {/* The thing with lines */}
      <div className="flex flex-col gap-6">
        <LineThing leftSideText="Year" rightSideText={year} />
        <LineThing leftSideText="My role" rightSideText={myRole} />
        <LineThing leftSideText="See live" rightSideText={shortUrl} href={url} />
      </div>

      {/* Description */}
      <div>
        {description.map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-xl text-justify">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Full page gif */}
      <div className="flex flex-col">
        <img src={fullPageVideo} className="w-full h-auto" />
        <div className="self-end mt-2">A full-page walkthrough showcasing website navigation and features</div>
      </div>

      {/* Needs */}
      <div className="flex flex-col gap-4">
        <div className="text-4xl">Needs</div>
        <ul className="list-disc list-inside space-y-2 text-xl">
          {needs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Mobile  */}
      <div>
        <img src={mobileImage} className="m-auto w-auto h-150" />
      </div>

      {/* What's been done */}
      <div className="flex flex-col gap-4">
        <div className="text-4xl">What's been done</div>
        <ul className="list-decimal list-inside space-y-2 text-xl">
          {done.map((item, idx) => {
            const [left, right] = item.split("–");
            return (
              <li key={idx}>
                <span>{left.trim()}</span> – {right.trim()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
