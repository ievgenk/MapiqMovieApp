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
import { IUpcomingMovie } from "../interfaces/movies";
import MovieCard from "./MovieCard";

interface IProps {
  upcomingMovieList: IUpcomingMovie[];
  isLoading: boolean;
  onFetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

export default function MovieList({
  upcomingMovieList,
  isLoading,
  onFetchNextPage,
  hasNextPage,
}: IProps) {
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
        <List>
          {upcomingMovieList.map((movie) => {
            return (
              <ListItem key={movie.id}>
                <MovieCard movie={movie} />
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
