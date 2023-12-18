import {
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Image,
  Link,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { NavLink, ScrollRestoration } from "react-router-dom";

import RDashboards from "../components/RDashboard.jsx";
import TableauDash from "../components/TableauDash.jsx";

function ProjectsPage() {
  return (
    <div>
      <Box bg="rgb(111, 175, 227, 0.35)" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Dashboards & Visualizations
        </Heading>
      </Box>
      <TableauDash />
      <RDashboards />
      {/*       
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
      </Flex> */}
      <ScrollRestoration />
    </div>
  );
}

export default ProjectsPage;
