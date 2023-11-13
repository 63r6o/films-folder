import MovieCardSkeleton from "./movie-card-skeleton";

export default function MoviesGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-full max-w-6xl">
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
    </div>
  );
}
