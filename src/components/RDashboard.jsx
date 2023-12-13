import { Box, Heading, Image, Text, Divider } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";

function RDashboards() {
  return (
    <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
      <Heading as="h2" size="3xl" noOfLines={1}>
        R / R Studio
      </Heading>
      <Image
        src="src/assets/img/dashboards/iris_shiny.png"
        alt="Iris Classification"
        borderRadius="1%"
        m="5px"
      />

      <Text>Iris Classification Dashboard</Text>
      <Text>
        Sample dashboard done in R-Shinny of classic classification data of Iris
        species
      </Text>

      <Divider />

      <Image
        src="src/assets/img/dashboards/balance_v_default.png"
        alt="R Graph 1"
        borderRadius="1%"
        m="5px"
      />

      <Text>R Graph 1</Text>
      <Text>
        Logistic regression plot of the probability of an account defaulting.
      </Text>

      <Divider />

      <Image
        src="src/assets/img/dashboards/donner.png"
        alt="R Graph 1"
        borderRadius="1%"
        m="5px"
      />

      <Text>R Graph 2</Text>
      <Text>A graph predicting Donner Party survivors.</Text>

      <Divider />
      <Carousel>
        <Carousel.Item>
          <p>asds</p>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default RDashboards;
