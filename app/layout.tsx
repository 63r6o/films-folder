import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "./ui/fonts";
import { pleatures } from "./ui/fonts";
import { pleaturesOutline } from "./ui/fonts";
import Link from "next/link";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
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