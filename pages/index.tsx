import React from "react";
import { Box, SlideFade, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Lenguages from "../components/Lenguages";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <SlideFade in>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Lenguages />
    </SlideFade>
  );
};

export default Home;
