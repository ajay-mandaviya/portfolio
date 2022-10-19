import { Box, Flex, Image, Text, useMediaQuery, Link } from "@chakra-ui/react";
import React from "react";
import ecom from "../assets/e-com.png";
import mystream from "../assets/my-stream.png";
import socialmedia from "../assets/social-media.png";
import quickNote from "../assets/quick-note.png";
import cl from "../assets/cl.png";
const Projects = () => {
  const [smallScreen] = useMediaQuery("(min-width:600px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const projects = [
    {
      id: 11,
      title: "Men's Shop E-Commerce Application",
      image: ecom,
      alt: "ecom",
      tech: ["ReactJs", "React Router v6", "React Context API + useReducer"],
      codeLink: "https://github.com/ajay-mandaviya/e-com-react",
      liveLink: "https://men-shop.netlify.app/",
    },
    {
      id: 22,
      title: "My Stream Video Library Application",
      image: mystream,
      alt: "stream",
      tech: ["ReactJs", "React Router v6", "React Context API + useReducer"],
      codeLink: "https://github.com/ajay-mandaviya/video-library",
      liveLink: "https://my-stream.netlify.app/",
    },
    {
      id: 44,
      title: "Text Talk Social Media Application",
      image: socialmedia,
      alt: "stream",
      tech: ["ReactJs", "Redux Toolkit", "React Router v6", "Tailwind Css"],
      codeLink: "https://github.com/ajay-mandaviya/social_media_application",
      liveLink: "https://text-talk.netlify.app/",
    },
    {
      id: 55,
      title: "My Notes App Application",
      image: quickNote,
      alt: "notes",
      tech: ["ReactJs", "React Router v6", "React Context API + useReducer"],
      codeLink: "https://github.com/ajay-mandaviya/pomodoro-note-app",
      liveLink: "https://quick-notes-reactapp.netlify.app/",
    },
    {
      id: 532,
      title: "Easy UI",
      image: cl,
      alt: "cl",
      tech: ["HTML", "CSS"],
      codeLink: "https://github.com/ajay-mandaviya/css-component-lib",
      liveLink: "https://easy-ui-css.netlify.app/",
    },
  ];
  return (
    <Box>
      <Text textAlign={"center"} fontWeight="bold" m={4} fontSize="4xl">
        Recent Projects
      </Text>

      <Flex
        wrap={"wrap"}
        direction={smallScreen ? "row" : "column"}
        width="100%"
        justifyContent={"space-between"}
      >
        {projects.map((project) => {
          return (
            <Box
              key={project.id}
              mx={"auto"}
              marginBottom="4"
              borderWidth="1px"
              borderRadius="lg"
              flexBasis={isLargerThan600 ? "40%" : "100%"}
              overflow="hidden"
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.imageAlt}
              />
              <Box p={6}>
                <Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {project.title}
                  </Box>
                </Box>
                <Box>
                  <Box
                    display="flex"
                    flexWrap={"wrap"}
                    color="gray.500"
                    fontWeight="semibold"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {project.tech.map((ele, index) => {
                      return (
                        <Text mr={4} key={index}>
                          {ele}
                        </Text>
                      );
                    })}
                  </Box>
                </Box>
                <Box mt={4}>
                  <Link
                    background="blue.300"
                    color="blue.900"
                    p={2}
                    borderRadius="lg"
                    isExternal
                    href={`${project.liveLink}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Live Preview
                  </Link>
                  <Link
                    background="blue.300"
                    color="blue.900"
                    p={2}
                    borderRadius="lg"
                    isExternal
                    style={{
                      textDecoration: "none",
                    }}
                    ml={4}
                    href={`${project.codeLink}`}
                  >
                    Code
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export { Projects };
