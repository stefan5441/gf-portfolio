type Props = {
  leftSideText: string;
  rightSideText: string | number;
};

export default function LineThing({ leftSideText, rightSideText }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>{leftSideText}</div>
      <div className="flex-grow border-b border-black-400 mx-2"></div>
      <div>{rightSideText}</div>
    </div>
  );
}
