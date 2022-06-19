import { Flex, Link, Text } from "@chakra-ui/react";
import Profile from "./Profile";
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
      <Profile />
      <SubTitle>Sobre mi</SubTitle>
      <Text>
        Hola!, actualmente soy estudiante de último año de Ingeniería en
        Informática, a lo largo de mis años en la carrera he estudiado
        desarrollo web de manera autodidacta (y sigo haciéndolo), desarrollando
        varios proyectos con{" "}
        <TechnologyLink href="https://www.typescriptlang.org/">
          TypeScript
        </TechnologyLink>
        , <TechnologyLink href="https://es.reactjs.org/">React</TechnologyLink>{" "}
        y <TechnologyLink href="https://nodejs.org/es/">Node.js</TechnologyLink>
        .
      </Text>
    </>
  );
};

export default AboutSection;
