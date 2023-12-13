import { Button, useDisclosure, Text } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import classes from "./TempNav.module.css";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // function tempClickTest() {
  //   return console.log("click test");
  // }

  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      {/* <Text onClick={tempClickTest}>asds</Text> */}
      <Text as="i" onClick={onOpen} className={classes["gradient-text"]}>
        Virginia Polytechnic Institute & State University (Virginia Tech)
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Course List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>CMDA</Tab>
                <Tab>Computer Science</Tab>
                <Tab>Mathematics</Tab>
                <Tab>Statistics</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>
                      2005/2006 - Integrated Quantitative Sciences
                    </ListItem>
                    <ListItem>
                      {" "}
                      3605/3606 - Math Modeling: Methods & Tools
                    </ListItem>
                    <ListItem>
                      3634 - Computer Science Foundations for CMDA
                    </ListItem>
                    <ListItem>
                      3654 - Intro Data Analytics & Visualizations
                    </ListItem>
                    <ListItem>
                      4654 - Inetermediate Data Analyltics & Machine Learning
                    </ListItem>
                    <ListItem>4864 - CMDA Capstone</ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>
                      2114 - Software Design & Data Structures
                    </ListItem>
                    <ListItem>2505 - Computer Organization</ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>2534 - Discrete Mathematics</ListItem>
                    <ListItem>3134 - Applied Combinatorics</ListItem>
                    <ListItem>4175 - Cryptography</ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>4214 - Methods of Regression Analysis</ListItem>
                    <ListItem>4204 - Experimental Design</ListItem>
                  </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
export default BasicUsage;
