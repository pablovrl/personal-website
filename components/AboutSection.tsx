import {
  Flex,
  Box,
  Heading,
  Link,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DownloadIcon } from "@chakra-ui/icons";
import SubTitle from "./SubTitle";

const TechnologyLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href} isExternal color={"pink.500"}>
    {children}
  </Link>
);

const AboutSection = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ md: "center" }}
      >
        <Box>
          <Heading fontSize={{ base: "4xl", md: "5xl" }}>
            Pablo Villarroel
          </Heading>
          <Text fontSize={{ base: "lg", md: "2xl" }}>
            Estudiante de Ingeniería Informática
          </Text>
          <HStack py={2}>
            <Link href="https://github.com/pablovrl" isExternal>
              <AiFillGithub size="25" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/"
              isExternal
            >
              <AiFillLinkedin size="25" />
            </Link>
            <Button
              leftIcon={<DownloadIcon />}
              size={"xs"}
              colorScheme={"pink"}
            >
              Descargar CV
            </Button>
          </HStack>
        </Box>
        <Flex justifyContent={"center"} m={4}>
          <Image
            src="/perfil.jpeg"
            height="150"
            width="150"
            alt="Perfil image"
            style={{ border: "red 1px solid", borderRadius: "50%" }}
          />
        </Flex>
      </Flex>
      <SubTitle>Sobre mi</SubTitle>
      <Text>
        Hola! actualmente soy estudiante de séptimo semestre de Ingeniería en
        Informática, a lo largo de mis años en la carrera he estudiado
        desarrollo web de forma autodidacta (y sigo haciéndolo), lo que me ha
        llevado a sentirme cómodo trabajando con{" "}
        <TechnologyLink href="https://www.typescriptlang.org/">
          TypeScript
        </TechnologyLink>
        ,{" "}
        <TechnologyLink href="https://nextjs.org/">
          React (Next.js)
        </TechnologyLink>{" "}
        y <TechnologyLink href="https://nodejs.org/es/">Node.js</TechnologyLink>
        .
      </Text>
    </>
  );
};

export default AboutSection;
