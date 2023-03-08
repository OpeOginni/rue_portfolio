import { useState } from "react";
import "./App.css";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";

import { MdOutlineDownload } from "react-icons/md";

const services = [
  {
    name: "Project Management",
    descritpion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maecenas urna consequat tempus amet. Vitae eu aliquam aliquet varius bibendum vitae dignissim. Facilisis commodo laoreet pellentesque ut metus. Nisl, sem neque cursus sed. Ac aenean risus pellentesque in enim sollicitudin. Cras lacinia tortor tortor proin pellentesque sem velit pulvinar.",
    key: 1,
  },
  {
    name: "Product Design",
    descritpion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maecenas urna consequat tempus amet. Vitae eu aliquam aliquet varius bibendum vitae dignissim. Facilisis commodo laoreet pellentesque ut metus. Nisl, sem neque cursus sed. Ac aenean risus pellentesque in enim sollicitudin. Cras lacinia tortor tortor proin pellentesque sem velit pulvinar.",
    key: 2,
  },
  {
    name: "Data Analyst",
    descritpion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maecenas urna consequat tempus amet. Vitae eu aliquam aliquet varius bibendum vitae dignissim. Facilisis commodo laoreet pellentesque ut metus. Nisl, sem neque cursus sed. Ac aenean risus pellentesque in enim sollicitudin. Cras lacinia tortor tortor proin pellentesque sem velit pulvinar.",
    key: 3,
  },
  {
    name: "Web Development",
    descritpion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maecenas urna consequat tempus amet. Vitae eu aliquam aliquet varius bibendum vitae dignissim. Facilisis commodo laoreet pellentesque ut metus. Nisl, sem neque cursus sed. Ac aenean risus pellentesque in enim sollicitudin. Cras lacinia tortor tortor proin pellentesque sem velit pulvinar.",
    key: 4,
  },
];

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

      <Box id="about" paddingTop={{ md: 20, base: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={30}>
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
          <Box>
            <Image p={5} src="/face_pic.png" />
          </Box>
        </SimpleGrid>
      </Box>
      <Box id="services" paddingY="3.5">
        <Box display="flex" flexDirection="column">
          <Text
            color="white"
            fontSize={{ base: "3xl", md: "4xl" }}
            as="b"
            paddingLeft={{ md: 10, base: 3 }}
            paddingY={{ lg: 3, base: 2 }}
          >
            Services
          </Text>
          <Text
            color="white"
            fontSize={{ md: "md", base: "md" }}
            as="b"
            paddingLeft={{ md: 10, base: 3 }}
            paddingBottom={{ md: 7, base: 3 }}
          >
            What I do
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={30}>
            {services.map((service) => (
              <Box
                key={service.key}
                borderColor="#2C84A0"
                borderWidth="medium"
                className="border aspect-[3/2] bg-gradient-to-b from-projectBlue to-projectDarkGray"
                display="flex"
                flexDirection="column"
              >
                <Text
                  color="white"
                  fontSize={{ base: "lg", xl: "lg" }}
                  textAlign="left"
                  as="b"
                  p="2"
                >
                  {service.name}
                </Text>

                <Text color="white" fontSize={{ base: "sm", md: "md" }} p="3">
                  {service.descritpion}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box id="framework" paddingY="3.5">
        <Box display="flex" flexDirection="column">
          <Text
            color="white"
            fontSize={{ base: "3xl", md: "4xl" }}
            as="b"
            paddingLeft={{ md: 10, base: 3 }}
            paddingY={{ lg: 3, base: 2 }}
          >
            Framework
          </Text>
          <Text
            color="white"
            fontSize={{ md: "md", base: "md" }}
            as="b"
            paddingLeft={{ md: 10, base: 3 }}
            paddingBottom={{ md: 7, base: 3 }}
          >
            My work process
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={30}>
            {services.map((service) => (
              <Box
                key={service.key}
                borderColor="#2C84A0"
                borderWidth="medium"
                className="border aspect-[3/2] bg-gradient-to-b from-projectBlue to-projectDarkGray"
                display="flex"
                flexDirection="column"
              >
                <Text
                  color="white"
                  fontSize={{ base: "lg", xl: "lg" }}
                  textAlign="left"
                  as="b"
                  p="2"
                >
                  {service.name}
                </Text>

                <Text color="white" fontSize={{ base: "sm", md: "md" }} p="3">
                  {service.descritpion}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
