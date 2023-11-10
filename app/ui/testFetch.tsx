import { fetchPopularMovies } from "../lib/data";
import MovieCard from "./movie-card";

export default async function TestFetch() {
  const { results } = await fetchPopularMovies();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full flex-wrap">
      {results.map((m) => (
        <MovieCard key={m.id} movie={m} imageWidth={780} />
      ))}
    </div>
  );
}

// <div
//   key={m.id}
//   className="bg-gray-800 rounded-2xl w-[300px] flex flex-col items-center"
// >
// <div
//   className="bg-cover bg-center w-[300px] h-[200px] rounded-xl flex flex-col justify-end hover:scale-125 shadow-lg hover:cursor-pointer hover:z-10 transition ease-in-out"
//   style={{
//     backgroundImage: `url('https://www.themoviedb.org/t/p/w780/${m.backdrop_path}')`,
//   }}
// ></div>
// </div>
