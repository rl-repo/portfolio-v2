import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import classes from "./Root.module.css";

import { Flex, Box } from "@chakra-ui/react";
import NavButton from "../components/NavButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHandshake,
  faStar,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

function RootLayout() {
  return (
    <>
      <Flex justify="space-between">
        {/* Sticky Nav */}
        <Flex direction="row">
          <Box
            w="25%"
            pos="fixed"
            top="30%"
            bg="white"
            p="auto"
            borderRadius="15px"
            bgImage="url('src/assets/img/pfp_height.png')"
            bgSize="cover"
            height="340px"
          >
            {/* <Nav /> */}
            <Box p="20px">
              <Flex direction="column" justify="space-around" gap="10px">
                <NavButton
                  icon={<FontAwesomeIcon icon={faGraduationCap} />}
                  text="Education"
                />
                <NavButton
                  icon={<FontAwesomeIcon icon={faHandshake} />}
                  text="Experience"
                />
                <NavButton
                  icon={<FontAwesomeIcon icon={faStar} />}
                  text="Skills"
                />
                <NavButton
                  icon={<FontAwesomeIcon icon={faLaptopCode} />}
                  text="Projects"
                />
              </Flex>
            </Box>

            {/* <Image src={img} alt="Richard Luu" /> */}
          </Box>
        </Flex>

        {/* Content on Right */}
        <Box w="70%" ml="30%">
          <main className={classes.content}>
            <Outlet />
          </main>
        </Box>
      </Flex>
    </>
  );
}

export default RootLayout;
