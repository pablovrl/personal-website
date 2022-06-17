import React from "react";
import { Box, SlideFade } from "@chakra-ui/react";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import LenguagesSection from "../components/LenguagesSections";
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
