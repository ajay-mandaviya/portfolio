import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const smallScreen = useMediaQuery();
  console.log("smallScreen", smallScreen);
  return <div>Profile</div>;
};

export { Profile };
