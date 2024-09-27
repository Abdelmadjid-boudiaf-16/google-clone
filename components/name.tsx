"use client";
import { getSearchResult } from "@/actions/serach";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import React from "react";

const Name = () => {
  const q = useSearchParams().get("searchTerm");
  console.log(q);
  const { data, error, isPending } = useQuery({
    queryKey: ["results"],
    queryFn: () => getSearchResult(q),
  });
  return (
    <div>
      {data?.map((item: any, index: number) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};

export default Name;
