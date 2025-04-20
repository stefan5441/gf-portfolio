import { Link } from "react-router-dom";

type Props = {
  icon: string;
  text: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export default function FloatingNavBarItem({ icon, text, href, onClick }: Props) {
  const isExternal = href.startsWith("http");

  return isExternal ? (
    <a
      className="relative flex justify-between gap-5 items-center group hover:bg-white hover:shadow-lg 
        transition-all duration-300 py-2 px-4 rounded-lg"
      href={href}
      onClick={onClick}
      rel="noreferrer"
      target="_blank"
    >
      <img src={icon} alt="icon" className="w-auto h-8" />
      <div className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{text}</div>
    </a>
  ) : (
    <Link
      className="relative flex justify-between gap-5 items-center group hover:bg-white hover:shadow-lg 
        transition-all duration-300 py-2 px-4 rounded-lg"
      to={href}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="w-auto h-8" />
      <div className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{text}</div>
    </Link>
  );
}
