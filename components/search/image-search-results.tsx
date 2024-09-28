import ImageSearchResultItem from "./image-search-result-item";

const ImageSearchResults = ({ results }: { results: any }) => {
  return (
    <section className="flex w-full flex-wrap gap-3 justify-center">
      {results?.items?.map((item, index) => (
        <ImageSearchResultItem key={index} item={item} />
      ))}
    </section>
  );
};

export default ImageSearchResults;
