"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

const SearchPagination = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
    const startIndex = +(searchParams.get("start") || 1);

  return (
    <Pagination className="mt-5">
      <PaginationContent>
        {startIndex > 10 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationLink
              href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
            >
              {Number(startIndex.toString().split("")[0])}
            </PaginationLink>
          </>
        )}
        <PaginationItem>
          <PaginationLink
            href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex}`}
            className="font-bold text-primary"
          >
            {Number(startIndex.toString().split("")) === 1
              ? 1
              : Number(startIndex.toString().split("")[0]) + 1}
          </PaginationLink>
        </PaginationItem>

        {startIndex < 90 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
              >
                {Number(startIndex.toString().split("")) === 1
                  ? Number(startIndex.toString().split("")[0]) + 1
                  : Number(startIndex.toString().split("")[0]) + 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default SearchPagination;
