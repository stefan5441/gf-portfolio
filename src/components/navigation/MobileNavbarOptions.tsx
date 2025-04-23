import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavbarOptions({ isMenuOpen, setIsMenuOpen }: Props) {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-between items-center">
      <button className="lg:hidden block text-3xl" onClick={toggleMenu} aria-label="Toggle menu">
        <AiOutlineMenu />
      </button>
    </div>
  );
}
