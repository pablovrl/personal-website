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
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  path: string;
}

const NavLink = ({ href, children, path }: NavLinkProps) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link
        bgColor={{ md: active ? "pink.100" : undefined }}
        color={{ md: active ? "black" : undefined }}
        borderRadius={{ md: "2xl" }}
        px={{ md: 4 }}
        py={{ md: 1 }}
        _hover={{ bgColor: "pink.100", color: "black" }}
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
    <Box
      bg={useColorModeValue("#FFF6EA", "#513E51")}
      as="nav"
      position={"fixed"}
      w={"100%"}
      zIndex={1}
      transition="background 0.2s ease-in-out"
    >
      <Container
        p={2}
        display={"flex"}
        maxW={"container.lg"}
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
                <NavLink href={"/"} path={router.asPath}>
                  Sobre mí
                </NavLink>
                <NavLink href={"/portfolio"} path={router.asPath}>
                  Portafolio
                </NavLink>
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
                <NavLink href={"/"} path={router.asPath}>
                  <MenuItem>Sobre mi</MenuItem>
                </NavLink>
                <NavLink href={"/portfolio"} path={router.asPath}>
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
