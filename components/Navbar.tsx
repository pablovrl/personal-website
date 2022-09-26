import {
  Box,
  Container,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  IconButton,
  HStack,
  ColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  path: string;
  colorMode: ColorMode;
}

const NavLink = ({ href, children, path, colorMode }: NavLinkProps) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link
        bgColor={{ md: active ? `${colorMode}.primary.500` : undefined }}
        color={{ md: active ? "white" : undefined }}
        borderRadius={{ md: "2xl" }}
        px={{ md: 4 }}
        py={{ md: 1 }}
        _hover={{ bgColor: `${colorMode}.primary.500`, color: "white" }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box bg={`${colorMode}.background`} as="nav" w={"100%"} zIndex={1}>
      <Container
        py={{ base: 4, md: 10 }}
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
                <NavLink href={"/"} path={router.asPath} colorMode={colorMode}>
                  Sobre mí
                </NavLink>
                <NavLink
                  href={"/portfolio"}
                  path={router.asPath}
                  colorMode={colorMode}
                >
                  Portafolio
                </NavLink>
              </HStack>
            </Box>
          </HStack>
        </Box>
        <HStack>
          <HStack>
            <IconButton
              onClick={toggleColorMode}
              bgColor={`${colorMode}.secondary.500`}
              _hover={{ bgColor: `${colorMode}.secondary.600` }}
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              aria-label="Change color mode"
            />
          </HStack>
          <Box display={{ md: "none" }}>
            <Menu isLazy>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} />
              <MenuList>
                <NavLink href={"/"} path={router.asPath} colorMode={colorMode}>
                  <MenuItem>Sobre mi</MenuItem>
                </NavLink>
                <NavLink
                  href={"/portfolio"}
                  path={router.asPath}
                  colorMode={colorMode}
                >
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
