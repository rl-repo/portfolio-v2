import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Carousel from "./Carousel.jsx";

import { NavLink } from "react-router-dom";

function RDashboards() {
  return (
    <Box bg="rgb(111, 175, 227, 0.35)" rounded="md" w="100%" p={4} m={2}>
      <Heading as="h2" size="3xl" noOfLines={1}>
        R / R Studio
      </Heading>
      <Link href="http://richpluu.shinyapps.io/Iris_Classification">
        <Image
          src="src/assets/img/dashboards/iris_shiny.png"
          alt="Iris Classification"
          borderRadius="1%"
          m="5px"
          transition="transform 0.5s"
          _hover={{
            cursor: "pointer",
            // transform: "translateY(-1px)",
            transform: "scale(1.02)",
            // translateY: "-1px",
            // transitionDuration: "2s",
            transitionTimingFunction: "ease-in-out",
            boxShadow: "0 0 10px #a8d4f7",
            borderColor: "#a8d4f7",
          }}
        />
      </Link>

      <Flex>
        <Text as="u">
          <Link to="http://richpluu.shinyapps.io/Iris_Classification" mr="10px">
            Iris Classification Dashboard
          </Link>
        </Text>

        <Link
          as={NavLink}
          to="http://richpluu.shinyapps.io/Iris_Classification"
          _hover={{
            transform: "translateY(-5px)",
            color: "#62cdbb",
          }}
        >
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </Link>
      </Flex>
      <Text>
        Sample dashboard done in R-Shinny of classic classification data of Iris
        species
      </Text>
      <Divider />
      {/*
      <Image
        src="src/assets/img/dashboards/balance_v_default.png"
        alt="R Graph 1"
        borderRadius="1%"
        m="5px"
        height="200px"
        width="200px"
      />

      <Text>R Graph 1</Text>
      <Text>
        Logistic regression plot of the probability of an account defaulting.
      </Text>

      <Divider /> */}

      <Box p="20px">
        <Carousel />
      </Box>
    </Box>
  );
}

export default RDashboards;
