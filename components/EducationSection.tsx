import { Box, Text } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const EducationSection = () => {
  return (
    <Box>
      <SubTitle>Estudios</SubTitle>
      <Box>
        <Text fontWeight={"bold"}>
          Ingeniería de Ejecución en Computación e Informática
        </Text>
        <Text>Universidad del Bío-Bío, Concepción, Chile.</Text>
        <Text>Marzo 2019 - Actualidad</Text>
      </Box>
    </Box>
  );
};

export default EducationSection;
