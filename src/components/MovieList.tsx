import {
  Box,
  Text,
  Button,
  Flex,
  List,
  ListItem,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { IMovieGenre, IUpcomingMovie } from "../interfaces/movies";
import MovieCard from "./MovieCard";

interface IProps {
  upcomingMovieList: IUpcomingMovie[];
  isLoading: boolean;
  onFetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  movieGenres: IMovieGenre[];
}

export default function MovieList({
  upcomingMovieList,
  isLoading,
  onFetchNextPage,
  hasNextPage,
  movieGenres,
}: IProps) {
  function establishMovieGenre(
    movieGenres: IMovieGenre[],
    movieGenreIds: number[]
  ) {
    return movieGenres
      .filter((movieGenre) => movieGenreIds.includes(movieGenre.id))
      .map((movieGenre) => movieGenre.name);
  }

  return (
    <Flex direction={"column"} justifyContent={"center"} gap={"20px"}>
      {isLoading ? (
        <Stack>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      ) : (
        <List
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          rowGap={"28px"}
        >
          {upcomingMovieList.map((movie) => {
            return (
              <ListItem key={movie.id}>
                <MovieCard
                  movie={movie}
                  genres={
                    establishMovieGenre(movieGenres, movie.genre_ids) ||
                    "Unknow Genre"
                  }
                />
              </ListItem>
            );
          })}
        </List>
      )}

      <Button
        onClick={() => onFetchNextPage()}
        disabled={!hasNextPage || isLoading}
        maxW={"fit-content"}
        alignSelf={"flex-end"}
      >
        Load More
      </Button>
    </Flex>
  );
}
