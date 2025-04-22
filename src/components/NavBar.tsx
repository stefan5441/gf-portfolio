import { useState } from "react";
import { Link } from "react-router-dom";
import faceImg from "../assets/me/face.png";
import letterLogo from "../assets/me/logo.png";
import NormalNavbarOptions from "./NormalNavbarOptions";
import MobileNavbarOptions from "./MobileNavbarOptions";
import MobileNavbarContextMenu from "./MobileNavbarContextMenu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mt-10 flex justify-between items-center text-2xl mx-2x lg:mx-0">
      <Link to="/" className="flex gap-4 items-center group">
        <img src={faceImg} className="h-16 w-auto lg:h-20 transition-transform duration-1000 group-hover:rotate-360" />
        <img src={letterLogo} className="h-12 w-auto lg:h-15" />
      </Link>
      <div className="block lg:hidden">
        <MobileNavbarOptions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <MobileNavbarContextMenu setIsMenuOpen={setIsMenuOpen} />}
      </div>
      <div className="hidden lg:block">
        <NormalNavbarOptions />
      </div>
    </div>
  );
}
