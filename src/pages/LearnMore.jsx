import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
// import { Button, Image, FormLabel, Text } from '@chakra-ui/react';


function LearnMore() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        const OverlayTwo = () => (
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        )
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Image />
              <Title />
              <FormLabel>Name:</FormLabel>
              <FormLabel>Birthday:</FormLabel>
              <FormLabel>Breed:</FormLabel>
              <FormLabel>Place: </FormLabel>
              <FormLabel>The sex: </FormLabel>
              <FormLabel>Email: </FormLabel>
              <FormLabel>Phone: </FormLabel>
              <Text>Coments:</Text>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Add to
            </Button>
            <Button onClick={onOpen}>Contact</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default LearnMore;