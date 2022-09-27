import { Box, color, Flex, Link, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

interface ProjectProps {
  image: string;
  pageUrl?: string;
  githubUrl: string;
  children?: React.ReactNode;
  iconColor: "white" | "black";
  deployLink?: string;
}

const Project = ({ image, children, deployLink }: ProjectProps) => {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === "light" ? "gray.200" : "gray.700";
  return (
    <Box border="1px" borderColor={borderColor} borderRadius={"xl"}>
      <Link
        href={deployLink}
        isExternal
        cursor={deployLink ? "pointer" : "default"}
        _focus={{ border: "0px" }}
      >
        <Flex rounded="2xl" backgroundColor="gray.100">
          <Image
            objectFit="cover"
            src={image}
            alt="project image"
            width={1600}
            height={1000}
            style={{ borderRadius: "0.75rem 0.75rem 0rem 0rem" }}
          />
        </Flex>
      </Link>
      <Box
        p={{ md: 5 }}
        borderTop="1px"
        borderColor={borderColor}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Project;
