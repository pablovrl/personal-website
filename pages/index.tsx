import {
  Container,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EstudiesSection from "../components/EstudiesSection";

const Home: NextPage = () => {
  return (
    <Container pt={8}>
      <AboutSection />
      <ExperienceSection />
      <EstudiesSection />
    </Container>
  );
};

export default Home;
