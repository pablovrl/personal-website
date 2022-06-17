import React from "react";
import { Box, SlideFade } from "@chakra-ui/react";
import type { NextPage } from "next";
import AboutSection from "../components/About";
import ExperienceSection from "../components/Experience";
import EducationSection from "../components/Education";
import LenguagesSection from "../components/Lenguages";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <Box pt={8}>
      <SlideFade in>
        <AboutSection />
        <Skills />
        <ExperienceSection />
        <EducationSection />
        <LenguagesSection />
      </SlideFade>
    </Box>
  );
};

export default Home;
