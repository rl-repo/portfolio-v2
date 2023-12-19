import HighlightJS from "../HighlightJS.jsx";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Card,
  Text,
} from "@chakra-ui/react";

const sqlCode = `SELECT (SELECT COUNT(*) FROM photos) / (SELECT COUNT(*) FROM users) AS avg_post;
`;

function Query5() {
  return (
    <Box pb="5px">
      <Text fontSize="2xl">Query 5</Text>
      How many times does an aveage user post? There were multiple ways to
      approach this e.g. is considered an 'inactive' user -- 0 posts? 0 likes?
      In this instance, simplicity is best. Thus, the query takes into account
      for all users and all posts.
      <HighlightJS code={sqlCode} lang="sql" />
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center">
          <Thead>
            <Tr>
              <Th>avg_post</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2.5700</Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}

export default Query5;
