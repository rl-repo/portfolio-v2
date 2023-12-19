// import Nav from "../components/Nav";

import { Text, Flex, Link, Box } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

function ErrorPage() {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <Text fontSize="3xl">An error occured!</Text>
        <Text fontSize="3xl"> Could not find this page.</Text>
        <Text>
          <Flex>
            <Text>Return&nbsp;</Text>
            <Link as={NavLink} to="/">
              <Flex>
                <Text color="tealLink">home</Text>
                <Box color="tealLink" m="3.5px">
                  <FaHouse />
                </Box>
              </Flex>
            </Link>
            <Text>.</Text>
          </Flex>
        </Text>
      </main>
    </>
  );
}

export default ErrorPage;
