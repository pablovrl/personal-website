import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const ICON_SIZE = 40;

interface SkillIconProps {
  icon: string;
  size: number;
}

const SkillIcon = ({ icon, size }: SkillIconProps) => (
  <WrapItem>
    <i className={icon} style={{ fontSize: size }} />
  </WrapItem>
);

const Skills = () => {
  return (
    <Box>
      <SubTitle>Tecnologías</SubTitle>
      <Wrap>
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
      </Wrap>
    </Box>
  );
};
export default Skills;
