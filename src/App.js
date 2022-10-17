import { VStack } from "@chakra-ui/react";
import { NavBar, Profile } from "./Components";
function App() {
  return (
    <VStack padding={5}>
      <NavBar />
      <Profile />
    </VStack>
  );
}

export default App;
