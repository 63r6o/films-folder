import { fetchPopularMovies } from "../lib/data";
import Image from "next/image";
import { placeholderBlur } from "../lib/placeholder-blur";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PopularMarquee() {
  const result = await fetchPopularMovies();
  if (!result) notFound();
  const { results } = result;

  return (
    <section className="w-full max-w-6xl ">
      <h2 className="text-2xl text-gray-300 px-2 py-4">Popular movies</h2>
      <article className="relative">
        <Marquee speed={36} pauseOnHover>
          {results.map((movie) => (
            <div key={movie.id} className="h-48 w-full">
              <Link href={`/movies/${movie.id}`}>
                <Image
                  src={`https://www.themoviedb.org/t/p/w${500}${movie.poster_path
                    }`}
                  width={500}
                  height={750}
                  placeholder="blur"
                  blurDataURL={placeholderBlur}
                  className="h-full w-min border-2 mx-2 rounded-xl border-white"
                  style={{ objectFit: "scale-down" }}
                  alt={`The poster of ${movie.title}`}
                />
              </Link>
            </div>
          ))}
        </Marquee>
        <div className="absolute top-0 z-10 pointer-events-none w-full h-full bg-gradient-to-r from-[#040405] via-transparent to-[#040405]"></div>
      </article>
    </section>
  );
}
