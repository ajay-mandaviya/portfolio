import { VStack, Box } from "@chakra-ui/react";
import { Blogs, NavBar, Profile, Projects, Skill } from "./Components";

function App() {
  return (
    <Box maxWidth={"container.lg"} mx="auto">
      <VStack padding={8}>
        <NavBar />
        <Profile />
        <Skill />
        <Projects />
        <Blogs/>
      </VStack>
    </Box>
  );
}

export default App;
