import Image from "next/image";
import { fetchMovieDetails, fetchNowPlaying } from "../lib/data";
import { placeholderBlur } from "../lib/placeholder-blur";
import GenreTag from "./genre-tag";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function RandomPlaying() {
  const nowPlaying = await fetchNowPlaying();
  if (!nowPlaying) notFound();

  const randomId =
    nowPlaying.results[Math.floor(Math.random() * nowPlaying.results.length)]
      .id;

  const random = await fetchMovieDetails(randomId);
  if (!random) notFound();

  const releaseDate = new Date(random.release_date);
  const runtime = `${Math.floor(random.runtime / 60)}h ${random.runtime % 60}m`;

  const posterUrl = `https://www.themoviedb.org/t/p/w${500}${random.poster_path
    }`;
  const backdropUrl = `https://www.themoviedb.org/t/p/w${1280}${random.backdrop_path
    }`;

  return (
    <section className="w-full max-w-6xl ">
      <h2 className="text-2xl text-gray-300 px-2 py-4">Now playing</h2>
      <article className="relative flex flex-wrap items-end h-96">
        <Image
          src={backdropUrl}
          fill
          priority
          placeholder="blur"
          blurDataURL={placeholderBlur}
          className="h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={`An image from ${random.title}`}
        />
        <div className="relative shadow-md h-2/3 scale-110 hover:scale-125 transition ease-in-out z-10 flex-shrink-0">
          <Link href={`/movies/${random.id}`}>
            <Image
              src={posterUrl}
              width={500}
              height={750}
              className="w-min h-full border-4 rounded-xl border-white"
              placeholder="blur"
              blurDataURL={placeholderBlur}
              alt={`The poster of ${random.title}`}
            />
          </Link>
        </div>
        <div className="px-8 py-4 bg-gray-950/50 backdrop-blur-md flex-1 min-w-fit">
          <h2 className="text-2xl">{random.title}</h2>
          <div className="flex gap-2 text-sm pb-4">
            <span>{releaseDate.getUTCFullYear()}</span>
            <span>|</span>
            <span>{runtime}</span>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {random.genres.map((genre) => (
              <GenreTag key={genre.id} genreId={genre.id} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
