import {
  Box,
  Stack,
  Flex,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Link,
  useColorModeValue,
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
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <Box minW="48">
        <Text
          fontWeight={"bold"}
          color={useColorModeValue("pink.500", "pink.200")}
        >
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
            companyUrl={job.companyUrl}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceSection;
