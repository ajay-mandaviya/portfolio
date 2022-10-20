import React from "react";
import { Box, Text, Flex, Image, Link, useMediaQuery } from "@chakra-ui/react";
import objectBlog from "../assets/object_blog.png";
import arrBlog from "../assets/arr_blog.png";
import functionBlog from "../assets/arrow_fun.png";
export const Blogs = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const blogs = [
    {
      thumbnailUrl: objectBlog,
      title: "Objects in JavaScript",
      content:
        "Object, it's one of the most commonly used data structure in JavaScript. Understanding the object is very important. In this article, I'll share my understanding of what of an object is....",
      link: "https://ajay-mandaviya.hashnode.dev/objects-in-javascript",
      updateAt: "Aug 2, 2021",
    },
    {
      thumbnailUrl: arrBlog,
      title: "JavaScript Array Methods",
      content:
        "a Single variable There are lots of JavaScript array methods . We can apply those methods on our array . Every array method has unique functionality that perform some manipulation...",
      link: "https://ajay-mandaviya.hashnode.dev/must-know-javascript-array-methods",
      updateAt: "May 27, 2022",
    },
    {
      thumbnailUrl: functionBlog,
      title: "Arrow Functions in JavaScript",
      content:
        "Arrow functions and functions are similar. However, there are at least important differences. This will help you decide when it is better to use arrow functions and when functions...",
      link: "https://ajay-mandaviya.hashnode.dev/arrow-functions-in-javascript",
      updateAt: "Jun 7, 2022",
    },
  ];
  return (
    <Box>
      <Text textAlign={"center"} fontWeight="bold" my={4} fontSize="4xl">
        Recent Blogs
      </Text>
      <Flex wrap={"wrap"} direction="row" width={"100%"} gap={"1"}>
        {blogs.map((blog, index) => {
          return (
            <Box
              data-aos="fade-right"
              data-aos-duration="2000"
              mb={4}
              key={index}
              p={4}
              display="flex"
              flexDirection={isLargerThan600 ? "row" : "column"}
              mx={"auto"}
              boxShadow="xl"
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Link
                isExternal
                display={"flex"}
                flexDirection={isLargerThan600 ? "row" : "column"}
                href={`${blog.link}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Box width={isLargerThan600 ? "50%" : "100%"}>
                  <Image
                    rounded={"lg"}
                    loading="lazy"
                    src={blog.thumbnailUrl}
                    alt={"img"}
                  />
                </Box>
                <Box
                  width={isLargerThan600 ? "50%" : "100%"}
                  ml={2}
                  mt={2}
                  display="flex"
                  flexDirection={"column"}
                >
                  {/* title */}
                  <Box>
                    <Text
                      fontWeight="bold"
                      as="h1"
                      fontSize={"2xl"}
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {blog.title}
                    </Text>
                  </Box>
                  <Box mt={2}>
                    <Text fontWeight="semibold" color="gray.500">
                      {blog.content}
                    </Text>
                  </Box>

                  {/* description */}
                  <Box mt={"auto"}>
                    <Text fontWeight="semibold" color="gray.500">
                      {blog.updateAt}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
