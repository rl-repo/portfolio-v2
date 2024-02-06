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
  Image,
  Flex,
} from "@chakra-ui/react";

const sqlCode = `SELECT
  image_url,
  u.username,
COUNT(*) AS total_likes
FROM photos
JOIN users u 
  ON u.id = photos.user_id
JOIN likes 
  ON likes.photo_id = photos.id
GROUP BY photos.id
ORDER BY total_likes DESC
LIMIT 5; `;

const data = [
  { url: "jarret.name", username: "Zack_Kemmer93", likes: 48 },
  { url: "celestine.name", username: "Malinda_Streich", likes: 43 },
  { url: "dorcas.biz", username: "Adelle96", likes: 43 },
  { url: " shannon.org", username: "Seth46", likes: 42 },
  { url: "dejon.name", username: "Delpha.Kihn", likes: 41 },
];

function Query4() {
  return (
    <Flex pb="5px" direction="column" alignItems="center">
      <Text fontSize="2xl">Query 4</Text>
      <Text align="center">Pictures/posts with the most likes.</Text>
      <Image
        mt="10px"
        mb="10px"
        width={{ lg: "50%", sm: "100%" }}
        src="public/img/queries/query4.png"
        alt="Query 4"
        borderRadius="1%"
      />
    </Flex>
    // <Box pb="5px">
    //   <Text fontSize="2xl">Query 4</Text>
    //   Pictures/posts with the most likes.
    //   <HighlightJS code={sqlCode} lang="sql" />
    //   <Card p="5px" m="5px" boxShadow="md" rounded="md">
    //     <Table variant="simple" size="sm" algin="center">
    //       <Thead>
    //         <Tr>
    //           <Th>image_url</Th>
    //           <Th>username</Th>
    //           <Th>total_likes</Th>
    //         </Tr>
    //       </Thead>
    //       <Tbody>
    //         {data.map((row) => (
    //           <Tr key={row.username}>
    //             <Td>{row.url}</Td>
    //             <Td>{row.username}</Td>
    //             <Td>{row.likes}</Td>
    //           </Tr>
    //         ))}
    //       </Tbody>
    //     </Table>
    //   </Card>
    // </Box>
  );
}

export default Query4;
