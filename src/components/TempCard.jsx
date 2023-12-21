import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Tag,
  Link,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

import { MdSettings } from "react-icons/md";

function TempCard(props) {
  return (
    <>
      <Card
        maxW="sm"
        variant="outline"
        transition="transform 0.2s"
        _hover={{
          shadow: "md",
          // transform: "translateY(-5px)",
          // transform: "scale(1.05)",
          // translateY: "-5px",
          // transitionDuration: "0.2s",
          // transitionTimingFunction: "ease-in-out",
          // borderColor: "#0070f3",
          // backgroundColor: "rgb(36, 36, 36, 0.8)",
          transform: "scale(1.02)",
          transitionTimingFunction: "ease-in-out",
          boxShadow: "0 0 10px #a8d4f7",
          borderColor: "#a8d4f7",
        }}
        overflow="hidden"
        position="relative"
        bgColor="rgb(36, 36, 36, 0.35)"
        color="white"
      >
        <CardHeader>
          <Flex justifyContent="space-between">
            <Link as={NavLink} to={props.link}>
              <Heading size="md">{props.title}</Heading>
            </Link>
            <Link
              as={NavLink}
              to={props.link}
              _hover={{
                transform: "translateY(-5px)",
                color: "#62cdbb",
              }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
          </Flex>
        </CardHeader>

        <CardBody>
          <Text>{props.body}</Text>
        </CardBody>

        <CardFooter>
          <HStack spacing={1}>
            {props.skillTags.map((i) => (
              <Tag
                color="white"
                size="md"
                variant="outline"
                borderColor="white"
                key={i}
              >
                {i}
              </Tag>
            ))}
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}

export default TempCard;
