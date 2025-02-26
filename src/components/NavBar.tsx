import { scrollToWork } from "./utils";

export default function NavBar() {
  return (
    <div className="mt-18 flex justify-between text-2xl">
      <div>Sara Logo</div>
      <div className="flex gap-18">
        <a href="#work" className="cursor-pointer" onClick={(e) => scrollToWork(e)}>
          Work
        </a>
        <div>Resume</div>
        <div>Hire me</div>
      </div>
    </div>
  );
}
