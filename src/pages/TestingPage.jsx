import {
  Container,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import NavButton from "../components/NavButton";

import c from "./TestingPage.module.css";

function TestingPage() {
  return (
    <Container>
      {/* <div className={c.sti_container}>
        <button className={c.btn}>
          <span className={c["btn-icon"]}>
            <i>😊</i>
          </span>
          <span className={c["btn-text"]}>&nbsp;Home</span>
        </button>
      </div>
      <p> sad</p> */}

      <Flex direction="column" justify="space-around" gap="10px">
        <NavButton icon="😊" text="Education" />
        <NavButton icon="😊" text="Experience" />
        <NavButton icon="😊" text="Skills" />
        <NavButton icon="😊" text="Projects" />
      </Flex>
    </Container>
  );
}

export default TestingPage;

// https://stackoverflow.com/questions/60926750/css-expand-button-width-smoothly-and-display-text-on-hover

// https://codepen.io/lucasfads/pen/QWwjGjv
