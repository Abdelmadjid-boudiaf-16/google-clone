import ImageSearchResultItem from "./image-search-result-item";

type Item = {
  displayLink: string;
  image: {
    contextLink: string;
  };
  link: string;
  title: string;
};
type Results = {
  results: {
    items: [];
  };
};
const ImageSearchResults = ({ results }: Results) => {
  return (
    <section className="flex w-full flex-wrap justify-center gap-3">
      {results?.items?.map((item: Item, index: number) => (
        <ImageSearchResultItem
          key={index}
          displayLink={item.displayLink}
          href={item.image.contextLink}
          link={item.link}
          title={item.title}
        />
      ))}
    </section>
  );
};

export default ImageSearchResults;
