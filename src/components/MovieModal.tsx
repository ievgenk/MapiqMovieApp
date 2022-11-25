import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  Card,
  Text,
  Stack,
  CardBody,
  Heading,
  Box,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { IMovieGenre, IUpcomingMovie } from "../interfaces/movies";
import { establishMovieGenre } from "../utils/util";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  movie: IUpcomingMovie | null;
  movieGenres: IMovieGenre[];
}

export default function MovieModal({
  isOpen,
  onClose,
  movie,
  movieGenres,
}: IProps) {
  const movieGenreNames = movie
    ? establishMovieGenre(movieGenres, movie.genre_ids)
    : [];

  return (
    <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"#263144"}>
        <ModalHeader color={"#20c997"} fontSize={"2xl"}>
          Movie Details
        </ModalHeader>
        <ModalCloseButton color={"#20c997"} />
        <ModalBody>
          {movie ? (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="elevated"
              backgroundColor={"white"}
              height={"xs"}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`Movie Poster for ${movie.title}`}
              />

              <Stack flex={"1"}>
                <CardBody overflow={"scroll"}>
                  <Heading size="md">{movie.title}</Heading>
                  <Box py={"2"}>
                    {movieGenreNames.map((genre, index, arr) => (
                      <Text fontSize={"lg"} as={"span"} key={genre} mr={"2"}>
                        {genre} {index < arr.length - 1 ? "-" : null}
                      </Text>
                    ))}
                  </Box>
                  <Text fontSize={"lg"}>
                    Release Date: {movie.release_date}
                  </Text>
                  <Divider pt={"2"} pb={"2"} />
                  <Text fontSize={"lg"} pt={"2"}>
                    {movie.overview}
                  </Text>
                </CardBody>
                <CardFooter
                  display={"flex"}
                  alignSelf={"flex-end"}
                ></CardFooter>
              </Stack>
            </Card>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button
            size={"md"}
            variant="solid"
            bgColor={"#20c997"}
            _hover={{ bg: "#05a869" }}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
