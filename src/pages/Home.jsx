import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";

import { Box } from "@chakra-ui/react";
import { ScrollRestoration } from "react-router-dom";

const comps = [
  { id: "abtSection", comp: <About /> },
  { id: "eduSection", comp: <Education /> },
  { id: "expSection", comp: <Experience /> },
  { id: "skillsSection", comp: <Skills /> },
  { id: "projectsSection", comp: <Projects /> },
];

function HomePage() {
  return (
    <div>
      {comps.map((comp) => (
        <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
          <section id={comp.id}>{comp.comp}</section>
        </Box>
      ))}

      <ScrollRestoration />
    </div>
  );
}

export default HomePage;
