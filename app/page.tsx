import { Suspense } from "react";
import RandomPlaying from "./ui/random-playing";
import PopularMarquee from "./ui/popular-marquee";
import PopularMarqueeSkeleton from "./ui/skeletons/popular-marquee-skeleton";
import RandomPlayingSkeleton from "./ui/skeletons/random-playing-skeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col px-14 lg:px-24 pb-24 pt-14 gap-16">
      <Suspense fallback={<RandomPlayingSkeleton />}>
        <RandomPlaying />
      </Suspense>
      <Suspense fallback={<PopularMarqueeSkeleton />}>
        <PopularMarquee />
      </Suspense>
    </main>
  );
}
