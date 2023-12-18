import { Box, Heading, Image, Text, Divider } from "@chakra-ui/react";

import { NavLink, ScrollRestoration } from "react-router-dom";
import React, { useEffect } from "react";

import { FaFileCode } from "react-icons/fa";

import Query1 from "../components/queries/query1";
import Query2 from "../components/queries/query2";
import Query3 from "../components/queries/query3";
import Query4 from "../components/queries/query4";
import Query5 from "../components/queries/query5";
import Query6 from "../components/queries/query6";
import Query7 from "../components/queries/query7";

function ProjectsPage() {
  return (
    <div>
      <Box bg="rgb(111, 175, 227, 0.35)" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          SQL Samples
        </Heading>
      </Box>
      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        color="white"
        m={2}
      >
        <Heading as="h2" size="xl" noOfLines={1}>
          Simple Instagram Clone Database Queries
        </Heading>
        <Box>
          <Box m="5px">
            <Image
              src="src/assets/img/ig-db.png"
              alt="SQL Database"
              borderRadius="1%"
              boxShadow="2xl"
            />
          </Box>

          <Box>
            <Text mr="10px">Dashboard 3</Text>
            <a
              href="http:/google.com/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FaFileCode />
            </a>
          </Box>
          <Text fontSize="xl">Simple Instagram Clone Database Queries</Text>
          <Text>
            The database pictured above is a very primitive example of what an
            Instagram clone could potentially be. Showing basic data points to
            showchase queries and table relationships. Created and obtained from
            a Udemy course.
          </Text>
          <Query1 />
          <Divider />
          <Query2 />
          <Divider />

          <Query3 />
          <Divider />

          <Query4 />
          <Divider />

          <Query5 />
          <Divider />

          <Query6 />
          <Divider />

          <Query7 />
        </Box>
      </Box>
      <ScrollRestoration />
    </div>
  );
}

export default ProjectsPage;
