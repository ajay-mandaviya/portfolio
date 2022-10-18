import React from "react";
import {
  Flex,
  Heading,
  useColorMode,
  IconButton,
  Spacer,
  Link,
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
  // https://github.com/ajay-mandaviya
  return (
    <Flex width={"100%"} alignItems={"center"}>
      <Heading size={"md"} fontWeight={"semibold"} color="cyan.400">
        Ajay
      </Heading>
      <Spacer />
      <Link
        href="https://www.linkedin.com/in/ajay-mandaviya-222900191/"
        isExternal
      >
        <IconButton
          aria-label="linkdin"
          isRound={true}
          icon={<FaLinkedinIn />}
          marginRight={4}
        />
      </Link>
      <Link isExternal href="https://github.com/ajay-mandaviya">
        <IconButton
          aria-label="github"
          isRound={true}
          icon={<FaGithub />}
          marginRight={4}
        />
      </Link>
      <Link isExternal href="https://twitter.com/AjayMandaviya">
        <IconButton
          aria-label="twitter"
          isRound={true}
          icon={<FaTwitter />}
          marginRight={4}
        />
      </Link>
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
