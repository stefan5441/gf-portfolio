export default function FloatingNavBarItem() {
  return (
    <div
      className="relative flex justify-between gap-5 items-center group hover:bg-white hover:shadow-lg 
    transition-all duration-300 p-2 rounded-lg"
    >
      <div className="w-8 h-8 bg-black rounded-xl" />
      <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Work</div>
    </div>
  );
}
