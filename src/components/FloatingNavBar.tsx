import FloatingNavBarItem from "./FloatingNavBarItem";
import { scrollToWork } from "./utils";

export default function FloatingNavBar() {
  return (
    <div className="fixed ml-24 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 text-center">
      <FloatingNavBarItem text="Work" href="#work" onClick={(e) => scrollToWork(e)} />
      <FloatingNavBarItem text="Resume" href="/" />
      <FloatingNavBarItem text="Hire me" href="mailto:sara_kochovska@yahoo.com" />
    </div>
  );
}
