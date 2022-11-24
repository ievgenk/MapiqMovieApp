import { Box, Flex, Text } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <>
      <Box
        p={4}
        bgColor={"#263144"}
        borderBottom={"2px"}
        borderBottomColor={"#20c997"}
      >
        <Text fontSize={"2xl"} textColor={"#04aa6a"}>
          Mapiq Movies 🍿
        </Text>
      </Box>
    </>
  );
}
