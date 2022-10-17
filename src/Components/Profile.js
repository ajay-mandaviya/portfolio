import {
  useColorMode,
  useMediaQuery,
  Box,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [smallScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Flex
        direction={smallScreen ? "row" : "column"}
        alignSelf="flex-start"
        spacing="200px"
      >
        <Box alignContent={"flex-start"}>
          <Text fontWeight={"semibold"} fontSize="3xl">
            Hi , I am
          </Text>
          <Text
            fontSize={"5xl"}
            fontWeight="bold"
            bgGradient={"linear(to-r , cyan.400, blue.500, purple.600)"}
            bgClip="text"
          >
            Ajay Mandaviya
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Hi there, welcome to my portfolio. I am a Fronted Engineer building
            web and mobile applications . I am proficient in HTML, CSS ,
            JavaScript and ReactJS and React-Native . I spend my time learning
            exploring new technologies.
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export { Profile };
