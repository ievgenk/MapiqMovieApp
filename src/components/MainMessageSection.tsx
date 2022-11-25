import { Center, Flex, Heading } from "@chakra-ui/react";

export default function MainMessageSection() {
  return (
    <>
      <Center
        mt={"28"}
        border={"4px"}
        p={"24"}
        borderColor={"#20c997"}
        rounded={"lg"}
        shadow={"dark-lg"}
      >
        <Flex direction={"column"} justifyContent={"center"}>
          <Heading
            textAlign={"center"}
            color={"#04aa6a"}
            fontSize={"5xl"}
            textTransform={"capitalize"}
          >
            Welcome to Mapiq Movies.
          </Heading>
          <Heading
            textAlign={"center"}
            color={"#04aa6a"}
            fontSize={"5xl"}
            textTransform={"capitalize"}
          >
            Here you can find all of your favourite upcoming movies !
          </Heading>
        </Flex>
      </Center>
    </>
  );
}
