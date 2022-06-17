import { Box, HStack } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const ICON_SIZE = 40;

interface SkillIconProps {
  icon: string;
  size: number;
}

const SkillIcon = ({ icon, size }: SkillIconProps) => (
  <i className={icon} style={{ fontSize: size }} />
);

const Skills = () => {
  return (
    <Box>
      <SubTitle>Tecnologías</SubTitle>
      <HStack>
        <SkillIcon icon="devicon-typescript-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-react-original" size={ICON_SIZE} />
        <SkillIcon icon="devicon-nodejs-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-express-original" size={ICON_SIZE} />
        <SkillIcon icon="devicon-git-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-postgresql-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-mysql-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-docker-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-linux-plain" size={ICON_SIZE} />
        <SkillIcon icon="devicon-jest-plain" size={ICON_SIZE} />
      </HStack>
    </Box>
  );
};
export default Skills;
