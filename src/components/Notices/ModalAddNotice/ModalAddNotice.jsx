import React,{ useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ModalAddNotice = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [TittleAdd, setTittleAdd] = useState("");
  const [petName, setPetName] = useState("");
  const [petBirdth, setPetBirdth] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [, setPetImage] = useState("");
  const [petSex, setPetSex] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [comment, setComment] = useState("");

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add pet</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            {step === 1 ? (
              <Stack spacing={4}>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
                <FormControl>
                  <Stack direction="row" spacing={4}>
                    <Button
                      onClick={() => setSelectedCategory("lost/found")}
                      colorScheme={selectedCategory === "lost/found" ? "orange" : "gray"}
                    >
                     lost/found
                    </Button>
                    <Button
                      onClick={() => setSelectedCategory("in good hands")}
                      colorScheme={selectedCategory === "in good hands" ? "orange" : "gray"}
                    >
                     in good hands
                    </Button>
                    <Button
                      onClick={() => setSelectedCategory("sell")}
                      colorScheme={selectedCategory === "sell" ? "orange" : "gray"}
                    >
                      sell
                    </Button>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel>Tittle of add</FormLabel>
                  <Input placeholder="Type name" value={TittleAdd} onChange={(e) => setTittleAdd(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel>Name pet</FormLabel>
                  <Input placeholder="Type name pet" value={petName} onChange={(e) => setPetName(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel>Date of birth</FormLabel>
                  <Input placeholder="Type date of birth" value={petBirdth} onChange={(e) => setPetBirdth(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel>Breed</FormLabel>
                  <Input placeholder="Type breed" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
                </FormControl>
              </Stack>
            ) : step === 2 ? (
              <Stack spacing={4}>
               <FormControl>
                  <Stack direction="row" spacing={4}>
                    <Button
                      onClick={() => setPetSex("male")}
                      colorScheme={petSex === "male" ? "orange" : "gray"}
                    >
                     Male
                    </Button>
                    <Button
                      onClick={() => setPetSex("female")}
                      colorScheme={petSex === "female" ? "orange" : "gray"}
                    >
                    Female
                    </Button>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel>Location*:</FormLabel>
                  <Input placeholder="Type location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel>Price*:</FormLabel>
                  <Input placeholder="Type price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel>Load the pet’s image:</FormLabel>
                  <Input type="file" onChange={(e) => setPetImage(e.target.files[0])} />
                </FormControl>
                <FormControl>
              <FormLabel>Comments</FormLabel>
              <Textarea
                placeholder="Type comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormControl>
          </Stack>
        ) : null}
      </ModalBody>
      <ModalFooter>
        {step === 1 && (
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
        )}
        {step > 1 && (
          <Button mr={3} onClick={handlePreviousStep}>
            Back
          </Button>
        )}
        {step < 2 ? (
          <Button colorScheme="green" onClick={handleNextStep}>
            Next
          </Button>
        ) : (
          <Button type="submit" colorScheme="green">
            Submit
          </Button>
        )}
      </ModalFooter>
    </form>
  </ModalContent>
</Modal>
);
};

export default ModalAddNotice;