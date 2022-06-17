import {
  Flex,
  Box,
  Heading,
  Link,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { DownloadIcon } from "@chakra-ui/icons";

const Profile = () => {
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
        <Text fontSize={{ base: "lg", md: "2xl" }}>
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
            href="pablovillarroelcv.pdf"
            isExternal
          >
            <Button
              leftIcon={<DownloadIcon />}
              size={"xs"}
              colorScheme={"pink"}
            >
              Descargar CV
            </Button>
          </Link>
        </HStack>
      </Box>
      <Flex justifyContent={"center"} m={4}>
        <Image
          src="/perfil.jpeg"
          height="150"
          width="150"
          alt="Perfil image"
          style={{ border: "red 1px solid", borderRadius: "50%" }}
        />
      </Flex>
    </Flex>
  );
};

export default Profile;
