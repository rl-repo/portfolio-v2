// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// 3. extend the theme
// const theme = extendTheme({ config });

const theme = extendTheme({
  colors: { tealBG: "rgb(111, 175, 227, 0.35)", tealLink: "#62cdbb" },

  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "white",
      },
    }),
  },
});

export default theme;
