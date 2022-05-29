import React from "react";
import { Box, SlideFade } from "@chakra-ui/react";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EstudiesSection from "../components/EstudiesSection";
import LenguagesSection from "../components/LenguagesSections";

const Home: NextPage = () => {
  return (
    <Box pt={8}>
      <SlideFade in>
        <AboutSection />
        <ExperienceSection />
        <EstudiesSection />
        <LenguagesSection />
      </SlideFade>
    </Box>
  );
};

export default Home;
