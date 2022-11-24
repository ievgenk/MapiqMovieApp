import { Card, Image, Stack, CardBody, Text, Heading } from "@chakra-ui/react";
import { IUpcomingMovie } from "../interfaces/movies";

interface IProps {
  movie: IUpcomingMovie;
}

export default function MovieCard({ movie }: IProps) {
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
          <Text py="2">{movie.overview}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
