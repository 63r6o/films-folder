import { Suspense } from "react";
import MoviesGridSkeleton from "./ui/skeletons/movies-grid-skeleton";
import RandomPlaying from "./ui/random-playing";
import PopularMarquee from "./ui/popular-marquee";

// TODO: make a proper skeleton
export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col px-14 lg:px-24 pb-24 pt-14 gap-16">
      <RandomPlaying />
      <Suspense fallback={<MoviesGridSkeleton />}>
        <PopularMarquee />
      </Suspense>
    </main>
  );
}
