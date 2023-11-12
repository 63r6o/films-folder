"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { pleatures } from "./fonts";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  label,
  placeholder,
  buttonText,
}: {
  label: string;
  placeholder: string;
  buttonText: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();

        const target = e.target as HTMLFormElement;
        handleSearch(target.query.value);
      }}
      className="relative"
    >
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input
        name="query"
        className="rounded-full pl-7 pr-28 py-4 w-full bg-gray-800 outline-white active:outline-white shadow-md"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button
        type="submit"
        className={`${pleatures.className} absolute right-1 top-1/2  -translate-y-1/2 text-black rounded-full bg-white p-3 hover:cursor-pointer hover:bg-gray-200 active:scale-95`}
      >
        {buttonText}
      </button>
    </form>
  );
}
