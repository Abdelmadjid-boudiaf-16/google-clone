import dotenv from "dotenv";
dotenv.config();

const WebPage = async ({ searchParams }) => {
  const q = searchParams.searchTerm;

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CX_KEY}&q=${q}`,
  );
  const data = await res.json();
  const results = data.items;
  console.log(results);

  return (
    <div>
      {results?.map((item, index) => <div key={index}>{item.title}</div>)}
    </div>
  );
};

export default WebPage;
