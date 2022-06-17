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
        Hola!, actualmente soy estudiante de séptimo semestre de Ingeniería en
        Informática, a lo largo de mis años en la carrera he estudiado
        desarrollo web de forma autodidacta (y sigo haciéndolo), lo que me ha
        llevado a sentirme cómodo trabajando con{" "}
        <TechnologyLink href="https://www.typescriptlang.org/">
          TypeScript
        </TechnologyLink>
        ,{" "}
        <TechnologyLink href="https://nextjs.org/">
          React (Next.js)
        </TechnologyLink>{" "}
        y <TechnologyLink href="https://nodejs.org/es/">Node.js</TechnologyLink>
        . Me considero bueno resolviendo problemas, y me divierto mucho
        desarrollando, sobretodo cuando aprendo cosas nuevas :).
      </Text>
    </>
  );
};

export default AboutSection;
