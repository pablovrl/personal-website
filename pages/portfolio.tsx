import { Box, Heading, SimpleGrid, SlideFade, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Project from "../components/Project";

interface Project {
  image: string;
  pageUrl: string;
  githubUrl: string;
  title?: string;
  description?: string;
  iconColor: "white" | "black";
}

const projects: Project[] = [
  {
    image: "/personal-website.png",
    iconColor: "white",
    pageUrl: "http://pablovillarroel.xyz",
    githubUrl: "https://github.com/pablovrl/personal-website",
    title: "Página Personal",
    description:
      "Página web personal, en la que se encuentra mi experiencia profesional y proyectos personales.",
  },
  {
    image: "/calculador-promedio.png",
    iconColor: "black",
    pageUrl: "https://calculador-promedio-theta.vercel.app/",
    githubUrl: "https://github.com/pablovrl/calculador-promedio",
    title: "Calculador Promedio",
    description:
      "Una simple aplicación web que calcula el promedio de tus notas.",
  },
];

const Portfolio: NextPage = () => {
  return (
    <Box pt={8}>
      <SlideFade in>
        <SimpleGrid mx={{base: 8, md: 14}} gap={8} columns={{ base: 1, md: 2 }}>
          {projects.map((project) => (
            <Project
              key={project.githubUrl}
              githubUrl={project.githubUrl}
              image={project.image}
              pageUrl={project.pageUrl}
              iconColor={project.iconColor}
            >
              <Text mt={2} textAlign="center" fontSize={"xl"}>
                {project.title}
              </Text>
              <Text fontSize={"sm"} textAlign={"center"}>{project.description}</Text>
            </Project>
          ))}
        </SimpleGrid>
      </SlideFade>
    </Box>
  );
};

export default Portfolio;
