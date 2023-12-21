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
  Tooltip,
} from "@chakra-ui/react";

import classes from "./TempNav.module.css";

import { courses } from "../../public/data/courses";

const modalTabs = courses.map((item, i) => <Tab key={i}>{item.major}</Tab>);

const tabCourses = courses.map((item, j) => (
  <TabPanel key={item.major}>
    <UnorderedList key={item.major}>
      {item.courseList.map((item2) => (
        <ListItem key={item2}>{item2}</ListItem>
      ))}
    </UnorderedList>
  </TabPanel>
));

function ClassesModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text as="i" onClick={onOpen} className={classes["gradient-text"]}>
        <Tooltip label="Click me!" placement="top">
          Virginia Polytechnic Institute & State University (Virginia Tech)
        </Tooltip>
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>Course List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>{modalTabs}</TabList>
              <TabPanels>{tabCourses}</TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ClassesModal;
