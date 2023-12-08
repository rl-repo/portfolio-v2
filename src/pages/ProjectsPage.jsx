import { Flex, Box, Text, Heading, Divider, Image } from "@chakra-ui/react";

function ProjectsPage() {
  return (
    <div>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Dashboards & Visualizations
        </Heading>
      </Box>
      <Box bg="lightblue" rounded="md" w="100%" p={4} color="black" m={2}>
        <Heading as="h2" size="xl" noOfLines={1}>
          Tableau
        </Heading>
        {/* <iframe
          src="https://public.tableau.com/views/ExampleDashboard_16771865883700/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true"
          width="100%"
          height="500px"
        /> */}
        <Box>
          <Image
            src="url('src/assets/img/dashboards/demo_dash.png')"
            alt="Dashboard 1"
          />
        </Box>

        <Text>Dashboard 1</Text>
        <Text>Simple dashboard from Tableau Public sample data.</Text>
        {/* {console.log(window.location.href)}
         */}
        <Divider />
        <Text>Dashboard 2</Text>
        <Text>
          Another Tableau dashboard with credit card customer data from Kaggle.{" "}
        </Text>
        <Divider />
        <Text>Dashboard 3</Text>
        <Text>
          The third Tableau dashboard on Video Game sales data, with various
          filter functions.{" "}
        </Text>
      </Box>
      {/*       
      <p>Projects</p>
      <Flex bg="gray.200" justify="space-between">
        <Box w="150px" h="50px" bg="red">
          1
        </Box>
        <Box w="150px" h="50px" bg="blue">
          2
        </Box>
        <Box w="150px" h="50px" bg="green">
          3
        </Box>
        <Box w="150px" h="50px" bg="yellow">
          4
        </Box>
      </Flex> */}
    </div>
  );
}

export default ProjectsPage;
