import React from "react";
import {
  VStack,
  Flex,
  Heading,
  useColorMode,
  IconButton,
  Box,
  Spacer,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex width={"100%"} alignItems={"center"}>
      <Heading size={"md"} fontWeight={"semibold"} color="cyan.400">
        Ajay
      </Heading>
      <Spacer />
      <IconButton
        aria-label="Search database"
        isRound={true}
        icon={<FaLinkedinIn />}
        marginRight={4}
      />
      <IconButton
        aria-label="Search database"
        isRound={true}
        icon={<FaGithub />}
        marginRight={4}
      />
      <IconButton
        aria-label="Search database"
        isRound={true}
        icon={<FaTwitter />}
        marginRight={4}
      />
      <IconButton
        aria-label="Search database"
        isRound={true}
        onClick={toggleColorMode}
        marginRight={4}
        icon={isDark ? <FaSun /> : <FaMoon />}
      />
    </Flex>
  );
};

export { NavBar };
