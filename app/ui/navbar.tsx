import Navlinks from "./navlinks";

export default function Navbar() {
  return (
    <nav className="w-full h-16 sm:h-12 flex flex-row px-14 items-center gap-6 bg-gray-900/50 text-2xl sm:text-xl shadow-sm">
      <Navlinks />
    </nav>
  );
}
