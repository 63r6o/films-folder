import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "./ui/fonts";
import { pleatures } from "./ui/fonts";
import Link from "next/link";
import Footer from "./ui/footer";
import Navlinks from "./ui/navlinks";

// thanks for the SEO chatgpt
export const metadata: Metadata = {
  title: "Your films-Folder",
  description:
    "Explore a dynamic movie browsing experience with films-folder, a Next.js practice project featuring TypeScript, Tailwind CSS, and the TMDB API. Discover random, popular, and detailed movie information in this immersive cinematic showcase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased selection:bg-violet-700`}
      >
        <nav className="w-full h-16 sm:h-12 flex flex-row px-14 items-center gap-6 bg-gray-900/50 text-2xl sm:text-xl shadow-sm">
          <Navlinks />
        </nav>
        <header className="flex flex-col items-center px-14 pt-14 w-full">
          <Link href="/">
            <h1
              className={`${pleatures.className} text-6xl md:text-8xl hover:text-violet-400`}
            >
              films - Folder
            </h1>
          </Link>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
