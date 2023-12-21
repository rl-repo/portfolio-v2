import { Link, Text } from "@chakra-ui/react";
import ImageHover from "../../components/util/ImageHover.jsx";

export const expInfo = [
  {
    title: "Senior Capstone Project",
    location: "Anthem Inc / Virginia Tech, Blacksburg, VA",
    years: "Aug 2020 - Dec 2020",
    desc: [
      "A collaborative case study with the client's business intellgeince team and peers researching the relationship between social determinants of health and health risk",
      "Lead data analysis section of research on health levels across Virginia counties with regression analysis",
      "Organized meeting schedules and task delegation for team of peers",
      "Communicated with client in the form of weekly meetings discussing progress and technical report updates with visualizations of data in R",
      <Text>
        Developed and created Tableau dashboard with Bootstrap{" "}
        <Text as="u" color="tealLink">
          <Link href="https://richpluu.github.io/VA_SDOH/index.html">
            webpage
          </Link>
        </Text>{" "}
        displaying collected data
      </Text>,
      "Compiled, cleaned, extracted, transformed, and loaded data from a variety of public and federal sources",
    ],
    img: (
      <ImageHover
        link="https://richpluu.github.io/VA_SDOH/index.html"
        width="30em"
        src="src/assets/img/SDOH.png"
        alt="SDOH Homepage"
      />
    ),
  },
  {
    title: "Relevant Coursework",
    location: "Virginia Tech, Blacksburg, VA",
    years: "2016 - 2020",
    desc: [
      "Researched Ising model stimulation and used high performance computing in C / Linux to visualize results, all monitored through git version control with scalability study and parallel processing",
      "Conducted quantitative analysis of anime data and user demographics from MyAnimeList to predict popularity based off of various metrics with team using R",
      "Reported on probit regression, classification, and regression trees to explain and employ concept to peers",
      "Wrote logic and database knowledge for Java projects: towers of hanoi, and a GUI based music database",
    ],
    img: "",
  },
];
