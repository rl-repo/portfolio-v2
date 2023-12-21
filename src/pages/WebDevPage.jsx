import { Box, Heading, Text, Divider } from "@chakra-ui/react";

import { ScrollRestoration } from "react-router-dom";

import WebDevLink from "../components/WebDevLink";
import { webDevInfo } from "../../public/data/webdevInfo.jsx";

function WebDevPage() {
  return (
    <div>
      <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Web Development Projects
        </Heading>
        <Text>
          A collection of projects done using a mix of JavaScript, HTML, and
          CSS. Additional frameworks and libraries (NodeJS, React, etc.) are
          listed when used.
        </Text>
      </Box>

      <Box bg="tealBG" rounded="md" w="100%" p={4} m={2} align="center">
        <Divider />
        {webDevInfo.map((row) => (
          <Box>
            <WebDevLink
              pic={row.pic}
              title={row.title}
              appLink={row.appLink}
              repoLink={row.repoLink}
              caption={row.caption}
            />
            <Divider />
          </Box>
        ))}
      </Box>

      <ScrollRestoration />
    </div>
  );
}

export default WebDevPage;
