import { Heading } from "@chakra-ui/react";

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading
    my={4}
    pb={1}
    display={"inline-block"}
    borderBottom={"2px"}
    fontSize={"xl"}
  >
    {children}
  </Heading>
);

export default SubTitle;