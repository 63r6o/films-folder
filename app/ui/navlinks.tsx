"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", href: "/" },
  {
    name: "search",
    href: "/search",
  },
];

export default function Navlinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "hover:cursor-pointer hover:-rotate-2 hover:underline hover:text-violet-400",
            {
              "-rotate-2 underline text-violet-400": pathname === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
