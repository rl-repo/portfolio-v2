import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import classes from "./Root.module.css";

import { Flex, Box, Text, Image } from "@chakra-ui/react";
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
            w="20%"
            pos="fixed"
            top="30%"
            bg="white"
            p="auto"
            borderRadius="15px"
            bgImage="url('src/assets/img/pfp_height.png')"
            // bgImage={<Image src="url('src/assets/img/pfp_height.png')" />}
            bgSize="300px"
            height="340px"
            resize="both"
            bgRepeat="no-repeat"
          >
            {/* <Nav /> */}
            <Flex direction="row" justifyContent="space-between" p="20px">
              <Flex direction="column" justify="space-around" gap="10px">
                <NavButton
                  icon={<FontAwesomeIcon icon={faGraduationCap} />}
                  text="Education"
                  sectionId="eduSection"
                />
                <NavButton
                  icon={<FontAwesomeIcon icon={faHandshake} />}
                  text="Experience"
                  sectionId="expSection"
                />
                <NavButton
                  icon={<FontAwesomeIcon icon={faStar} />}
                  text="Skills"
                  sectionId="skillsSection"
                />
                <NavButton
                  icon={<FontAwesomeIcon icon={faLaptopCode} />}
                  text="Projects"
                  sectionId="projectsSection"
                />
              </Flex>
              {/* <Text color="black" pr="5%">
                Richard Luu
              </Text> */}
            </Flex>

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
