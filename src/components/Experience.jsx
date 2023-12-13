import {
  Text,
  ListItem,
  UnorderedList,
  Divider,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function Experience() {
  return (
    <div>
      <Text as="b" fontSize="3xl">
        Experience
      </Text>
      <Box>
        <Flex justifyContent="space-between">
          <Box>
            <Text as="i" fontSize="lg">
              Senior Capstone Project
            </Text>
            <Text fontSize="m">Anthem Inc / Virginia Tech, Blacksburg, VA</Text>
          </Box>
          <Text>2020 - 2020</Text>
        </Flex>
        <UnorderedList spacing="1">
          <ListItem>
            A collaborative case study with the client's business intellgeince
            team and peers researching the relationship between social
            determinants of health and health risk
          </ListItem>
          <ListItem>
            Lead data analysis section of research on health levels across
            Virginia counties with regression analysis
          </ListItem>
          <ListItem>
            Organized meeting schedules and task delegation for team of peers
          </ListItem>
          <ListItem>
            Communicated with client in the form of weekly meetings discussing
            progress and technical report updates with visualizations of data in
            R
          </ListItem>
          <ListItem>
            Developed and created Tableau dashboard with Bootstrap{" "}
            <Link
              color="teal.500"
              href="https://richpluu.github.io/VA_SDOH/index.html"
            >
              webpage{" "}
            </Link>
            displaying collected data
          </ListItem>
          <ListItem>
            Compiled, cleaned, extracted, transformed, and loaded data from a
            variety of public and federal sources
          </ListItem>
        </UnorderedList>
        <Flex justifyContent="center" p="10px">
          <Link href="https://richpluu.github.io/VA_SDOH/index.html">
            <Image
              width="30em"
              src="src/assets/img/SDOH.png"
              alt="SDOH Homepage"
              borderRadius="1%"
              _hover={{
                shadow: "md",
                transform: "scale(1.01)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            />
          </Link>
        </Flex>
      </Box>

      <Box>
        <Flex justifyContent="space-between">
          <Box>
            <Text as="i" fontSize="lg">
              Relevant Coursework
            </Text>
            <Text fontSize="m"> Virginia Tech, Blacksburg, VA</Text>
          </Box>
          <Text>2016 - 2020</Text>
        </Flex>

        <UnorderedList spacing="1">
          <ListItem>
            Researched Ising model stimulation and used high performance
            computing in C / Linux to visualize results, all monitored through
            git version control with scalability study and parallel processing
          </ListItem>
          <ListItem>
            Conducted quantitative analysis of anime data and user demographics
            from MyAnimeList to predict popularity based off of various metrics
            with team using R
          </ListItem>
          <ListItem>
            Reported on probit regression, classification, and regression trees
            to explain and employ concept to peers{" "}
          </ListItem>

          <ListItem>
            Wrote logic and database knowledge for Java projects: towers of
            hanoi, and a GUI based music database
          </ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
}

export default Experience;
