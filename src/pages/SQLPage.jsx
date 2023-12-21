import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";

import { NavLink, ScrollRestoration } from "react-router-dom";
import React, { useEffect } from "react";

import hljs from "highlight.js/lib/core";

import { FaFileCode } from "react-icons/fa";

import Query1 from "../components/queries/query1";
import Query2 from "../components/queries/query2";
import Query3 from "../components/queries/query3";
import Query4 from "../components/queries/query4";
import Query5 from "../components/queries/query5";
import Query6 from "../components/queries/query6";
import Query7 from "../components/queries/query7";

function ProjectsPage() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `ig-clone.sql`;
    link.href = "content/ig-clone.sql";
    link.click();
  };

  return (
    <div>
      <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl">
          SQL Samples
        </Heading>
      </Box>
      <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="xl">
          Simple Instagram Clone Database Queries
        </Heading>
        <Box>
          <Flex flexDirection="column" m="5px" align="center">
            <Image
              src="src/assets/img/ig-db.png"
              alt="SQL Database"
              borderRadius="1%"
              boxShadow="2xl"
            />
            <Flex gap="5px" align="center">
              <Text>Database Schema</Text>
              <Text
                onClick={onDownload}
                transition="transform 0.2s"
                _hover={{
                  transform: "translateY(-5px)",
                  transitionTimingFunction: "ease-in-out",
                  color: "#62cdbb",
                }}
              >
                <FaFileCode />
              </Text>
            </Flex>
          </Flex>

          <Text pb="5px">
            The database pictured above is a very primitive example of what an
            Instagram clone could potentially be. Showing basic data points to
            showchase queries and table relationships. Created and obtained from
            a Udemy course. Diagram created from{" "}
            <Text as="u" color="tealLink">
              <Link href="http://dbdiagram.io">dbdiagram.io</Link>
            </Text>
            .
          </Text>
          <Divider />

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
