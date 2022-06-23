import { Box, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

interface ProjectProps {
  image: string;
  pageUrl?: string;
  githubUrl: string;
  children?: React.ReactNode;
  iconColor: "white" | "black";
  margin: boolean;
  deployLink?: string;
}

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
}

const Project = ({ image, children, margin, deployLink }: ProjectProps) => {
  return (
    <Box>
      <Link
        href={deployLink}
        isExternal
        cursor={deployLink ? "pointer" : "default"}
        _focus={{ border: "0px" }}
      >
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
            style={{ borderRadius: "8px" }}
          />
        </Flex>
      </Link>
      {children}
    </Box>
  );
};

export default Project;
