"use server";

import dotenv from "dotenv";
dotenv.config();

export const getSearchResult = async (q: string) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CX_KEY}&q=${q}`,
  );
  const data = await res.json();
  const results = data.items;
  console.log('query:', q);
  return results;
};
