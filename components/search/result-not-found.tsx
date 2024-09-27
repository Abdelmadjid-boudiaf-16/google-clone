const NoSearchResult = ({ query }: { query: string }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-lg">
        Your search - <span className="font-bold">{query} </span>- did not match
        any documents.
      </h1>
      <ul className="flex flex-col gap-y-2">
        Suggestions:
        <div className="ml-4">
          <li> - Make sure that all words are spelled correctly.</li>
          <li> - Try different keywords.</li>
          <li> - Try more general keywords.</li>
          <li> - Try fewer keywords.</li>
        </div>
      </ul>
    </div>
  );
};

export default NoSearchResult;
