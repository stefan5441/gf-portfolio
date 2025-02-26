import profilePicture from "../assets/sara-pfp-icon.png";

export default function Heading() {
  return (
    <div className="mt-28 flex justify-between gap-32">
      <img src={profilePicture} className="w-80 h-80" />
      <div className="w-4xl font-instrument indent-16 text-justify text-3xl my-auto">
        I’m Sara, a UI/UX and Web Designer based in Skopje, Macedonia. Currently working at XSoft, where I design in
        Figma and bring ideas to life using our custom website-building platform.
      </div>
    </div>
  );
}
