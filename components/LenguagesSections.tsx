import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const LenguagesSection = () => {
  return (
    <Box>
      <SubTitle>Idiomas</SubTitle>
      <UnorderedList>
        <ListItem>Español (nativo).</ListItem>
        <ListItem>
          Inglés{" "}
          <Link
            href="linguaskill-test-report-pablovillarroel.pdf"
            color={"pink.500"}
            isExternal
          >
            (Linguaskill B2).
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default LenguagesSection;
