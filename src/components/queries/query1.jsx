import HighlightJS from "../util/HighlightJS.jsx";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  Card,
  Center,
  Code,
  Flex,
  Image,
} from "@chakra-ui/react";

const sqlCode1 = `SELECT 
  username, 
  created_at,
  CONCAT(TIMESTAMPDIFF(DAY, created_at, NOW()), ' days old') AS age
FROM users
ORDER BY created_at
LIMIT 5;`;

//

const data = [
  { username: "Darby_Herzog", created: "2016-05-06 00:14:21", age: 2492 },
  { username: "Emilio_Bernier52", created: "2016-05-06 13:04:30", age: 2492 },
  { username: "Elenor88", created: " 2016-05-08 01:30:41 ", age: 2490 },
  { username: "Nicole71", created: "2016-05-09 17:30:22", age: 2488 },
  { username: "Jordyn.Jacobson2", created: "2016-05-14 07:56:26", age: 2484 },
];

export default function Query1() {
  return (
    <Flex pb="5px" direction="column" alignItems="center">
      <Text fontSize="2xl">Query 1</Text>
      <Text>Getting five oldest users.</Text>
      <Image
        mt="10px"
        mb="10px"
        width={{ lg: "50%", sm: "100%" }}
        src="https://res.cloudinary.com/dwhkrpxcy/image/upload/v1739324537/Portfolio/fl9fx8n94ucnzrg58jut.png"
        alt="Query 1"
        borderRadius="1%"
      />
      {/* <Card p="5px" m="5px" boxShadow="md" maxW="60%" rounded="md"></Card> */}
      {/* <Code>{sqlCode1}</Code> */}

      {/* <HighlightJS code={sqlCode1} lang="sql" /> */}
      {/* <Box align="center">
        <Markdown remarkPlugins={[remarkGfm]}>{mdTable}</Markdown>
      </Box> */}
      {/*       
      <Card p="5px" m="5px" boxShadow="md" rounded="md">
        <Table variant="simple" size="sm" algin="center" p="5px">
          <Thead>
            <Tr>
              <Th>username</Th>
              <Th>created at</Th>
              <Th>age</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr key="1">
              <Td>asd</Td>
              <Td>asd2</Td>
              <Td>3 days old</Td>
            </Tr>
            {data.map((user) => (
              <Tr key={user.username}>
                <Td>{user.username}</Td>
                <Td>{user.created}</Td>
                <Td>{user.age} days old</Td>
              </Tr>
            ))} 
          </Tbody>
        </Table>
      </Card> */}
    </Flex>
  );
}

// const mdTable = `
// // | username         | created_at          | age           |
// // |------------------|---------------------|---------------|
// // | Darby_Herzog     | 2016-05-06 00:14:21 | 2492 days old |
// // | Emilio_Bernier52 | 2016-05-06 13:04:30 | 2492 days old |
// // | Elenor88         | 2016-05-08 01:30:41 | 2490 days old |
// // | Nicole71         | 2016-05-09 17:30:22 | 2488 days old |
// // | Jordyn.Jacobson2 &nbsp;| 2016-05-14 07:56:26 &nbsp;| 2484 days old |
// // `;
