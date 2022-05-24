import React from "react";
import { Box, SlideFade } from "@chakra-ui/react";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EstudiesSection from "../components/EstudiesSection";

const Home: NextPage = () => {
  return (
    <Box pt={8}>
      <SlideFade in>
        <AboutSection />
        <ExperienceSection />
        <EstudiesSection />
      </SlideFade>
    </Box>
  );
};

export default Home;
