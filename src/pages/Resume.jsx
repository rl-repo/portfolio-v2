import { Box, Heading } from "@chakra-ui/react";

import { ScrollRestoration } from "react-router-dom";

const resume = "src/assets/Luu_Richard_Resume_23_Q4.pdf";

function ResumePage() {
  return (
    <div>
      <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
        <Heading as="h2" size="3xl">
          Resume
        </Heading>
      </Box>
      <Box bg="tealBG" rounded="md" w="100%" height="85vh" p={4} m={2}>
        <object
          data={resume}
          type="application/pdf"
          width="100%"
          height="100%"
        ></object>
      </Box>
      <ScrollRestoration />
    </div>
  );
}

export default ResumePage;
