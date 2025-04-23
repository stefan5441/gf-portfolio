import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  leftSideText: string;
  rightSideText: string | number;
  href?: string;
};

export default function LineThing({ leftSideText, rightSideText, href }: Props) {
  return (
    <div className="flex text-xl items-center justify-between">
      <div>{leftSideText}</div>
      <div className="flex-grow border-b border-black-400 mx-2"></div>
      {href ? (
        <a href={href} className="text-blue-600 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
          {rightSideText}
          <FiArrowUpRight />
        </a>
      ) : (
        <div>{rightSideText}</div>
      )}
    </div>
  );
}
