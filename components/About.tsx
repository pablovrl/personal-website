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
      <SubTitle>Sobre mí</SubTitle>
      <Text textAlign={"justify"}>
        Actualmente soy estudiante de último semestre de Ingeniería Informática
        (Alumno Tesista), conocí la programación al entrar en la carrera, y
        desde ese entonces no he dejado de estudiarla. A lo largo de los años en
        la carrera, me he dedicado a aprender desarrollo web (de forma
        autodidacta). Me considero una persona apasionada por lo que hace, me
        gusta mucho la programación y la tecnología, es por esto que gran parte
        de mi tiempo libre lo dedico a aprender sobre las novedades del mundo
        del desarrollo, y también a crear distintos proyectos, ya que para mí es
        la forma más eficaz de aprender.
      </Text>
    </>
  );
};

export default AboutSection;
