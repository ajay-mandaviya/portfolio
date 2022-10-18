import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNpm } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
const Skill = () => {
  return (
    <Box padding={8}>
      <Text textAlign={"center"} fontWeight="bold" m={4} fontSize="4xl">
        Skills
      </Text>
      <HStack wrap={"wrap"} my={6}>
        <Icon as={FaHtml5} w={100} h={100} />
        <Icon as={FaCss3Alt} w={100} h={100} />
        <Icon as={FaJs} w={100} h={100} />
        <Icon as={FaReact} w={100} h={100} />
        <Icon as={SiRedux} w={100} h={100} />
        <Icon as={FaNpm} w={100} h={100} />
      </HStack>
    </Box>
  );
};

export { Skill };
