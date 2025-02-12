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
  Flex,
  Image,
} from "@chakra-ui/react";

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
    <Flex pb="5px" direction="column" alignItems="center">
      <Text fontSize="2xl">Query 2</Text>
      <Text align="center">
        Determining which day of the week is most popular. Can also extract day
        of week in name with DAYNAME(created_at)instead.
      </Text>
      <Image
        mt="10px"
        mb="10px"
        width={{ lg: "50%", sm: "100%" }}
        src="https://res.cloudinary.com/dwhkrpxcy/image/upload/v1739324537/Portfolio/crtzdbqs6jwrrpibayim.png"
        alt="Query 2"
        borderRadius="1%"
      />
    </Flex>
    // <Box pb="5px">
    //   <Text fontSize="2xl">Query 2</Text>
    //   Determining which day of the week is most popular. Can also extract day of
    //   week in name with DAYNAME(created_at) instead.
    //   <HighlightJS code={sqlCode} lang="sql" />
    //   <Card p="5px" m="5px" boxShadow="md" rounded="md">
    //     <Table variant="simple" size="sm" algin="center">
    //       <Thead>
    //         <Tr>
    //           <Th>day_of_week</Th>
    //           <Th>col2</Th>
    //         </Tr>
    //       </Thead>
    //       <Tbody>
    //         {data.map((row) => (
    //           <Tr key={row.day}>
    //             <Td>{row.day}</Td>
    //             <Td>{row.total}</Td>
    //           </Tr>
    //         ))}
    //       </Tbody>
    //     </Table>
    //   </Card>
    // </Box>
  );
}

export default Query2;
