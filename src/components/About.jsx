import { Link, Text, Tooltip, Flex } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

function About() {
  return (
    <Flex gap="3px" direction="column">
      <Text as="b" fontSize="2xl">
        About
      </Text>
      <Text>
        Hi, I'm{" "}
        <Text as="u" color="tealLink">
          <Tooltip label="See my resume!" placement="top">
            <Link as={NavLink} to="/resume">
              Richard Luu
            </Link>
          </Tooltip>
        </Text>{" "}
        - a data analyst and aspiring web developer!
      </Text>
      <Text>
        When I started my undergraduate career, I was enrolled as an economics
        major with hopes of transfering into the computer science program. I
        wanted to do more than <Text as="i">just</Text> programming - thus upon
        learning about the{" "}
        <Text color="tealLink" as="u">
          <Link href="https://data.science.vt.edu/programs/cmda.html">
            Computational Modeling & Data Analytics
          </Link>
        </Text>{" "}
        (CMDA) degree, I found this best suited to my interests. It allowed to
        me explore my creative side in creating graphs, while blossoming my
        inquisitve side with data analysis/science classes.{" "}
      </Text>
      <Text>
        I am currently looking for employment that will allow me to apply and
        develop my skills.{" "}
      </Text>
      <Text>
        Feel free to{" "}
        <Tooltip label="Opens native email client" placement="top">
          <button
            onClick={() => (window.location = "mailto:r.luu.jobs@gmail.com")}
          >
            <Text color="tealLink" as="u">
              contact me
            </Text>
          </button>
        </Tooltip>
        !
      </Text>
    </Flex>
  );
}

export default About;
