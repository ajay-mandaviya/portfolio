import React from "react";
import {
  Flex,
  Heading,
  useColorMode,
  IconButton,
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
        aria-label="linkdin"
        isRound={true}
        icon={<FaLinkedinIn />}
        marginRight={4}
      />
      <IconButton
        aria-label="github"
        isRound={true}
        icon={<FaGithub />}
        marginRight={4}
      />
      <IconButton
        aria-label="twitter"
        isRound={true}
        icon={<FaTwitter />}
        marginRight={4}
      />
      <IconButton
        aria-label="theme"
        isRound={true}
        onClick={toggleColorMode}
        marginRight={4}
        icon={isDark ? <FaSun /> : <FaMoon />}
      />
    </Flex>
  );
};

export { NavBar };