
import ImageSearchResults from "@/components/search/image-search-results";
import NoSearchResult from "@/components/search/result-not-found";
import dotenv from "dotenv";
dotenv.config();

const ImageSearchPage = async ({ searchParams }) => {
  const q = searchParams.searchTerm;
  const results = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CX_KEY}&q=${q}&searchType=image`,
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
    <div>
      <ImageSearchResults results={results} />
    </div>
  );
};

export default ImageSearchPage;
