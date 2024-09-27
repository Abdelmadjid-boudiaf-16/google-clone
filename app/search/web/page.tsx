import NoSearchResult from "@/components/search/result-not-found";
import dotenv from "dotenv";
dotenv.config();

const WebPage = async ({ searchParams }) => {
  const q = searchParams.searchTerm;
  const results = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CX_KEY}&q=${q}`,
  )
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    })
    .catch((error) => {
      throw new Error("Network response was not ok", error);
    });
  if (!results) return <NoSearchResult query={q} />;

  return (
    <div>
      {results?.map((item, index) => <div key={index}>{item.title}</div>)}
    </div>
  );
};

export default WebPage;
