import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { tableauDashes } from "../../public/data/tableauDashes.jsx";

import DashModal from "./util/DashModal.jsx";

function TableauDash() {
  return (
    <Box bg="tealBG" rounded="md" w="100%" p={4} m={2}>
      <Heading as="h2" size="xl">
        Tableau
      </Heading>
      <Divider />
      {tableauDashes.map((dash) => (
        <>
          <DashModal
            modalImage={dash.modal.img}
            modalHeader={dash.title}
            modalBody={
              <iframe src={dash.modal.src} width="100%" height="750px" />
            }
          />

          <Text as="b">{dash.title}</Text>
          <Text mb="5px">{dash.caption}</Text>

          <Divider />
        </>
      ))}
    </Box>
  );
}

export default TableauDash;
