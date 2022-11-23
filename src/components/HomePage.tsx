import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUpcomingMovies } from "../api/api";
import { Button } from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["upcomingMovies"],
      queryFn: fetchUpcomingMovies,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      refetchOnWindowFocus: false,
    });

  const loading = status === "loading" || isFetchingNextPage;
  const upcomingMovies = data?.pages.map((page) => page.response).flat();

  console.log(upcomingMovies);
  return (
    <>
      <h1>Hello</h1>
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || loading}
      >
        Load More
      </Button>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {upcomingMovies?.map((movie: IUpcomingMovie) => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  {movie.title} - {movie.release_date}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
