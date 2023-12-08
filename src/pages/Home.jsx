import Education from "../components/Education.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";

import { Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <div>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <About />
      </Box>

      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <section id="eduSection">
          <Education />
        </section>
      </Box>

      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <section id="expSection">
          <Experience />
        </section>
      </Box>

      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <section id="skillsSection">
          <Skills />
        </section>
      </Box>

      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <section id="projectsSection">
          <Projects />
        </section>
      </Box>
    </div>
  );
}

export default HomePage;
