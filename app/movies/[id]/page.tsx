import { fetchMovieDetails } from "@/app/lib/data";
import { placeholderBlur } from "@/app/lib/placeholder-blur";
import GenreTag from "@/app/ui/genre-tag";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
    const movie = await fetchMovieDetails(params.id);

    const releaseDate = new Date(movie.release_date);

    const runtime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;

    const posterUrl = `https://www.themoviedb.org/t/p/w${500}${movie.poster_path
        }`;
    const backdropUrl = `https://www.themoviedb.org/t/p/w${1280}${movie.backdrop_path
        }`;

    return (
        <main className="flex min-h-screen flex-col items-center px-24 pb-24 pt-12 gap-16">
            <div className="relative w-full max-w-4xl h-96">
                <Image
                    src={backdropUrl}
                    fill
                    placeholder="blur"
                    blurDataURL={placeholderBlur}
                    style={{ objectFit: "cover" }}
                    alt={`The poster of ${movie.title}`}
                />
                <div className="relative flex flex-row h-64 lg:h-full">
                    <Image
                        src={posterUrl}
                        width={500}
                        height={750}
                        placeholder="blur"
                        blurDataURL={placeholderBlur}
                        className="z-10 shadow-md -translate-x-6 translate-y-1/4 lg:translate-y-6 border-white border-4 rounded-xl h-full  w-min"
                        style={{ objectFit: "scale-down" }}
                        alt={`The poster of ${movie.title}`}
                    />
                </div>
            </div>

            <div className="w-full max-w-4xl">
                <div className="max-w-2xl">
                    <h2 className="text-2xl">{movie.title}</h2>

                    <div className="flex gap-2 text-sm">
                        <span>{releaseDate.getUTCFullYear()}</span>
                        <span>|</span>
                        <span>{runtime}</span>
                    </div>

                    <p className="py-4">{movie.overview}</p>

                    <div className="flex flex-wrap gap-2 text-sm">
                        {movie.genres.map((genre) => (
                            <GenreTag key={genre.id} genreId={genre.id} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

// <Image
//     src={posterUrl}
//     width={342}
//     height={513}
//     alt={`The poster of ${movie.title}`}
// />

// <div className="w-65">
//     <Image
//         src={posterUrl}
//         width={780}
//         height={1200}
//         alt={`The poster of ${movie.title}`}
//     />
// </div>
// <div className="w-96">
//     <Image
//         src={backdropUrl}
//         width={1280}
//         height={600}
//         alt={`An image from ${movie.title}`}
//     />
// </div>
