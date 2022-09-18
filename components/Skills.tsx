import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const ICON_SIZE = 40;

interface SkillIconProps {
  icon: string;
  name: string;
}

const SkillIcon = ({ icon, name }: SkillIconProps) => (
  <WrapItem
    w={"20"}
    display="flex"
    flexDir={"column"}
    alignItems="center"
  >
    <i className={icon} style={{ fontSize: ICON_SIZE }} />
    <Text mt={2} mb={4} fontWeight="bold">
      {name}
    </Text>
  </WrapItem>
);

const Skills = () => {
  return (
    <Box>
      <SubTitle>Tecnologías</SubTitle>
      <Wrap spacing={4}>
        <SkillIcon name="TypeScript" icon="devicon-typescript-plain" />
        <SkillIcon name="Next.js" icon="devicon-nextjs-plain" />
        <SkillIcon name="React" icon="devicon-react-original" />
        <SkillIcon name="Node.js" icon="devicon-nodejs-plain" />
        <SkillIcon name="Express.js" icon="devicon-express-original" />
        <SkillIcon name="Git" icon="devicon-git-plain" />
        <SkillIcon name="PostgreSQL" icon="devicon-postgresql-plain" />
        <SkillIcon name="MySQL" icon="devicon-mysql-plain" />
        <SkillIcon name="Docker" icon="devicon-docker-plain" />
        <SkillIcon name="Linux" icon="devicon-linux-plain" />
        <SkillIcon name="Jest" icon="devicon-jest-plain" />
      </Wrap>
    </Box>
  );
};
export default Skills;
