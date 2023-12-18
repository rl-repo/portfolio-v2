import PrismCode from "../PrismCode.jsx";

import { Table, Thead, Tbody, Tr, Th, Td, Box, Card } from "@chakra-ui/react";

const sqlCode = `SELECT 
  DATE_FORMAT(DATE(created_at), '%W') AS day_of_week,
  COUNT(*) AS total
FROM users
GROUP BY DATE_FORMAT(DATE(created_at), '%W')
ORDER BY total DESC;`;

const data = [
  { day: "Thursday", total: 16 },
  { day: "Sunday", total: 16 },
  { day: "Friday", total: 15 },
  { day: "Tuesday", total: 14 },
  { day: "Monday", total: 14 },
  { day: "Wednesday", total: 13 },
  { day: "Saturday", total: 12 },
];

function Query2() {
  return (
    <Box>
      - Determining which day of the week is most popular. Can also extract day
      of week in name with DAYNAME(created_at) instead.
      <PrismCode code={sqlCode} lang="sql" />
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center">
          <Thead>
            <Tr>
              <Th>day_of_week</Th>
              <Th>col2</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr key={row.day}>
                <Td>{row.day}</Td>
                <Td>{row.total}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}

export default Query2;
