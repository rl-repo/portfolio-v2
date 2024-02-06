import { Text, Flex } from "@chakra-ui/react";

function Skills() {
  return (
    <div>
      <Text as="b" fontSize="2xl">
        Skills & Software
      </Text>
      <Flex gap="10px" justifyContent="space-around">
        <ul>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>R/R Studio</li>
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          <li>Linux</li>
          <li>SQL</li>
          <li>React</li>
          <li>Tableau</li>
          <li>PowerBI</li>
        </ul>
      </Flex>
    </div>
  );
}

export default Skills;
