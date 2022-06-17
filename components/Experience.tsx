import { Box, Stack, Flex, Text} from "@chakra-ui/react";
import SubTitle from "./SubTitle";

interface JobExperienceProps {
  company: string;
  date: string;
  children: React.ReactNode;
}

const JobExperience = ({ company, date, children }: JobExperienceProps) => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <Box minW="48">
        <Text fontWeight={"bold"}>{company}</Text>
        <Text mb={4}>{date}</Text>
      </Box>
      <Text pl={{ base: "4", md: "0" }}>{children}</Text>
    </Flex>
  );
};

const ExperienceSection = () => {
  return (
    <Box>
      <SubTitle>Experiencia</SubTitle>
      <Stack spacing={4}>
        <JobExperience company="Docmovi" date="Ene 2022 - Mar 2022">
          <strong>Desarrollador Full-Stack.</strong> <br /> Segunda práctica
          profesional (jornada laboral completa), participé en el desarrollo de
          una página web para contratación de planes, incluyendo apartado de
          administrador para ver pagos y cambiar precios de planes.
          <br /> Tecnologías utilizadas: Next.js con TypeScript, Loopback 4,
          Transbank SDK, PostgreSQL, TDD, Jest, Cypress.
        </JobExperience>
        <JobExperience company="Pryx Labs " date="Mar 2021 - Jun 2021">
          <strong>Desarrollador Back-End.</strong>
          <br /> Primera práctica profesional, desarrollé una API REST para una
          plataforma de IoT.
          <br /> Tecnologías utilizadas: Django, Django REST framework,
          PostgreSQL.
        </JobExperience>
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
