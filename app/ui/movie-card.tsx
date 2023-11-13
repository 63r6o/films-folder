import { Movie } from "../lib/types";
import Link from "next/link";
import GenreTag from "./genre-tag";

export default function MovieCard({
  movie,
  imageWidth,
}: {
  movie: Movie;
  imageWidth: number;
}) {
  const imageUrl = `https://www.themoviedb.org/t/p/w${imageWidth}${movie.backdrop_path ? movie.backdrop_path : movie.poster_path
    }`;

  return (
    <Link
      href={`movies/${movie.id}`}
      className="group relative h-44 w-full hover:cursor-pointer hover:z-10 hover:scale-110 sm:hover:scale-125 shadow-lg transition ease-in-out"
    >
      {movie.poster_path || movie.backdrop_path ? (
        <div
          className="w-full h-full rounded-xl group-hover:rounded-b-none"
          style={{
            backgroundImage: `url(${imageUrl})`,
            objectFit: "fill",
            backgroundSize: "cover",
            objectPosition: "center",
          }}
        ></div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 text-xl bg-gray-900 rounded-xl group-hover:rounded-b-none">
          ¯\_(ツ)_/¯
          <div className="text-xs">{movie.title}</div>
        </div>
      )}
      <div className="hidden absolute top-full bg-gradient-radial to-gray-900 from-gray-700/60 backdrop-blur-md rounded-b-xl p-4 w-full group-hover:block">
        <h2 className="text-lg text-bold">{movie.title}</h2>
        <div className="flex flex-row flex-wrap text-xs gap-2 pt-4 text-white">
          {movie.genre_ids.map((id) => (
            <GenreTag key={id} genreId={id} />
          ))}
        </div>
      </div>
    </Link>
  );
}
