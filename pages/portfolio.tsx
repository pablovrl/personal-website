import {
  Box,
  Button,
  HStack,
  Link,
  SimpleGrid,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Project from "../components/Project";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

interface Project {
  image: string;
  pageUrl?: string;
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
      "Página web personal, en la que encontrarás mi experiencia profesional y proyectos personales.",
  },
  {
    image: "/pokeapi-card.png",
    iconColor: "black",
    pageUrl: "https://pokemon-card-ten.vercel.app/",
    githubUrl: "https://github.com/pablovrl/pokemon-card",
    title: "Pokemon Card",
    description:
      "Página web para ver la información de un Pokémon, utilizando la API de PokeAPI.",
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
  {
    image: "/prueba-docmovi.png",
    iconColor: "black",
    githubUrl: "https://github.com/pablovrl/prueba-docmovi",
    title: "Prueba Técnica Docmovi",
    description: "Prueba técnica para la empresa Docmovi.",
  },
];

const ProjectLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => (
  <Link href={href} isExternal _hover={{ textDecoration: "none" }}>
    <Button
      bgColor="#313134"
      color="#EDEDEE"
      _hover={{ backgroundColor: "#444446" }}
      leftIcon={icon}
    >
      {children}
    </Button>
  </Link>
);

const Portfolio: NextPage = () => {
  return (
    <Box pt={8}>
      <SlideFade in>
        <SimpleGrid gap={10} columns={{ base: 1, md: 2 }}>
          {projects.map((project, i) => (
            <Project
              key={project.githubUrl}
              githubUrl={project.githubUrl}
              image={project.image}
              pageUrl={project.pageUrl}
              iconColor={project.iconColor}
              margin={i % 2 !== 0}
            >
              <Text mt={2} fontSize={"xl"}>
                {project.title}
              </Text>
              <Text fontSize={"sm"}>{project.description}</Text>
              <HStack mt={2}>
                <ProjectLink
                  icon={<AiFillGithub size={20} />}
                  href={project.githubUrl}
                >
                  Código
                </ProjectLink>
                {project.pageUrl && (
                  <ProjectLink
                    icon={<BiLinkExternal size={20} />}
                    href={project.pageUrl}
                  >
                    Deploy
                  </ProjectLink>
                )}
              </HStack>
            </Project>
          ))}
        </SimpleGrid>
      </SlideFade>
    </Box>
  );
};

export default Portfolio;
