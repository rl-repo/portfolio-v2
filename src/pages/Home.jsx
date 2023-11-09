import Education from "../components/Education.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";

import ava from "../assets/img/pfp.png";

import classes from "./Home.module.css";

function HomePage() {
  return (
    <div>
      <img src={ava} alt="Ava" />
      {/* <div className={classes.parallax}></div>
      <div className={classes.temp}>s</div>
      <div className={classes.parallax2}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}

      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default HomePage;
