import { useState } from "react";
import "./App.css";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { MdOutlineDownload } from "react-icons/md";

function App() {
  return (
    <Box id="name" bgColor="#100407">
      <Text
        fontFamily="monospace"
        textColor="white"
        textAlign="center"
        className="sm:text-9xl text-7xl"
        p={15}
      >
        RUEBITS
      </Text>

      <Box id="about" paddingY={{ md: 20, base: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={15}>
          <Box display="flex" flexDirection="column">
            <Text
              color="white"
              fontSize={{ base: "3xl", md: "6xl" }}
              as="b"
              p={{ lg: 10, base: 3 }}
            >
              Who I Am
            </Text>
            <Text
              color="white"
              fontSize={{ md: "md", base: "md" }}
              as="b"
              p={{ md: 10, base: 3 }}
              noOfLines={{ lg: 5 }}
            >
              A decentralized autonomous organization, otherwise, a platform
              that allows web3 builders; technical and non-technical
              contributors to aid the bootstrap of multiple projects while
              earning equity, tokens, and subsidized payments for their
              services.
            </Text>

            <ButtonGroup
              paddingY={20}
              paddingLeft={20}
              spacing={{ md: 6, base: 2 }}
            >
              <Button paddingY={6} paddingX={{ md: 14, base: 5 }}>
                Hire Me
              </Button>
              <Button
                className="bg-projectBlue"
                rightIcon={<MdOutlineDownload />}
                colorScheme="#2C84A0"
                paddingY={6}
                paddingX={{ md: 14, base: 5 }}
              >
                Resume
              </Button>
            </ButtonGroup>
          </Box>
          <Image p={5} src="../public/face_pic.png" />
          <Box></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default App;
