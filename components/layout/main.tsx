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
    >
      <Head>
        <title>Pablo Villarroel</title>
      </Head>
      <Navbar />
      <Container maxW={"container.md"} pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
