import ImageSearchResults from "@/components/search/image-search-results";
import SearchPagination from "@/components/search/pagination";
import NoSearchResult from "@/components/search/result-not-found";
import dotenv from "dotenv";
dotenv.config();

type SearchParams = {
  searchParams: {
    start: number;
    searchTerm: string;
  };
};
const ImageSearchPage = async ({ searchParams }: SearchParams) => {
  const startIndex = searchParams.start || 1;
  const q = searchParams.searchTerm;
  const results = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CX_KEY}&q=${q}&searchType=image&start=${startIndex}`,
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error("Network response was not ok", error);
    });
  if (!results) return <NoSearchResult query={q} />;

  return (
    <>
      <ImageSearchResults results={results} />
      <SearchPagination />
    </>
  );
};

export default ImageSearchPage;
