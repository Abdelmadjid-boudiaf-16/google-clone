import React from "react";
import GoogleLogo from "../google-logo";
import SearchForm from "../search/search-form";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleApps from "../google-apps";

const SearchHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-2">
        
          <GoogleLogo className="text-xl" />
      
        <SearchForm />
      </div>
      <div className="flex items-center justify-end gap-2">
        <GoogleApps />
        <Button asChild size={'sm'}>
          <Link href="">Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default SearchHeader;
