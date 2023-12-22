import { Outlet, NavLink, useLocation } from "react-router-dom";

import { Flex, Box, Link } from "@chakra-ui/react";
import NavButton from "../components/util/NavButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHandshake,
  faStar,
  faLaptopCode,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import c from "./TestingPage.module.css";

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
      <button className={c.btn}>
        <span className={c["btn-icon"]}>
          <FontAwesomeIcon icon={faHouse} />
        </span>
        <span className={c["btn-text"]}> Home</span>
      </button>
    </Link>
  </div>
);

function RootLayout() {
  const location = useLocation();

  return (
    <>
      <Flex justify="space-between">
        {/* Sticky Nav */}
        <Flex direction="row">
          <Box
            // w={{ base: "10%", large: "20%" }}
            w="20%"
            pos="fixed"
            top="30vh"
            // bg="#5581ad"
            bg="rgb(111, 175, 227, 0.35)"
            p="auto"
            borderRadius="15px"
            bgImage="url('src/assets/img/pfp_height.png')"
            // bgImage={<Image src="url('src/assets/img/pfp_height.png')" />}
            bgSize={{ base: "300px" }}
            height="340px"
            resize="both"
            bgRepeat="no-repeat"
          >
            <Flex direction="row" justifyContent="space-between" p="20px">
              {location.pathname === "/" ? homeNav : homeButton}
            </Flex>
          </Box>
        </Flex>

        {/* Content on Right */}
        <Box w={{ base: "70%", small: "90%" }} ml="30%">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}

export default RootLayout;
