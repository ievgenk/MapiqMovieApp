import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUpcomingMovies } from "./api/api";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function App() {
  // const [params] = useSearchParams();
  // const numberOfUpcomingMovies = params.get("upcomingMovies") || 1;
  // const navigate = useNavigate();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["upcomingMovies"],
      queryFn: fetchUpcomingMovies,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const loading = isLoading || isFetchingNextPage;

  console.log(data);
  return (
    <>
      <h1>Hello</h1>
      {loading ? <h1>Loading </h1> : null}
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || loading}
      >
        Load More
      </Button>
    </>
  );
}

export default App;
