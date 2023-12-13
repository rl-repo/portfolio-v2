import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Flex,
  Link,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

import DashModal from "./DashModal.jsx";
import DashDrawer from "./DashDrawer.jsx";

function TableauDash() {
  return (
    <Box
      bg="rgb(111, 175, 227, 0.35)"
      rounded="md"
      w="100%"
      p={4}
      color="white"
      m={2}
    >
      <Heading as="h2" size="xl" noOfLines={1}>
        Tableau
      </Heading>
      <DashModal
        modalImage={"src/assets/img/dashboards/demo_dash.png"}
        modalHeader={"Dashboard 1"}
        modalBody={
          <iframe
            src="https://public.tableau.com/views/ExampleDashboard_16771865883700/Dashboard1?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
            width="100%"
            height="750px"
          />
        }
      />

      <Text>Dashboard 1</Text>
      <Text>Simple dashboard from Tableau Public sample data.</Text>

      <Divider />

      <DashModal
        modalImage={"src/assets/img/dashboards/cc_dash.png"}
        modalHeader={"Dashboard 2"}
        modalBody={
          <iframe
            src="https://public.tableau.com/views/Credit_Card_Customer_16883650798190/Dashboard1?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
            width="100%"
            height="750px"
          />
        }
      />

      <Text>Dashboard 2</Text>
      <Text>
        Another Tableau dashboard with credit card customer data from Kaggle.
      </Text>
      <Divider />

      <DashModal
        modalImage={"src/assets/img/dashboards/vg_sales.png"}
        modalHeader={"Dashboard 3"}
        modalBody={
          <iframe
            src="https://public.tableau.com/views/VGDash/VGDash?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
            width="100%"
            height="750px"
          />
        }
      />
      <Flex>
        <Text mr="10px">Dashboard 3</Text>
        <Link
          // as={NavLink}
          to="http://google.com/"
          _hover={{
            transform: "translateY(-5px)",
            color: "blue",
          }}
        >
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </Link>
      </Flex>
      <Text>
        The third Tableau dashboard on Video Game sales data, with various
        filter functions.{" "}
      </Text>
    </Box>
  );
}

export default TableauDash;
