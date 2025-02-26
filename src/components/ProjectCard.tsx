type Props = {
  imageSrc: string;
  title: string;
  pillText: string;
  description: string;
  footer: string;
};

export default function ProjectCard({ imageSrc, title, pillText, description, footer }: Props) {
  return (
    <div className="w-100 h-100 flex flex-col gap-3">
      <img src={imageSrc} className="rounded-xl"></img>
      <div className="flex gap-2">
        <div className="text-2xl font-bold">{title}</div>
        <div className="border-2 border-blue-500 text-blue-500 rounded-full py-0.5 px-4">{pillText}</div>
      </div>
      <div>{description}</div>
      <div className="font-bold">{footer}</div>
    </div>
  );
}
