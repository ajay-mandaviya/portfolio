import { VStack } from "@chakra-ui/react";
import { NavBar, Profile, Skill } from "./Components";

function App() {
  return (
    <VStack padding={8}>
      <NavBar />
      <Profile />
      <Skill />
    </VStack>
  );
}

export default App;
