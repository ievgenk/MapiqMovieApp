import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchMovieGenres, fetchUpcomingMovies } from "../api/api";
import { Container, Box, useDisclosure, useToast } from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";
import NavBar from "./Navbar";
import MainMessageSection from "./MainMessageSection";
import MovieList from "./MovieList";
import MoviePopup from "./MoviePopup";
import Footer from "./Footer";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    isError: upcomingMoviesError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
  });

  const {
    isError: movieGenreError,
    data: movieGenres,
    isLoading: movieGenresLoading,
  } = useQuery({
    queryKey: ["movieGenres"],
    queryFn: fetchMovieGenres,
    refetchOnWindowFocus: false,
  });

  const errorPresent = upcomingMoviesError || movieGenreError;
  const loading =
    status === "loading" || isFetchingNextPage || movieGenresLoading;
  const upcomingMovies = data?.pages
    .map((page) => page.response)
    .flat() as IUpcomingMovie[];

  return (
    <Box bgColor={"#263144"} w={"100vw"} h={"100vh"} overflow={"auto"}>
      <NavBar />
      <Container
        maxW={"6xl"}
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
          onOpen={onOpen}
        />
        <MoviePopup isOpen={isOpen} onClose={onClose} />
      </Container>
      <Footer />
      {errorPresent
        ? toast({ title: "Data Fetching Error", status: "error" })
        : null}
    </Box>
  );
}
