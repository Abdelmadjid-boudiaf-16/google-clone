import SearchPagination from "@/components/search/pagination";
import NoSearchResult from "@/components/search/result-not-found";
import WebSearchResults from "@/components/search/web-search-results";
import dotenv from "dotenv";
dotenv.config();

const WebPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || 1
  const q = searchParams.searchTerm;
  const results = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CX_KEY}&q=${q}&start=${startIndex}`,
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
      <WebSearchResults results={results} />
      <SearchPagination />
    </>
  );
};

export default WebPage;
