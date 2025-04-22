import { useEffect } from "react";
import { useScrollToProjects } from "./utils";
import { AiOutlineClose } from "react-icons/ai";

import resume from "../assets/resume.pdf";

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavbarContextMenu({ setIsMenuOpen }: Props) {
  const scrollToProjects = useScrollToProjects();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-12 bg-white/30 backdrop-blur-md shadow-md p-4">
      <button className="absolute top-14 right-6 text-3xl" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
        <AiOutlineClose />
      </button>

      <a
        href="#projects"
        className="text-2xl hover:underline hover:underline-offset-5"
        onClick={(e) => {
          scrollToProjects(e);
          setIsMenuOpen(false);
        }}
      >
        Projects
      </a>
      <a
        href={resume}
        className="text-2xl hover:underline hover:underline-offset-5"
        rel="noreferrer"
        target="_blank"
        onClick={() => setIsMenuOpen(false)}
      >
        Resume
      </a>
      <a
        href="mailto:sara_kochovska@yahoo.com"
        className="text-2xl hover:underline hover:underline-offset-5"
        onClick={() => setIsMenuOpen(false)}
      >
        Hire me
      </a>
    </div>
  );
}
