import Marquee from "react-fast-marquee";
import { fetchNowPlaying } from "../lib/data";

export default async function MoviesMarquee() {
  const movies = await fetchNowPlaying();
  const playing = ["IN THE THEATERS NOW:"]
    .concat(movies.results.map((m) => m.title))
    .join(" ");
  console.log("Now playing:", movies);

  return (
    <div className="h-24 w-full flex flex-col justify-center">
      <Marquee className="border-white border-2 bg-gray-900">
        <strong>Now playing: </strong>
        {movies.results.map((m) => (
          <span className="px-16">{m.title}</span>
        ))}
      </Marquee>
    </div>
  );
}
