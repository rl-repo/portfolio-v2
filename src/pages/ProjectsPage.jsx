import { Flex, Box } from "@chakra-ui/react";

function ProjectsPage() {
  return (
    <div>
      <p>Projects</p>
      <Flex bg="gray.200" justify="space-between">
        <Box w="150px" h="50px" bg="red">
          1
        </Box>
        <Box w="150px" h="50px" bg="blue">
          2
        </Box>
        <Box w="150px" h="50px" bg="green">
          3
        </Box>
        <Box w="150px" h="50px" bg="yellow">
          4
        </Box>
      </Flex>
    </div>
  );
}

export default ProjectsPage;
