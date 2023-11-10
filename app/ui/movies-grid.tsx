import { fetchFilteredMovies } from "../lib/data";
import MovieCard from "./movie-card";
import { pleaturesOutline } from "./fonts";

export default async function MoviesGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { results } = await fetchFilteredMovies(query, currentPage);

  if (!results.length)
    return (
      <h2
        className={`${pleaturesOutline.className} text-red-400 text-4xl md:text-7xl`}
      >
        No results
      </h2>
    );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} imageWidth={780} />
      ))}
    </div>
  );
}
