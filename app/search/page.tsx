import { Suspense } from "react";
import Search from "../ui/search";
import MoviesGrid from "../ui/movies-grid";
import MoviesGridSkeleton from "../ui/skeletons/movies-grid-skeleton";
import PopularMarquee from "../ui/popular-marquee";

export default function Home({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="flex min-h-screen flex-col items-center px-14 lg:px-24 pb-24 pt-14 gap-16">
      <div className="sticky top-2 w-full max-w-4xl z-20 shadow-sm">
        <Search
          label="Search a movie"
          buttonText="search"
          placeholder="find a movie"
        />
      </div>
      {!query.length ? (
        <PopularMarquee />
      ) : (
        <Suspense fallback={<MoviesGridSkeleton />}>
          <MoviesGrid query={query} currentPage={currentPage} />
        </Suspense>
      )}
    </main>
  );
}
