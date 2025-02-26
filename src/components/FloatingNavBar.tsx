import FloatingNavBarItem from "./FloatingNavBarItem";

export default function FloatingNavBar() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8 text-center">
      <FloatingNavBarItem />
      <FloatingNavBarItem />
      <FloatingNavBarItem />
    </div>
  );
}
