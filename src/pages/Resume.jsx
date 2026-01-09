import { Box, Heading } from "@chakra-ui/react";

import { ScrollRestoration } from "react-router-dom";

const resume =
  "https://drive.google.com/file/d/1kmyL9wETLEtUjs8iEr6gyruJl24af90q/view";

function ResumePage() {
  return (
    <div>
      <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl">
          Resume
        </Heading>
      </Box>
      <Box bg="tealBG" rounded="md" w="100%" height="85vh" p={4} m={2}>
        {/* <object
          data={resume}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object> */}
        <iframe
          src="https://drive.google.com/file/d/1C_wg0Tq0m2u1chLJqC7cp7vFMs2iO091/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </Box>
      <ScrollRestoration />
    </div>
  );
}

export default ResumePage;
