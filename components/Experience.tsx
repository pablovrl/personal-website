import {
  Box,
  Stack,
  Flex,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import SubTitle from "./SubTitle";
import { Job, jobs } from "../utils/data";

const JobExperience = ({
  company,
  date,
  position,
  description,
  technologies,
  companyUrl,
}: Job) => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <Box minW="48">
        <Text fontWeight={"bold"} color={`${colorMode}.primary.500`}>
          <Link href={companyUrl} target="_blank">
            {company}
          </Link>
        </Text>
        <Text mb={4}>{date}</Text>
      </Box>
      <Flex flexDirection={"column"} pl={{ base: "4", md: "0" }}>
        <Text mb={2} textAlign="justify">
          <strong>{position}.</strong> <br /> {description}
        </Text>
        <Wrap>
          {technologies.map((tec, i) => (
            <WrapItem key={i}>
              <Badge px={2} bgColor={`${colorMode}.primary.500`} variant="solid">
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
            companyUrl={job.companyUrl}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
