import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Flex,
} from "@chakra-ui/react";

function DashModal({ modalHeader, modalBody, modalImage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Image
        src={modalImage}
        alt={modalHeader}
        onClick={onOpen}
        borderRadius="1%"
        m="5px"
        transition="transform 0.5s"
        _hover={{
          cursor: "pointer",
          // transform: "translateY(-1px)",
          transform: "scale(1.02)",
          // translateY: "-1px",
          // transitionDuration: "2s",
          transitionTimingFunction: "ease-in-out",
          boxShadow: "0 0 10px #a8d4f7",
          borderColor: "#a8d4f7",
        }}
      />
      <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody height="100%">
            <Flex border="1px" justifyContent="center">
              {modalBody}
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DashModal;
