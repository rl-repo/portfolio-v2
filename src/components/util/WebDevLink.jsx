import { Link, Flex, Text, Box } from "@chakra-ui/react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function WebDevLink(props) {
  return (
    <Box mt="5px" mb="5px">
      <Link href={props.appLink}>{props.pic}</Link>
      <Flex align="center">
        <Link as="b" href={props.appLink}>
          {props.title}
        </Link>
        &nbsp;
        <Link
          ml="3px"
          as={NavLink}
          to={props.appLink}
          _hover={{
            transform: "translateY(-5px)",
            color: "#62cdbb",
          }}
        >
          <FaArrowUpRightFromSquare />
        </Link>
        <Link
          ml="6px"
          as={NavLink}
          to={props.repoLink}
          _hover={{
            transform: "translateY(-5px)",
            color: "#62cdbb",
          }}
        >
          <FaGithub />
        </Link>
      </Flex>
      <Text align="left">{props.caption}</Text>
    </Box>
  );
}

export default WebDevLink;
