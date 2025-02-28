import { scrollToWork } from "./utils";

export default function NavBar() {
  return (
    <div className="mt-18 flex justify-between text-2xl">
      <a href="/">Sara Logo</a>
      <div className="flex gap-12">
        <a href="#work" className="cursor-pointer" onClick={(e) => scrollToWork(e)}>
          Work
        </a>
        <div>Resume</div>
        <a href="mailto:sara_kochovska@yahoo.com" rel="noreferrer" target="_blank">
          Hire me
        </a>
      </div>
    </div>
  );
}
