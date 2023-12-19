import { Text, Flex, Box } from "@chakra-ui/react";
import ClassesModal from "./ClassesModal.jsx";

function Education() {
  return (
    <Box>
      <Text as="b" fontSize="2xl">
        Education
      </Text>
      <Flex justifyContent="space-between">
        <Box>
          <ClassesModal />
          <Text>B.S. CMDA | Minor: Mathematics</Text>
        </Box>
        <Text>2016 - 2020</Text>
      </Flex>
      <Text>
        The CMDA program draws on expertise from three primary departments at
        Virginia Tech with strengths in quantitative science: Mathematics,
        Statistics, and Computer Science. By combining elements of these
        disciplines in innovative, integrated courses that emphasize techniques
        at the forefront of applied computation.
      </Text>
    </Box>
  );
}

export default Education;
