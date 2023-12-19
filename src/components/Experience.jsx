import {
  Text,
  ListItem,
  UnorderedList,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";

import { expInfo } from "../../content/data/expInfo.jsx";

const tempMap = expInfo.map((row, i) => (
  <Box key={i}>
    <Flex justifyContent="space-between">
      <Box>
        <Text as="i" fontSize="lg">
          {row.title}
        </Text>
        <Text fontSize="m">{row.location}</Text>
      </Box>
      <Text>{row.years}</Text>
    </Flex>
    <UnorderedList spacing="1">
      {row.desc.map((point, k) => (
        <ListItem key={k}>{point}</ListItem>
      ))}
    </UnorderedList>
    <Flex justifyContent="center" p="10px">
      {row.img}
    </Flex>
  </Box>
));

function Experience() {
  return (
    <div>
      <Text as="b" fontSize="2xl">
        Experience
      </Text>
      {tempMap}
    </div>
  );
}

export default Experience;
