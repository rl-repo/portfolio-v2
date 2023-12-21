import HighlightJS from "../util/HighlightJS.jsx";

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

const sqlCode1 = `SELECT * 
FROM (
    SELECT 
        user_id,
        username,
        CASE
            WHEN COUNT(*) = (SELECT COUNT(*) FROM photos) THEN 1
            ELSE 0
        END as bot_status
        FROM likes
        JOIN users ON users.id = likes.user_id
        GROUP BY user_id) AS temp
WHERE temp.bot_status = 1;`;

const data1 = [
  { id: 5, name: "Aniya_Hackett" },
  { id: 91, name: "Bethany20" },
  { id: 54, name: "Duane60" },
  { id: 14, name: "Jaclyn81" },
  { id: 76, name: "Janelle.Nikolaus81" },
  { id: 57, name: "Julien_Schmidt" },
  { id: 75, name: "Leslie67" },
  { id: 24, name: "Maxwell.Halvorson" },
  { id: 41, name: "Mckenna17" },
  { id: 66, name: "Mike.Auer39" },
  { id: 71, name: "Nia_Haag" },
  { id: 36, name: "Ollie_Ledner37" },
  { id: 21, name: "Rocio33" },
];

const sqlCode2 = `SELECT
  username, 
  COUNT(*) AS num_likes 
FROM users 
INNER JOIN likes 
  ON users.id = likes.user_id 
GROUP BY likes.user_id 
HAVING num_likes = (SELECT Count(*) FROM photos); `;

const data2 = [
  "Aniya_Hackett",
  "Bethany20",
  "Duane60",
  "Jaclyn81",
  "Janelle.Nikolaus81",
  "Julien_Schmidt",
  "Leslie67",
  "Maxwell.Halvorson",
  "Mckenna17",
  "Mike.Auer39",
  "Nia_Haag",
  "Ollie_Ledner37",
  "Rocio33",
];

function Query7() {
  return (
    <Box>
      <Text fontSize="2xl">Query 7</Text>
      <Text>
        Since social media is riddled with bots, this query finds which users
        are bots that likes all user posts. There are two approaches shown
        below:
      </Text>
      <Text>
        1. Creating a new flag where total amount of likes is equal to the total
        amonut of pictures - assumed bots like ALL pictures
      </Text>
      <Text>2 Comparing likes without creating a new flag/column</Text>
      <HighlightJS code={sqlCode1} lang="sql" />
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center">
          <Thead>
            <Tr>
              <Th>user_id</Th>
              <Th>username</Th>
              <Th>bot_status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data1.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.name}</Td>
                <Td>1</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
      <HighlightJS code={sqlCode2} lang="sql" />
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center">
          <Thead>
            <Tr>
              <Th>username</Th>
              <Th>num_likes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data2.map((row) => (
              <Tr key={row}>
                <Td>{row}</Td>
                <Td>257</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}

export default Query7;
