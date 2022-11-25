import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  Heading,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";

interface IProps {
  movie: IUpcomingMovie;
  genres: string[];
  onOpen: (movieId: number) => void;
}

export default function MovieCard({ movie, genres, onOpen }: IProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      w={"lg"}
      backgroundColor={"whiteAlpha.800"}
      height={"xs"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`Movie Poster for ${movie.title}`}
      />

      <Stack flex={"1"}>
        <CardBody>
          <Heading size="md">{movie.title}</Heading>
          <Box py={"2"}>
            {genres.map((genre, index, arr) => (
              <Text fontSize={"lg"} as={"span"} key={genre} mr={"2"}>
                {genre} {index < arr.length - 1 ? "-" : null}
              </Text>
            ))}
          </Box>
          <Text fontSize={"lg"}>Release Date: {movie.release_date}</Text>
        </CardBody>
        <CardFooter display={"flex"} alignSelf={"flex-end"}>
          <Button
            variant="solid"
            bgColor={"#20c997"}
            _hover={{ bg: "#05a869" }}
            onClick={() => onOpen(movie.id)}
          >
            Learn More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
