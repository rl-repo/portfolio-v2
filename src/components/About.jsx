import { Link, Text } from "@chakra-ui/react";

function About() {
  return (
    <div>
      <Text as="b" fontSize="2xl">
        About
      </Text>
      <Text>
        Hi, I'm Richard Luu - a data analyst and aspiring web developer!
      </Text>
      <p>
        An alum from Virginia Tech's{" "}
        <Text color="tealLink" as="u">
          <Link href="https://data.science.vt.edu/programs/cmda.html">
            Computational Modeling & Data Analytics
          </Link>
        </Text>{" "}
        (CMDA) program with interests in data science and web development.
      </p>
    </div>
  );
}

export default About;
