import {
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Image,
  Link,
  Wrap,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { NavLink, ScrollRestoration } from "react-router-dom";

import RDashboards from "../components/RDashboard.jsx";
import TableauDash from "../components/TableauDash.jsx";

function ProjectsPage() {
  return (
    <div>
      <Box bg="tealBG" w="100%" rounded="md" p={4} m={2}>
        <Heading fontSize={{ base: "30px", md: "40px", lg: "56px" }}>
          Dashboards & Visualizations
        </Heading>
        {/* <Heading size={{ base: "3xl" }} overflow-wrap="break-word">
          Dashboards & Visualizations
        </Heading> */}
      </Box>

      {/* 
      <TableauDash />
      <RDashboards /> */}

      <ScrollRestoration />
    </div>
  );
}

export default ProjectsPage;
