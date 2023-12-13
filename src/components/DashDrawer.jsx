import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { useRef } from "react";

function DashDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <iframe
              // src="https://public.tableau.com/views/ExampleDashboard_16771865883700/Dashboard1?:showVizHome=no&:embed=true"
              src="https://public.tableau.com/views/ExampleDashboard_16771865883700/Dashboard1?:language=en-US&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link:showVizHome=no&:embed=true"
              width="100%"
              height="700px"
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DashDrawer;
