import Link from "next/link";

import Parser from "html-react-parser";
type Props = {
  title: string;
  link: string;
  description: string 
}

const SearchResultItem = ({ title, link, description }: Props) => {

  return (
    <div className="flex flex-col gap-y-3">
      <Link href={link} className="group flex flex-col">
        <h3>{link.slice(0, 50) + "..."}</h3>
        <h1 className="text-primary group-hover:underline">{title}</h1>
      </Link>
      <p>{Parser(description)}</p>
    </div>
  );
};

export default SearchResultItem;
