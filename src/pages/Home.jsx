import Education from "../components/Education.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";

import ava from "../assets/img/pfp.png";

import {
  Container,
  Box,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function HomePage() {
  return (
    <div>
      {/* <img src={ava} alt="Ava" /> */}
      <Divider />
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <About />
      </Box>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <Education />
      </Box>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <Experience />
      </Box>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <Skills />
      </Box>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <Projects />
      </Box>
    </div>
  );
}

export default HomePage;
