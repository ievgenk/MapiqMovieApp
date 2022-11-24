import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchMovieGenres, fetchUpcomingMovies } from "../api/api";
import { Button, Container, Box, useDisclosure } from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";
import { Link } from "react-router-dom";
import MovieCard from "./MoviePopup";
import NavBar from "./Navbar";
import MainMessageSection from "./MainMessageSection";
import MovieList from "./MovieList";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["upcomingMovies"],
      queryFn: fetchUpcomingMovies,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      refetchOnWindowFocus: false,
    });

  const { data: movieGenres, isLoading: movieGenresLoading } = useQuery({
    queryKey: ["movieGenres"],
    queryFn: fetchMovieGenres,
    refetchOnWindowFocus: false,
  });

  const loading =
    status === "loading" || isFetchingNextPage || movieGenresLoading;
  const upcomingMovies = data?.pages
    .map((page) => page.response)
    .flat() as IUpcomingMovie[];

  console.log(movieGenres);
  return (
    <Box bgColor={"#263144"} w={"100vw"} h={"100vh"} overflow={"auto"}>
      <NavBar />
      <Container
        maxW={"5xl"}
        display={"flex"}
        flexDirection={"column"}
        gap={"48px"}
      >
        <MainMessageSection />
        <MovieList
          upcomingMovieList={upcomingMovies}
          isLoading={loading}
          onFetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          movieGenres={movieGenres}
        />
        {/* <MovieCard isOpen={isOpen} onClose={onClose} /> */}
      </Container>
    </Box>
  );
}
