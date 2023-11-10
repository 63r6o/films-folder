import { fetchPopularMovies } from "../lib/data";
import Image from "next/image";
import MovieCard from "./movie-card";
import { placeholderBlur } from "../lib/placeholder-blur";
import Marquee from "react-fast-marquee";

export default async function TestFetch() {
  const { results } = await fetchPopularMovies();

  return (
    <div className="relative h-full">
      <Marquee speed={36}>
        {results.map((m) => (
          <div className="h-48 w-full">
            <Image
              key={m.id}
              src={`https://www.themoviedb.org/t/p/w${500}${m.poster_path}`}
              width={500}
              height={750}
              placeholder="blur"
              blurDataURL={placeholderBlur}
              className="h-full w-min border-2 mx-2 rounded-xl border-white"
              style={{ objectFit: "scale-down" }}
              alt={`The poster of ${m.title}`}
            />
          </div>
        ))}
      </Marquee>
      <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-r from-gray-950 via-transparent to-gray-950"></div>
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
