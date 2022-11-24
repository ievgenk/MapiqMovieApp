import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUpcomingMovies } from "../api/api";
import { Button, useDisclosure } from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import NavBar from "./Navbar";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <NavBar />
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
                <Link to={`movie/${movie.id}`}>
                  {movie.title} - {movie.release_date}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      )}
      {/* <MovieCard isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
}
