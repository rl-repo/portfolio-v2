import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Flex,
  Link,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { FaGithub } from "react-icons/fa";

import { NavLink, ScrollRestoration } from "react-router-dom";

import ImageHover from "../components/ImageHover";

function WebDevPage() {
  return (
    <div>
      <Box bg="rgb(111, 175, 227, 0.35)" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Web Development Projects
        </Heading>
        <Text>
          A collection of projects done using a mix of JavaScript, HTML, and
          CSS. Additional frameworks and libraries (NodeJS, React, etc.) are
          listed when used.
        </Text>
      </Box>

      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        m={2}
        align="center"
      >
        <video controls autoPlay loop muted width="50%" name="Bankist Website">
          <source
            src="src/assets/img/WebDev/Bankist_Page.mov"
            type="video/mp4"
          />
        </video>

        <Box m="5px">
          <ImageHover
            link="https://rl-repo.github.io/bankist-page/"
            width="auto"
            src="src/assets/img/WebDev/Bankist_App.png"
            alt="Bankist Homescreen"
          />
        </Box>

        <Box>
          <Flex>
            <Text>
              <Link href="https://rl-repo.github.io/bankist-page/">
                Bankist Page
              </Link>
            </Text>
            <Link
              ml="5px"
              mb="0"
              as={NavLink}
              to="https://rl-repo.github.io/bankist-page/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
            <Link
              ml="5px"
              mt="4px"
              as={NavLink}
              to="https://github.com/rl-repo/bankist-page/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FaGithub />
            </Link>
            <Text ml="5px">
              <Link href="https://rl-repo.github.io/bankist/">
                | Bankist App
              </Link>
            </Text>
            <Link
              ml="5px"
              mb="0"
              as={NavLink}
              to="https://rl-repo.github.io/bankist/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
            <Link
              ml="5px"
              mt="4px"
              as={NavLink}
              to="https://github.com/rl-repo/bankist/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FaGithub />
            </Link>
          </Flex>

          <Text align="left">
            Basic banking application and accompanying webpage. Refer to Github
            repository for use information.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Link href="https://rl-repo.github.io/mapty/">
            <Image
              borderRadius="1%"
              m="5px"
              transition="transform 0.5s"
              src="src/assets/img/WebDev/Mapty.png"
              _hover={{
                cursor: "pointer",
                // transform: "translateY(-1px)",
                transform: "scale(1.02)",
                // translateY: "-1px",
                // transitionDuration: "2s",
                transitionTimingFunction: "ease-in-out",
                boxShadow: "0 0 10px #a8d4f7",
                borderColor: "#a8d4f7",
              }}
            />
          </Link>
          <Flex>
            <Text>
              <Link href="https://rl-repo.github.io/mapty/">Mapty</Link>
            </Text>
            <Link
              ml="5px"
              mb="0"
              as={NavLink}
              to="https://rl-repo.github.io/mapty/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
            <Link
              ml="5px"
              mt="4px"
              as={NavLink}
              to="https://github.com/rl-repo/mapty/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FaGithub />
            </Link>
          </Flex>
          <Text align="left">
            Object oriented project with JavaScript using Geolocation API and
            data. Given user input, the user can track their workouts and view
            the history of workouts (cycling/walking) on Leaflet map. Updating
            and refactoring in progress.
          </Text>
        </Box>
        <Divider />

        <Box>
          <Link href="https://forkify-rl-repo.netlify.app/">
            <Image
              borderRadius="1%"
              m="5px"
              height="30rem"
              transition="transform 0.5s"
              src="src/assets/img/WebDev/Forkify.png"
              _hover={{
                cursor: "pointer",
                // transform: "translateY(-1px)",
                transform: "scale(1.02)",
                // translateY: "-1px",
                // transitionDuration: "2s",
                transitionTimingFunction: "ease-in-out",
                boxShadow: "0 0 10px #a8d4f7",
                borderColor: "#a8d4f7",
              }}
            />
          </Link>
          <Flex>
            <Text>
              <Link href="https://forkify-rl-repo.netlify.app/">Forkify</Link>
            </Text>
            <Link
              ml="5px"
              mb="0"
              as={NavLink}
              to="https://github.com/rl-repo/Forkify"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
            <Link
              ml="5px"
              mt="4px"
              as={NavLink}
              to="https://github.com/rl-repo/mapty/"
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FaGithub />
            </Link>
          </Flex>
          <Text align="left">
            Object oriented project with JavaScript using Geolocation API and
            data. Given user input, the user can track their workouts and view
            the history of workouts (cycling/walking) on Leaflet map. Updating
            and refactoring in progress.
          </Text>
        </Box>
      </Box>

      <ScrollRestoration />
    </div>
  );
}

export default WebDevPage;
