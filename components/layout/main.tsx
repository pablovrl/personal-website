import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar";
import { useColorMode } from "@chakra-ui/react";

const Main = ({ children }: { children: React.ReactElement }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      minH="100vh"
      as="main"
      pb="8"
      bg={`${colorMode}.background`}
      transition="background 0.2s ea
     se-in-out"
    >
      <Head>
        <title>Pablo Villarroel</title>
        <link rel="icon" type="image/svg+xml" href="planet.svg" />
      </Head>
      <Navbar />
      <Container maxW={"container.md"}>{children}</Container>
    </Box>
  );
};

export default Main;
