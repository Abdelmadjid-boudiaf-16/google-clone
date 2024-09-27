import Link from "next/link";

import Parser from "html-react-parser";

const SearchResultItem = ({ item }: { item: any }) => {

  return (
    <div className="flex flex-col gap-y-3 ">
      <Link href={item.formattedUrl} className="group flex flex-col">
        <h3>{item.formattedUrl.trim().slice(0, 50) + '...'}</h3>
        <h1 className="text-primary group-hover:underline">{item.title}</h1>
      </Link>
      <p>{Parser(item.htmlSnippet)}</p>
    </div>
  );
};

export default SearchResultItem;
