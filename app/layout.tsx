import "./globals.css";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import Header from "./ui/header";
import type { Metadata } from "next";
import { workSans } from "./ui/fonts";

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
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
