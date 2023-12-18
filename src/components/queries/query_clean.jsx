import PrismCode from "../PrismCode.jsx";

import { Table, Thead, Tbody, Tr, Th, Td, Box, Card } from "@chakra-ui/react";

const sqlCode = ``;

const data = [];

function Query() {
  return (
    <Box>
      - Getting five oldest users.
      <PrismCode code={sqlCode} lang="sql" />
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center">
          <Thead>
            <Tr>
              <Th>col1</Th>
              <Th>col2</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr key={row.var}>
                <Td>{row.var}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}

export default Query;
