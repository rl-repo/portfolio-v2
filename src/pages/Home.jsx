import Education from "../components/Education.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";

import { Box } from "@chakra-ui/react";

import { ScrollRestoration } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        color="white"
        m={2}
      >
        <About />
      </Box>

      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        color="white"
        m={2}
      >
        <section id="eduSection">
          <Education />
        </section>
      </Box>

      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        color="white"
        m={2}
      >
        <section id="expSection">
          <Experience />
        </section>
      </Box>

      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        color="white"
        m={2}
      >
        <section id="skillsSection">
          <Skills />
        </section>
      </Box>

      <Box
        bg="rgb(111, 175, 227, 0.35)"
        rounded="md"
        w="100%"
        p={4}
        color="white"
        m={2}
      >
        <section id="projectsSection">
          <Projects />
        </section>
      </Box>
      <ScrollRestoration />
    </div>
  );
}

export default HomePage;
