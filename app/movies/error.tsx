"use client";

import { useEffect } from "react";
import { pleatures, pleaturesOutline } from "../ui/fonts";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col p-24 gap-6 h-screen justify-start items-center">
      <h2 className={`${pleaturesOutline.className} text-4xl text-red-400`}>
        Something went wrong :(
      </h2>
      <p>{error.message}</p>
      <div className="flex flex-row gap-4">
        <button
          className={`${pleatures.className} text-black rounded-full bg-white p-3 hover:cursor-pointer hover:bg-gray-200 active:scale-95`}
          onClick={() => reset()}
        >
          Try again
        </button>
        <a
          className={`${pleatures.className} text-black rounded-full bg-violet-400 p-3 hover:cursor-pointer hover:bg-violet-500 active:scale-95`}
          href="/"
        >
          Go back
        </a>
      </div>
    </main>
  );
}
