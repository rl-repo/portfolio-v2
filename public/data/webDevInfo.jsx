import ImageHover from "../../src/components/util/ImageHover";

export const webDevInfo = [
  {
    pic: (
      <video controls autoPlay loop muted width="50%" name="Bankist Website">
        <source src="src/assets/img/WebDev/Bankist_Page.mov" type="video/mp4" />
      </video>
    ),
    title: "Bankist Webpage",
    appLink: "https://rl-repo.github.io/bankist-page/",
    repoLink: "https://github.com/rl-repo/bankist-page",
    caption: "A simple HTML, CSS, and JavaScript webpage for an example bank.",
  },
  {
    pic: (
      <ImageHover
        link="https://rl-repo.github.io/bankist-page/"
        width="auto"
        src="src/assets/img/WebDev/Bankist_App.png"
        alt="Bankist Homescreen"
      />
    ),
    title: "Bankist App",
    appLink: "https://rl-repo.github.io/bankist-page/",
    repoLink: "https://github.com/rl-repo/bankist",
    caption:
      "A webpage application for the previous homepage. Please refer to the repository for information on use.",
  },
  {
    pic: (
      <ImageHover
        link="https://rl-repo.github.io/mapty/"
        width="auto"
        src="src/assets/img/WebDev/Mapty.png"
        alt="Mapty UI"
      />
    ),
    title: "Mapty",
    appLink: "https://rl-repo.github.io/mapty/",
    repoLink: "https://github.com/rl-repo/mapty/",
    caption:
      "Object oriented project with JavaScript using Geolocation API and data. Given user input, the user can track their workouts and view the history of workouts (cycling/walking) on Leaflet map. Updating and refactoring in progress.",
  },
  {
    pic: (
      <ImageHover
        link="https://forkify-rl-repo.netlify.app/"
        width="auto"
        src="src/assets/img/WebDev/Forkify.png"
        alt="Forkify app"
      />
    ),
    title: "Forkify",
    appLink: "https://forkify-rl-repo.netlify.app/",
    repoLink: "https://github.com/rl-repo/Forkify",
    caption:
      "Recipe viewing application that allows users to search recipes from an API, add their own recipes, and bookmark said recipes.",
  },
];
