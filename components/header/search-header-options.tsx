"use client";

import { Button } from "../ui/button";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchHeaderOptions = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const path = usePathname();

  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <Button
        asChild
        variant={"link"}
        onClick={() => {
          router.push(`/search/web?searchTerm=${searchTerm}`);
        }}
      >
        <span
          className={`flex cursor-pointer items-center gap-x-1 ${path.startsWith("/search/web") ? "font-bold underline" : ""}`}
        >
          <BiSearch /> All
        </span>
      </Button>
      <Button
        asChild
        variant={"link"}
        onClick={() => {
          router.push(`/search/image?searchTerm=${searchTerm}`);
        }}
      >
        <span
          className={`flex cursor-pointer items-center gap-x-1 ${path.startsWith("/search/image") ? "font-bold underline" : ""}`}
        >
          <AiOutlineCamera /> images
        </span>
      </Button>
    </div>
  );
};

export default SearchHeaderOptions;
