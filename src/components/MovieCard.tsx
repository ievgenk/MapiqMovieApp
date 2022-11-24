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
  Spacer,
} from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";

interface IProps {
  movie: IUpcomingMovie;
  genres: string[];
}

export default function MovieCard({ movie, genres }: IProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`Movie Poster for ${movie.title}`}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{movie.title}</Heading>

          <Box>
            {genres.map((genre) => (
              <Text as={"span"} key={genre} mr={"2"}>
                {genre}
              </Text>
            ))}
          </Box>

          <Text py="2">{movie.overview}</Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
