import genreMap from "../lib/genres";

export default function GenreTag({ genreId }: { genreId: number }) {
  const genre = genreMap[genreId];

  return (
    <div className="rounded-full shadow-md bg-gray-700 py-1 px-2">
      {genre.name}
    </div>
  );
}
