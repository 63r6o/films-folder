import GithubLogo from "./icons/github-logo";
import TmdbLogo from "./icons/tmdb-logo";

export default function Footer() {
  return (
    <footer className="border-t-2 border-dotted border-gray-900 px-14 py-8 flex flex-row items-center justify-end gap-4 flex-wrap">
      <div className="flex flex-row justify-center items-center gap-4">
        <p className="text-xs text-gray-600">made possible by the TMDB api</p>
        <a href="https://www.themoviedb.org/" target="_blank">
          <TmdbLogo className="w-14 h-14 opacity-50 hover:opacity-100 hover:cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <p className="text-xs text-gray-600">check the source code on github</p>
        <a href="" target="_blank">
          <GithubLogo className="w-10 h-10 opacity-50 hover:opacity-100 hover:cursor-pointer" />
        </a>
      </div>
    </footer>
  );
}
