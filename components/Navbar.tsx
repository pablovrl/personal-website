import {
  Box,
  Container,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useColorMode,
  IconButton,
  HStack,
  Switch,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <NextLink href={href}>
    <Link>{children}</Link>
  </NextLink>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("#FFF6EA", "#513E51")}
      as="nav"
      position={"fixed"}
      w={"100%"}
      zIndex={1}
    >
      <Container
        p={2}
        display={"flex"}
        maxW={"container.md"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <HStack spacing={10}>
            <NextLink href={"/"}>
              <Link
                _hover={{ textDecoration: "none" }}
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                Pablo Villarroel
              </Link>
            </NextLink>
            <Box display={{ base: "none", md: "inline" }}>
              <HStack spacing={4}>
                <NavLink href={"/"}>Sobre mi</NavLink>
                <NavLink href={"/portfolio"}>Portafolio</NavLink>
              </HStack>
            </Box>
          </HStack>
        </Box>
        <HStack>
          <HStack>
            <SunIcon />
            <Switch
              size={"lg"}
              colorScheme="pink"
              onChange={toggleColorMode}
              isChecked={colorMode === "dark" ? true : false}
            />
            <MoonIcon />
          </HStack>
          <Box display={{ md: "none" }}>
            <Menu isLazy>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} />
              <MenuList>
                <NavLink href={"/"}>
                  <MenuItem>Sobre mi</MenuItem>
                </NavLink>
                <NavLink href={"/portfolio"}>
                  <MenuItem>Portafolio</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
