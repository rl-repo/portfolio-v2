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
        _hover={{
          shadow: "md",
          // transform: "translateY(-5px)",
          // transform: "scale(1.05)",
          // translateY: "-5px",
          // transitionDuration: "0.2s",
          // transitionTimingFunction: "ease-in-out",
          borderColor: "#0070f3",
        }}
        overflow="hidden"
        position="relative"
      >
        {/* <Image
          src="https://bit.ly/dan-abramov"
          opacity="0.1"
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="auto"
          background-size="contain"
          background-repeat="no-repeat"
          _hover={{ opacity: "1.0" }}
        /> */}
        <CardHeader>
          <Flex justifyContent="space-between">
            <Link href={props.link}>
              <Heading size="md">{props.title}</Heading>
            </Link>
            <NavLink
              to={props.link}
              _hover={{
                transform: "translateY(-5px)",
                color: "blue",
              }}
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </NavLink>
          </Flex>
        </CardHeader>

        <CardBody>
          <Text>{props.body}</Text>
        </CardBody>

        <CardFooter>
          <HStack spacing={1}>
            {props.skillTags.map((i) => (
              <Tag size="md" variant="outline" colorScheme="blue" key={i}>
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
