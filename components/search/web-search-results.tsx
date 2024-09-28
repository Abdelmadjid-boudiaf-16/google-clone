import SearchResultItem from "./search-result-item";
type Item = {
  title: string;
  formattedUrl: string;
  htmlSnippet: string;
};
type Results = {
  results: {
    searchInformation: {
      formattedSearchTime: string;
      formattedTotalResults: string;
    };
    items: [];
  };
};
const WebSearchResults = ({ results }: Results) => {
  const { formattedSearchTime, formattedTotalResults } =
    results.searchInformation;
  return (
    <>
      <p className="mb-4 text-sm font-normal">
        About {formattedTotalResults} in ({formattedSearchTime} seconds)
      </p>
      <section className="flex max-w-xl flex-col gap-y-6">
        {results?.items?.map((item: Item, index) => (
          <SearchResultItem
            key={index}
            title={item.title}
            link={item.formattedUrl}
            description={item.htmlSnippet}
          />
        ))}
      </section>
    </>
  );
};

export default WebSearchResults;
