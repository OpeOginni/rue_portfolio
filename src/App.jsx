import { useState } from "react";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box id="about" bgColor="#100407">
      <Text
        fontFamily="monospace"
        fontSize="xl"
        textColor="white"
        textAlign="center"
      >
        RUEBITS
      </Text>

      <Box></Box>
    </Box>
  );
}

export default App;
