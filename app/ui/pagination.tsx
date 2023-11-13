"use client";

import Link from "next/link";
import { pleatures } from "./fonts";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function Pagination({
  page,
  total_pages,
}: {
  page: number;
  total_pages: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createUrl = (newPage: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", newPage.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex w-full justify-center items-center">
      <Link
        href={createUrl(page - 1)}
        className={clsx(
          `${pleatures.className} px-4 py-2 text-2xl hover:text-violet-400`,
          {
            invisible: page < 2,
          }
        )}
      >
        back
      </Link>
      <div className="text-gray-100">
        {page}/{total_pages}
      </div>
      <Link
        href={createUrl(page + 1)}
        className={clsx(
          `${pleatures.className} px-4 py-2 text-2xl hover:text-violet-400`,
          {
            invisible: page >= total_pages,
          }
        )}
      >
        next
      </Link>
    </div>
  );
}
