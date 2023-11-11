import { pleatures, pleaturesOutline } from "./ui/fonts";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col p-24 gap-6 h-screen justify-start items-center">
      <h2 className={`${pleaturesOutline.className} text-8xl text-red-400`}>
        404
      </h2>
      <p>Something went wrong :(</p>
      <Link
        className={`${pleatures.className} text-black rounded-full bg-violet-400 p-3 hover:cursor-pointer hover:bg-violet-500 active:scale-95`}
        href="/"
      >
        Go back
      </Link>
    </main>
  );
}
