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
  username,
  image_url 
FROM users
LEFT JOIN photos 
  ON users.id = photos.user_id
WHERE image_url IS NULL;`;

const data = [
  "Aniya_Hackett",
  "Bartholome.Bernhard",
  "Bethany20",
  "Darby_Herzog",
  "David.Osinski47",
  "Duane60",
  "Esmeralda.Mraz57",
  "Esther.Zulauf61",
  "Franco_Keebler64",
  "Hulda.Macejkovic",
  "Jaclyn81",
  "Janelle.Nikolaus81",
  "Jessyca_West",
  "Julien_Schmidt",
  "Kasandra_Homenick",
  "Leslie67",
  "Linnea59",
  "Maxwell.Halvorson",
  "Mckenna17",
  "Mike.Auer39",
  "Morgan.Kassulke",
  "Nia_Haag",
  "Ollie_Ledner37",
  "Pearl7",
  "Rocio33",
  "Tierra.Trantow ",
];

function Query3() {
  return (
    <Flex pb="5px" direction="column" alignItems="center">
      <Text fontSize="2xl">Query 3</Text>
      <Text align="center">
        Find inactive users, defined by zero pictures posted. Alternatively,
        query where photo.id is null.
      </Text>
      <Image
        mt="10px"
        mb="10px"
        width={{ lg: "50%", sm: "100%" }}
        src="https://res.cloudinary.com/dwhkrpxcy/image/upload/v1739324537/Portfolio/gfn03kgtnspcuhsjlmda.png"
        alt="Query 3"
        borderRadius="1%"
      />
    </Flex>
    // <Box pb="5px">
    //   <Text fontSize="2xl">Query 3</Text>
    //   Find inactive users, defined by zero pictures posted. Alternatively, query
    //   where photo.id is null.
    //   <HighlightJS code={sqlCode} lang="sql" />
    //   <Card p="5px" m="5px" boxShadow="md" rounded="md">
    //     <Table variant="simple" size="sm" algin="center">
    //       <Thead>
    //         <Tr>
    //           <Th>col1</Th>
    //           <Th>col2</Th>
    //         </Tr>
    //       </Thead>
    //       <Tbody>
    //         {data.map((row) => (
    //           <Tr key={row}>
    //             <Td>{row}</Td>
    //             <Td>NULL</Td>
    //           </Tr>
    //         ))}
    //       </Tbody>
    //     </Table>
    //   </Card>
    // </Box>
  );
}

export default Query3;
