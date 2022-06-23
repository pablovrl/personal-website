import {
  Box,
  Stack,
  Flex,
  Text,
  Badge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SubTitle from "./SubTitle";

interface Job {
  company: string;
  date: string;
  position: string;
  description: string;
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: "Docmovi",
    date: "Ene 2022 - Mar 2022",
    position: "Desarrollador Full-Stack",
    description:
      "Segunda práctica profesional (jornada laboral completa), participé en el desarrollo de una página web para contratación de planes, incluyendo apartado de administrador para ver pagos y cambiar precios de planes, en la cual creé componentes responsivos basándome en un diseño de Figma, también colaboré con el desarrollo de una API REST creando endpoints para la autentificación de usuarios, recuperación de contraseñas y CRUDs de tablas.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Loopback 4",
      "PostgreSQL",
      "TDD",
      "Jest",
      "Cypress",
      "SCRUM",
      "Jira",
      "Transbank SDK",
    ],
  },
  {
    company: "Pryx",
    date: "Mar 2021 - Jun 2021",
    position: "Desarrollador Back-End",
    description:
      "Primera práctica profesional, desarrollé una API REST para una plataforma de IoT.",
    technologies: ["Django", "Django REST framework", "PostgreSQL"],
  },
];

const JobExperience = ({
  company,
  date,
  position,
  description,
  technologies,
}: Job) => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <Box minW="48">
        <Text fontWeight={"bold"}>{company}</Text>
        <Text mb={4}>{date}</Text>
      </Box>
      <Flex flexDirection={"column"} pl={{ base: "4", md: "0" }}>
        <Text mb={2}>
          <strong>{position}.</strong> <br /> {description}
        </Text>
        <Wrap>
          {technologies.map((tec, i) => (
            <WrapItem key={i}>
              <Badge colorScheme={"pink"} variant="solid">
                {tec}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </Flex>
  );
};

const ExperienceSection = () => {
  return (
    <Box>
      <SubTitle>Experiencia</SubTitle>
      <Stack spacing={4}>
        {jobs.map((job, i) => (
          <JobExperience
            key={i}
            company={job.company}
            date={job.date}
            position={job.position}
            description={job.description}
            technologies={job.technologies}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
