import { Text, Box, Divider, Flex, Link } from "@chakra-ui/react";

import TempCard from "./TempCard.jsx";

function Projects() {
  return (
    <Flex justifyContent="space-between" direction="column" gap="5px">
      <Text as="b" fontSize="2xl">
        Projects
      </Text>
      <Flex justifyContent="space-around">
        <TempCard
          title="Simpsons Episode Analysis"
          body="An analysis conducted on Simpsons episodes data obtained from Kaggle
          done in R. Highlighting exploratory data analysis, data cleaning, time
          series study, and soon a Tableau dashboard."
          link="https://rl-repo.github.io/Simpsons-Episodes/"
          bgImage2="url('src/assets/img/Simpsons.png')"
          skillTags={["R", "ggplot2", "Tableau"]}
        />

        <TempCard
          title="Dashboards and Visualizations"
          body=" A collection of various dashboards and visualizations I have created."
          link="/projects"
          skillTags={["R", "R-Shiny", "Tableau"]}
        />
      </Flex>

      <Flex justifyContent="space-around">
        <TempCard
          title="Web Development"
          body=" Various web sites and applications I have created. Including: Simple banking application, workout tracker, and recipe viewer."
          link="/web-development"
          skillTags={["HTML", "CSS", "JavaScript", "React"]}
        />
        <TempCard
          link="/sql"
          title="SQL Sample(s)"
          body="Example queries done on an Instagram-like data set."
          skillTags={["SQL", "MySQL"]}
        />
      </Flex>
    </Flex>
  );
}

export default Projects;
