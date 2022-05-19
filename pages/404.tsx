import {
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container pt={18}>
      <Heading as="h1">Not found</Heading>
      <Text>La página que estás buscando no ha sido encontrada.</Text>
    </Container>
  );
};

export default NotFound;
