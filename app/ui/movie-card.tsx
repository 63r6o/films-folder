import Image from "next/image";
import { Movie } from "../lib/types";
import Link from "next/link";
import GenreTag from "./genre-tag";
import { placeholderBlur } from "../lib/placeholder-blur";

export default function MovieCard({
  movie,
  imageWidth,
}: {
  movie: Movie;
  imageWidth: number;
}) {
  // TODO handle properly
  if (!movie.backdrop_path) return;

  const imageUrl = `https://www.themoviedb.org/t/p/w${imageWidth}${movie.backdrop_path}`;

  const imageHeight = Math.floor(imageWidth * 0.564);

  return (
    <Link
      href={`movies/${movie.id}`}
      className="group relative max-h-min hover:cursor-pointer hover:z-10 hover:scale-110 sm:hover:scale-125 shadow-lg transition ease-in-out"
    >
      <Image
        className="rounded-xl h-full group-hover:rounded-b-none"
        priority
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        placeholder="blur"
        blurDataURL={placeholderBlur}
        alt={`A picture from ${movie.title}`}
      />
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
