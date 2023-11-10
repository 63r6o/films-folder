import { Suspense } from "react";
import TestFetch from "./ui/testFetch";
import MoviesGridSkeleton from "./ui/skeletons/movies-grid-skeleton";

// TODO: make a proper skeleton
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-14 lg:px-24 pb-24 pt-14 gap-16">
      <Suspense fallback={<MoviesGridSkeleton />}>
        <TestFetch />
      </Suspense>
    </main>
  );
}
