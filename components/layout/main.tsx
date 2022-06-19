import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar";
import { useColorModeValue } from "@chakra-ui/react";

const Main = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box
      as="main"
      pb="8"
      bg={useColorModeValue("#F7E9D7", "#202023")}
      style={{ minHeight: "100vh" }}
      transition="background 0.2s ease-in-out"
    >
      <Head>
        <title>Pablo Villarroel</title>
        <link rel="icon" type="image/svg+xml" href="planet.svg" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <Navbar />
      <Container maxW={"container.md"} pt={"20"}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
