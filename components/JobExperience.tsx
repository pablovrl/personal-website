import { Box, Flex, Text } from "@chakra-ui/react";

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

export default JobExperience;
