import {
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
import { projects } from "../utils/data";

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
            deployLink={project.pageUrl}
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
                Repositorio
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
  );
};

export default Portfolio;
