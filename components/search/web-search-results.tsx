import SearchResultItem from "./search-result-item";

const WebSearchResults = ({ results }: any) => {
  const { formattedSearchTime, formattedTotalResults } =
    results.searchInformation;
  return (
    <>
      <p className="text-sm font-normal mb-4">
        About {formattedTotalResults} in ({formattedSearchTime} seconds)
      </p>
      <section className="flex max-w-xl flex-col gap-y-6">
        {results?.items?.map((item, index) => (
          <SearchResultItem key={index} item={item} />
        ))}
      </section>
    </>
  );
};

export default WebSearchResults;
