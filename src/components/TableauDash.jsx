import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Flex,
  Link,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

import DashModal from "./DashModal.jsx";

const dashes = [
  {
    modal: {
      img: "src/assets/img/dashboards/demo_dash.png",
      src: "https://public.tableau.com/views/ExampleDashboard_16771865883700/Dashboard1?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true",
    },
    title: "Dashboard 1",
    caption: <Text>Simple dashboard from Tableau Public sample data.</Text>,
  },
  {
    modal: {
      img: "src/assets/img/dashboards/cc_dash.png",
      src: "https://public.tableau.com/views/Credit_Card_Customer_16883650798190/Dashboard1?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true",
    },
    title: "Dashboard 2",
    caption: (
      <Text>
        Another Tableau dashboard with credit card customer data from Kaggle.
      </Text>
    ),
  },
  {
    modal: {
      img: "src/assets/img/dashboards/vg_sales.png",
      src: "https://public.tableau.com/views/VGDash/VGDash?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true",
    },
    title: "Dashboard 2",
    caption: (
      <Text>
        The third Tableau dashboard on Video Game sales data, with various
        filter functions.
      </Text>
    ),
  },
];

function TableauDash() {
  return (
    <Box bg="rgb(111, 175, 227, 0.35)" rounded="md" w="100%" p={4} m={2}>
      <Heading as="h2" size="xl" noOfLines={1}>
        Tableau
      </Heading>
      {dashes.map((dash) => (
        <>
          <DashModal
            modalImage={dash.modal.img}
            modalHeader={dash.title}
            modalBody={
              <iframe src={dash.modal.src} width="100%" height="750px" />
            }
          />

          <Text as="b">{dash.title}</Text>
          {dash.caption}
        </>
      ))}
    </Box>
  );
}

export default TableauDash;

{
  /* <DashModal
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

      <Text as="b">Dashboard 1</Text>
      <Text>Simple dashboard from Tableau Public sample data.</Text>
  
  
  // <Link
  //         as={NavLink}
  //         to="https://public.tableau.com/views/VGDash/VGDash?:language=en-US&:embed_code_version=3&:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link"
  //         _hover={{
  //           transform: "translateY(-5px)",
  //           color: "#62cdbb",
  //         }}
  //       >
  //         <FontAwesomeIcon icon={faUpRightFromSquare} />
  //       </Link> 

   */
}
