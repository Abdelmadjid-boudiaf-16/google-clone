import SearchHeader from "@/components/header/search-header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const SearchLayout = ({ children }: Props) => {
  return <div className="container mx-auto px-2 py-3">
    <SearchHeader />
    {children}
  </div>;
};

export default SearchLayout;
