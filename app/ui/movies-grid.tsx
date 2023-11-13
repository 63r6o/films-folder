import { fetchFilteredMovies } from "../lib/data";
import MovieCard from "./movie-card";
import { pleaturesOutline } from "./fonts";
import { notFound } from "next/navigation";
import Pagination from "./pagination";

export default async function MoviesGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const result = await fetchFilteredMovies(query, currentPage);
  if (!result) notFound();
  const { page, total_pages, results } = result;

  if (!results.length)
    return (
      <h2
        className={`${pleaturesOutline.className} text-red-400 text-4xl md:text-7xl`}
      >
        No results
      </h2>
    );

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl pb-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} imageWidth={780} />
        ))}
      </div>
      <Pagination page={page} total_pages={total_pages} />
    </div>
  );
}
