import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Stack,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import JobExperience from "../components/JobExperience";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DownloadIcon } from "@chakra-ui/icons";

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading
    my={4}
    pb={1}
    display={"inline-block"}
    borderBottom={"2px"}
    fontSize={"xl"}
  >
    {children}
  </Heading>
);

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

const Home: NextPage = () => {
  return (
    <Box pt="8">
      <Container>
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
        <Box>
          <SubTitle>Sobre mi</SubTitle>
          <Text>
            Hola! actualmente soy estudiante de séptimo semestre de Ingeniería
            en Informática, a lo largo de mis años en la carrera he estudiado
            desarrollo web de forma autodidacta (y sigo haciéndolo), lo que me
            ha llevado a sentirme cómodo trabajando con{" "}
            <TechnologyLink href="https://www.typescriptlang.org/">
              TypeScript
            </TechnologyLink>
            ,{" "}
            <TechnologyLink href="https://nextjs.org/">
              React (Next.js)
            </TechnologyLink>{" "}
            y{" "}
            <TechnologyLink href="https://nodejs.org/es/">
              Node.js
            </TechnologyLink>
            .
          </Text>
          <Box>
            <SubTitle>Experiencia</SubTitle>
            <Stack spacing={4}>
              <JobExperience company="Docmovi" date="Ene 2022 - Mar 2022">
                <strong>Desarrollador Full-Stack.</strong> <br /> Segunda
                práctica profesional (jornada laboral completa), participé en el
                desarrollo de una página web para contratación de planes,
                incluyendo apartado de administrador para ver pagos y cambiar
                precios de planes.
                <br /> Tecnologías utilizadas: Next.js con TypeScript, Loopback
                4, Transbank SDK, PostgreSQL, TDD, Jest, Cypress.
              </JobExperience>
              <JobExperience company="Pryx Labs " date="Mar 2021 - Jun 2021">
                <strong>Desarrollador Back-End.</strong>
                <br /> Primera práctica profesional, desarrollé una API REST
                para una plataforma de IoT.
                <br /> Tecnologías utilizadas: Django, Django REST framework,
                PostgreSQL.
              </JobExperience>
            </Stack>
          </Box>
          <Box>
            <SubTitle>Estudios</SubTitle>
            <Box>
              <Text fontWeight={"bold"}>
                Ingeniería de Ejecución en Computación e Informática
              </Text>
              <Text>Universidad del Bío-Bío, Concepción, Chile.</Text>
              <Text>Marzo 2019 - Actualidad</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
