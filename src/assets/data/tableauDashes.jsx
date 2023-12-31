import { Text } from "@chakra-ui/react";

export const tableauDashes = [
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
