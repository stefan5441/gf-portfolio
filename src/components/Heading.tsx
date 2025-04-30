import poloroidImg from "../assets/me/poloroid.png";

export default function Heading() {
  return (
    <div className="mt-4 lg:mt-4 flex flex-col lg:flex-row justify-between gap-4">
      <img src={poloroidImg} className="w-auto h-90 lg:h-140 mx-auto lg:mx-0" />
      <div className="font-instrument text-left text-2xl lg:text-4xl my-auto tracking-tight leading-tight mx-auto lg:mx-0">
        I’m Sara, a <span className="underline">UX/UI</span> and <span className="underline">Web Designer</span> based
        in Skopje, Macedonia. Currently working at XSoft, where I design in <span className="underline">Figma</span> and
        bring ideas to life using our custom website-building platform.
      </div>
    </div>
  );
}
