import { Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Text fontWeight={"semibold"} fontSize="md" textAlign={"center"}>
      Copyright © {new Date().getFullYear().toString()} Ajay
    </Text>
  );
};

export { Footer };
