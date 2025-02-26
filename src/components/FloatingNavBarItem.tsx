type Props = {
  text: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export default function FloatingNavBarItem({ text, href, onClick }: Props) {
  return (
    <a
      className="relative flex justify-between gap-5 items-center group hover:bg-white hover:shadow-lg 
    transition-all duration-300 py-2 px-4 rounded-lg"
      href={href}
      onClick={onClick}
    >
      <div className="w-8 h-8 bg-black rounded-xl" />
      <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{text}</div>
    </a>
  );
}
