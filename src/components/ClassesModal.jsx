import {
  useDisclosure,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import classes from "./TempNav.module.css";

function ClassesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text as="i" onClick={onOpen} className={classes["gradient-text"]}>
        Virginia Polytechnic Institute & State University (Virginia Tech)
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent color="black">
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
                    <ListItem>4204 - Experimental Design</ListItem>

                    <ListItem>4214 - Methods of Regression Analysis</ListItem>
                  </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ClassesModal;
