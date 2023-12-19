import { Outlet, NavLink, useLocation } from "react-router-dom";

// import Nav from "../components/Nav";
import classes from "./Root.module.css";

import { Flex, Box, Text, Image, Link, Button } from "@chakra-ui/react";
import NavButton from "../components/NavButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHandshake,
  faStar,
  faLaptopCode,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import c from "./TestingPage.module.css";

function RootLayout() {
  const homeNav = (
    <>
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
    </>
  );

  const homeButton = (
    <div className={c.sti_container}>
      <Link as={NavLink} to={"/"}>
        {/* <button className={c.btn}>ASD</button> */}
        <button className={c.btn}>
          <span className={c["btn-icon"]}>
            <FontAwesomeIcon icon={faHouse} />
          </span>
          <span className={c["btn-text"]}> Home</span>
        </button>
      </Link>
    </div>
  );

  const location = useLocation();

  return (
    <>
      <Flex justify="space-between" color="">
        {/* Sticky Nav */}
        <Flex direction="row">
          <Box
            w="20%"
            pos="fixed"
            top="30%"
            // bg="#5581ad"
            bg="rgb(111, 175, 227, 0.35)"
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
              {location.pathname === "/" ? homeNav : homeButton}
            </Flex>
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
