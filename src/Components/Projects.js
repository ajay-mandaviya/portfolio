import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  const [smallScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <Text textAlign={"center"} fontWeight="bold" m={4} fontSize="4xl">
        {/* Recent Projects */}
      </Text>

      <Flex direction={smallScreen ? "row" : "column"} width="100%">
            
      </Flex>
    </Box>
  );
};

export { Projects };
