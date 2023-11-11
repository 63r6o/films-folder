import { pleatures, pleaturesOutline } from "@/app/ui/fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col p-24 gap-6 h-screen justify-start items-center">
      <h2 className={`${pleaturesOutline.className} text-4xl text-red-400`}>
        Could not find the movie :(
      </h2>
      <a
        className={`${pleatures.className} text-black rounded-full bg-violet-400 p-3 hover:cursor-pointer hover:bg-violet-500 active:scale-95`}
        href="/"
      >
        Go back
      </a>
    </main>
  );
}
