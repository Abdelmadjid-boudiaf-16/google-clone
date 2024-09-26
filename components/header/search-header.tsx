import React from "react";
import GoogleLogo from "../google-logo";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleApps from "../google-apps";
import SearchBox from "../search/search-box";
import SearchHeaderOptions from "./search-header-options";

const SearchHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center justify-start gap-2">
          <GoogleLogo className="text-xl" />
          <SearchBox />
        </div>
        <div className="flex items-center justify-end gap-2">
          <GoogleApps />
          <Button asChild size={"sm"}>
            <Link href="">Sign in</Link>
          </Button>
        </div>
      </div>
      <div className="w-full1 border border-primary/15" />
      <SearchHeaderOptions />
    </div>
  );
};

export default SearchHeader;
