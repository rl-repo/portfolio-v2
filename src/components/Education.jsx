import { Text, Flex, Box } from "@chakra-ui/react";
import ClassesModal from "./ClassesModal.jsx";

import { eduInfo } from "../../public/data/eduInfo.jsx";

function Education() {
  return (
    <Box>
      <Text as="b" fontSize="2xl">
        {eduInfo.title}
      </Text>
      <Flex justifyContent="space-between">
        <Box>
          <ClassesModal />
          <Text>{eduInfo.major}</Text>
        </Box>
        <Text>{eduInfo.years}</Text>
      </Flex>
      <Text>{eduInfo.desc}</Text>
    </Box>
  );
}

export default Education;
