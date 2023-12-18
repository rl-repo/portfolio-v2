import { Text, Flex, Box } from "@chakra-ui/react";
import ClassesModal from "./ClassesModal.jsx";

function Education() {
  return (
    <div>
      <Text as="b" fontSize="2xl">
        Education
      </Text>
      <Flex justifyContent="space-between">
        <Box>
          <ClassesModal />

          <Text>B.S. CMDA | Minor: Mathematics</Text>
        </Box>
        <Box>
          <p>2016 - 2020</p>
        </Box>
      </Flex>
      <Box>
        <Text>
          The CMDA program draws on expertise from three primary departments at
          Virginia Tech with strengths in quantitative science: Mathematics,
          Statistics, and Computer Science. By combining elements of these
          disciplines in innovative, integrated courses that emphasize
          techniques at the forefront of applied computation.
        </Text>
      </Box>
    </div>
  );
}

export default Education;
