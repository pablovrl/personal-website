import React from "react";
import { Container, Fade, ScaleFade, SlideFade } from "@chakra-ui/react";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EstudiesSection from "../components/EstudiesSection";

const Home: NextPage = () => {
  return (
    <Container pt={8}>
      <SlideFade in>
        <AboutSection />
        <ExperienceSection />
        <EstudiesSection />
      </SlideFade>
    </Container>
  );
};

export default Home;
