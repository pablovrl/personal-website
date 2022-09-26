import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Link,
  HStack,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { DownloadIcon } from "@chakra-ui/icons";

const Profile = () => {
  const { colorMode } = useColorMode();
  const [counter, setCounter] = useState(0);
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={{ md: "center" }}
    >
      <Box>
        <Heading fontSize={{ base: "4xl", md: "5xl" }}>
          Pablo Villarroel
        </Heading>
        <Text color="brand.primary.500" fontSize={{ base: "lg", md: "2xl" }}>
          Estudiante de Ingeniería Informática
        </Text>
        <HStack py={2}>
          <Link href="https://github.com/pablovrl" isExternal>
            <AiFillGithub size="25" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/"
            isExternal
          >
            <AiFillLinkedin size="25" />
          </Link>
          <Link href="mailto:pablovillarroel135@gmail.com">
            <AiFillMail size="25" />
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            href="https://docs.google.com/document/d/1xa9UIY9VXdLW8a-D5NGnUd-NSonwUVlNbnpOmSzTOt4/edit?usp=sharing"
            isExternal
          >
            <Button
              leftIcon={<DownloadIcon />}
              size={"xs"}
              bgColor={`${colorMode}.primary.500`}
              _hover={{ bgColor: `${colorMode}.primary.600` }}
              color={"white"}
            >
              Descargar CV
            </Button>
          </Link>
        </HStack>
      </Box>
      <Flex justifyContent={"center"} m={4}>
        <Image
          src={counter < 20 ? "/perfil.jpeg" : "/caballo.png"}
          height="150"
          width="150"
          alt="Perfil image"
          style={{ borderRadius: "50%" }}
          onClick={() => setCounter(counter + 1)}
        />
      </Flex>
    </Flex>
  );
};

export default Profile;
