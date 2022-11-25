import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchMovieGenres, fetchUpcomingMovies } from "../api/api";
import { Container, Box, useDisclosure, useToast } from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";
import NavBar from "./Navbar";
import MainMessageSection from "./MainMessageSection";
import MovieList from "./MovieList";
import MoviePopup from "./MovieModal";
import Footer from "./Footer";
import { useState } from "react";
import MovieModal from "./MovieModal";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [openMovie, setOpenMovie] = useState<IUpcomingMovie | null>(null);

  const {
    isError: upcomingMoviesError,
    data: upcomingMovies,
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
  const fetchedUpcomingMovies = upcomingMovies?.pages
    .map((page) => page.response)
    .flat() as IUpcomingMovie[];

  function handleOpenMovieDetails(movieId: number) {
    const movieToOpen =
      fetchedUpcomingMovies.find((movie) => movie.id === movieId) || null;
    setOpenMovie(movieToOpen);
    onOpen();
  }

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
          upcomingMovieList={fetchedUpcomingMovies}
          isLoading={loading}
          onFetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          movieGenres={movieGenres}
          onOpen={handleOpenMovieDetails}
        />
        <MovieModal
          movieGenres={movieGenres}
          isOpen={isOpen}
          onClose={onClose}
          movie={openMovie}
        />
      </Container>
      <Footer />
      {errorPresent
        ? toast({ title: "Data Fetching Error", status: "error" })
        : null}
    </Box>
  );
}
