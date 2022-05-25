import { Link, Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

interface ProjectProps {
  image: string;
  pageUrl?: string;
  githubUrl: string;
  children?: React.ReactNode;
  iconColor: "white" | "black";
}

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
}

const IconLink = ({ href, children }: IconLinkProps) => (
  <Link href={href} isExternal>
    <Box
      _hover={{ transform: "scale(1.2)" }}
      css={{ transition: "transform 180ms ease-in-out" }}
    >
      {children}
    </Box>
  </Link>
);

const Project = ({
  image,
  pageUrl,
  githubUrl,
  iconColor,
  children,
}: ProjectProps) => {
  return (
    <Box>
      <Box
        border={"2px"}
        borderColor={useColorModeValue("#728D88", "#C06E70")}
        bgSize={"cover"}
        bgImage={image}
        bgPos={"center"}
        rounded="2xl"
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          h="180px"
          opacity={0}
          _hover={{ opacity: 1 }}
          rounded="2xl"
          css={{
            backdropFilter: "blur(5px)",
          }}
        >
          <HStack spacing={8}>
            {pageUrl && (
              <IconLink href={pageUrl}>
                <BiLinkExternal color={iconColor} size={40} />
              </IconLink>
            )}
            <IconLink href={githubUrl}>
              <AiFillGithub color={iconColor} size={40} />
            </IconLink>
          </HStack>
        </Flex>
      </Box>
      {children}
    </Box>
  );
};

export default Project;
