import { Text, Box, Divider, Flex, Link, Spacer } from "@chakra-ui/react";

import TempCard from "./TempCard.jsx";

import { projectsCards } from "../../public/data/projectsCards.jsx";

function Projects() {
  return (
    <Flex justifyContent="space-between" direction="column" gap="5px">
      <Text as="b" fontSize="2xl">
        Projects
      </Text>
      <Flex
        align="center"
        gap="10px"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {projectsCards.map((row) => (
          <TempCard
            title={row.title}
            body={row.body}
            link={row.link}
            skillTags={row.skillTags}
            key={row.title}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default Projects;
