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

const sqlCode = `SELECT (SELECT COUNT(*) FROM photos) / (SELECT COUNT(*) FROM users) AS avg_post;
`;

function Query5() {
  return (
    <Flex pb="5px" direction="column" alignItems="center">
      <Text fontSize="2xl">Query 5</Text>
      <Text align="center">
        How many times does an aveage user post? There were multiple ways to
        approach this e.g. is considered an 'inactive' user -- 0 posts? 0 likes?
        In this instance, simplicity is best. Thus, the query takes into account
        for all users and all posts.
      </Text>
      <Image
        mt="10px"
        mb="10px"
        width={{ lg: "80%", sm: "100%" }}
        src="public/img/queries/query5.png"
        alt="Query 5"
        borderRadius="1%"
      />
    </Flex>
    // <Box pb="5px">
    //   <Text fontSize="2xl">Query 5</Text>
    //   How many times does an aveage user post? There were multiple ways to
    //   approach this e.g. is considered an 'inactive' user -- 0 posts? 0 likes?
    //   In this instance, simplicity is best. Thus, the query takes into account
    //   for all users and all posts.
    //   <HighlightJS code={sqlCode} lang="sql" />
    //   <Card p="5px" m="5px" boxShadow="md" rounded="md">
    //     <Table variant="simple" size="sm" algin="center">
    //       <Thead>
    //         <Tr>
    //           <Th>avg_post</Th>
    //         </Tr>
    //       </Thead>
    //       <Tbody>
    //         <Tr>
    //           <Td>2.5700</Td>
    //         </Tr>
    //       </Tbody>
    //     </Table>
    //   </Card>
    // </Box>
  );
}

export default Query5;
