import { Link } from "@chakra-ui/react";
import ImageHover from "../../src/components/ImageHover";

export const expInfo1 = [
  {
    title: "Senior Capstone Project",
    location: "Anthem Inc / Virginia Tech, Blacksburg, VA",
    yr: "Aug 2020 - Dec 2020",
    desc: [
      "A collaborative case study with the client's business intellgeince team and peers researching the relationship between social determinants of health and health risk",
      "Lead data analysis section of research on health levels across Virginia counties with regression analysis",
      "Organized meeting schedules and task delegation for team of peers",
      "Communicated with client in the form of weekly meetings discussing progress and technical report updates with visualizations of data in R",
      `Developed and created Tableau dashboard with Bootstrap{" "}
    ${(
      <Link
        color="tealLink"
        href="https://richpluu.github.io/VA_SDOH/index.html"
      >
        webpage{" "}
      </Link>
    )}
    displaying collected data`,
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
];
