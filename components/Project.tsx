import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

interface ProjectProps {
  image: string;
  pageUrl?: string;
  githubUrl: string;
  children?: React.ReactNode;
  iconColor: "white" | "black";
  margin: boolean;
}

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
}

const Project = ({ image, children, margin }: ProjectProps) => {
  return (
    <Box>
      <Flex
        rounded="2xl"
        mt={{ md: margin ? "16" : 0 }}
        backgroundColor="gray.100"
      >
        <Image
          objectFit="cover"
          src={image}
          alt="project image"
          width={1600}
          height={1000}
          style={{borderRadius: "8px"}}
        />
      </Flex>
      {children}
    </Box>
  );
};

export default Project;
