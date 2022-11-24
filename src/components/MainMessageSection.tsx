import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export default function MainMessageSection() {
  return (
    <>
      <Flex
        mt={"28"}
        border={"4px"}
        p={"24"}
        borderColor={"#20c997"}
        rounded={"lg"}
        shadow={"dark-lg"}
      >
        <Center>
          <Heading
            textAlign={"center"}
            color={"#04aa6a"}
            fontSize={"5xl"}
            textTransform={"capitalize"}
          >
            Here you can find all of your favourite upcoming movies !
          </Heading>
        </Center>
      </Flex>
    </>
  );
}
