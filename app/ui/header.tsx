import Link from "next/link";
import { pleatures } from "./fonts";

export default function Header() {
  return (
    <header className="flex flex-col items-center px-14 pt-14 w-full">
      <Link href="/">
        <h1
          className={`${pleatures.className} text-6xl md:text-8xl hover:text-violet-400`}
        >
          films - Folder
        </h1>
      </Link>
    </header>
  );
}
