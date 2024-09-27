import { getSearchResult } from "@/actions/serach";
import Name from "@/components/name";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

const WebPage = async ({ searchParams }) => {
  const searchTerm = searchParams.searchTerm;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["results"],
    queryFn: () => getSearchResult(searchTerm),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Name />
      </HydrationBoundary>
    </div>
  );
};

export default WebPage;
