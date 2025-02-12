import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
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
    <Flex justify="space-between" direction="column">
      {/* Sticky Nav */}
      <Box
        w={{ lg: "20%", md: "20%", sm: "12%", base: "15%" }}
        // w="20%"
        pos="fixed"
        top={{ lg: "30vh", md: "40vh", sm: "35vh", base: "40vh" }}
        // bg="#5581ad"
        bg="rgb(111, 175, 227, 0.35)"
        // p="auto"
        borderRadius="15px"
        bgImage={{
          //lg: "url('src/assets/img/pfp_height.png')",
          lg: "url('https://res.cloudinary.com/dwhkrpxcy/image/upload/v1739324559/Portfolio/pr3s5nku1edgwgt6lzb8.png')",
          md: "url('https://res.cloudinary.com/dwhkrpxcy/image/upload/v1739324559/Portfolio/pr3s5nku1edgwgt6lzb8.png')",
          sm: "",
        }}
        backgroundPosition="top center"
        // bgSize={{ base: "300px" }}
        bgSize="cover"
        height={{ lg: "340px", md: "200px", sm: "200px" }}
        resize="both"
        bgRepeat="no-repeat"
        // background-position="left"
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          p="20px"
          pl={{ lg: "15px", sm: "15px", base: "18%" }}
        >
          {location.pathname === "/" ? homeNav : homeButton}
        </Flex>
      </Box>

      {/* Content on Right */}
      <Box
        w={{ base: "70%", small: "90%" }}
        ml={{ sm: "15%", md: "25%", lg: "25%", base: "20%" }}
      >
        <Outlet />
      </Box>
    </Flex>
  );
}

export default RootLayout;
