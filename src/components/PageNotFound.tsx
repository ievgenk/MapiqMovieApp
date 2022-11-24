import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Box bgColor={"#263144"} w={"100vw"} h={"100vh"} overflow={"auto"}>
      <Center mt={"64"}>
        <Heading color={"#04aa6a"}>Oooooops page not found... 404 🙈</Heading>
        <Link to="/">
          <Button ml={"7"} colorScheme={"yellow"}>
            Go Home
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
