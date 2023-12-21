import { Box, Heading, Text, Divider, Link, Flex } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Carousel from "./Carousel.jsx";
import ImageHover from "./util/ImageHover.jsx";

function RDashboards() {
  return (
    <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
      <Heading as="h2" size="xl" noOfLines={1}>
        R / R Studio
      </Heading>

      <Divider />

      <Box p="20px" pt="10px">
        <Carousel margin />{" "}
      </Box>
      <Text mt="5px" mb="5px">
        A small collection of visualizations created in R with ggplot2 and
        various other packages.
      </Text>

      <Divider />

      <ImageHover
        link="http://richpluu.shinyapps.io/Iris_Classification"
        src="src/assets/img/dashboards/iris_shiny.png"
        alt="Iris Classification"
      />

      <Flex align="center">
        <Link as="b" to="http://richpluu.shinyapps.io/Iris_Classification">
          Iris Classification Dashboard
        </Link>

        <Link
          ml="6px"
          as={NavLink}
          to="http://richpluu.shinyapps.io/Iris_Classification"
          _hover={{
            transform: "translateY(-5px)",
            color: "tealLink",
          }}
        >
          <FaArrowUpRightFromSquare />
        </Link>
      </Flex>

      <Text mb="5px">
        Sample dashboard done in R-Shinny of classic classification data of Iris
        species
      </Text>

      <Divider />
    </Box>
  );
}

export default RDashboards;
