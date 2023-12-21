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

const sqlCode = `SELECT
  tags.tag_name,
  COUNT(*) AS tag_count
FROM photo_tags
JOIN tags 
  ON photo_tags.tag_id = tags.id
GROUP BY tags.id
ORDER BY tag_count DESC
LIMIT 5;`;

const data = [
  { name: "smile", count: 59 },
  { name: "beach", count: 42 },
  { name: "party", count: 39 },
  { name: "fun", count: 38 },
  { name: "concert", count: 24 },
];

function Query() {
  return (
    <Box pb="5px">
      <Text fontSize="2xl">Query 6</Text>
      Find the top five most common hashtags. An example application of this
      information is to use these tags in order to increase the chances of your
      picture to trend through the explore page. However, this data did include
      ties so the top 5 can be extended to top 8.
      <HighlightJS code={sqlCode} lang="sql" />
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center">
          <Thead>
            <Tr>
              <Th>tag_name</Th>
              <Th>tag_count</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr key={row.name}>
                <Td>{row.name}</Td>
                <Td>{row.count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}

export default Query;
