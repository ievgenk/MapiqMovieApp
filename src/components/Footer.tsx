import { Box, Heading } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box
        mt={"48px"}
        p={4}
        bgColor={"#263144"}
        borderTop={"2px"}
        borderTopColor={"#20c997"}
        position={"static"}
      >
        <Heading textAlign={"center"} fontSize={"2xl"} textColor={"#04aa6a"}>
          Made by Ievgen Kasian with lots of 🍵
        </Heading>
      </Box>
    </>
  );
}
