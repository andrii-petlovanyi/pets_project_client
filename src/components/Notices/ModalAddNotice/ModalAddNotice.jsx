import React,{ useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Textarea,
  Heading,
  IconButton,
  Text,
  Icon,
  FormErrorMessage,
  
} from "@chakra-ui/react";
import { MdClose } from 'react-icons/md';
import { TfiPlus } from 'react-icons/tfi';

// eslint-disable-next-line react/prop-types
const ModalAddNotice = ({ isOpen, onClose }) => {
  

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [TittleAdd, setTittleAdd] = useState("");
  const [petName, setPetName] = useState("");
  const [petBirdth, setPetBirdth] = useState("");
  const [petBreed, setPetBreed] = useState("");
  // const [, setPetImage] = useState("");
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
    <Modal isOpen={isOpen} onClose={onClose} size={'custom'}>
      <ModalOverlay />
      <ModalContent  borderRadius={'40px'}>
        <Heading
          as={'h2'}
          variant={'modalAddTitle'}
          textAlign={'center'}
          mb={'20px'}
        >
          Add pet
        </Heading>
        <IconButton
          position={'absolute'}
          top={{ base: '20px', xl: '24px' }}
          right={{ base: '20px', xl: '24px' }}
          icon={<MdClose />}
          variant={'secondIB'}
          onClick={onClose}
        />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            {step === 1 ? (
              <Stack spacing={4}>
                <Text variant={'noticeModalText'}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
                <FormControl>
                  <Stack display="flex" flexWrap='wrap' alignItems="baseline" flexDirection='row' gap='12px'>
                    <Button
                      w={{ base: '131px', lg: '162px' }} h={{ base: '35px', lg: '47px' }}
                      fontSize={{ base: '14px', lg: '20px' }}
                      onClick={() => setSelectedCategory("lost/found")}
                      variant={selectedCategory === "lost/found" ? "fullBGBtn" : "outlineTabBtn"}
                    >
                     lost/found
                    </Button>
                    <Button
                      w={{ base: '155px', lg: '197px' }} h={{ base: '35px', lg: '47px' }}
                      fontSize={{ base: '14px', lg: '20px' }}
                      onClick={() => setSelectedCategory("in good hands")}
                      variant={selectedCategory === "in good hands" ? "fullBGBtn" : "outlineTabBtn"}
                    >
                     in good hands
                    </Button>
                    <Button
                      w={{ base: '81', lg: '91px' }} h={{ base: '35px', lg: '47px' }}
                      fontSize={{ base: '14px', lg: '20px' }}
                      onClick={() => setSelectedCategory("sell")}
                      variant={selectedCategory === "sell" ? "fullBGBtn" : "outlineTabBtn"}
                    >
                      sell
                    </Button>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel ><Text variant={'noticesInputsHead'}>Tittle of add</Text></FormLabel>
                  <Input variant={'addNoticeForm'} placeholder="Type name" value={TittleAdd} onChange={(e) => setTittleAdd(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel><Text variant={'noticesInputsHead'}>Name pet</Text></FormLabel>
                  <Input variant={'addNoticeForm'} placeholder="Type name pet" value={petName} onChange={(e) => setPetName(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel><Text variant={'noticesInputsHead'}>Date of birth</Text></FormLabel>
                  <Input variant={'addNoticeForm'} placeholder="Type date of birth" value={petBirdth} onChange={(e) => setPetBirdth(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel><Text variant={'noticesInputsHead'}>Breed</Text></FormLabel>
                  <Input variant={'addNoticeForm'} placeholder="Type breed" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
                </FormControl>
              </Stack>
            ) : step === 2 ? (
              <Stack spacing={4}>
               <FormControl>
               <FormLabel><Text variant={'noticesInputsHead'}>The sex*:</Text></FormLabel>
                  <Stack direction="row" spacing={4}>
                    <Button
                      textColor={petSex === "male" &&'accentOrange'}
                      variant={'noticePetSexBtn'}
                      onClick={() => setPetSex("male")}
                      
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#23c2ef" d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4h6ZM9.5 11q-1.45 0-2.475 1.025T6 14.5q0 1.45 1.025 2.475T9.5 18q1.45 0 2.475-1.025T13 14.5q0-1.45-1.025-2.475T9.5 11Z"/></svg>
                    <Text>Male</Text>
                    </Button>
                    <Button
                      textColor={petSex === "female" &&'accentOrange'}
                      variant={'noticePetSexBtn'}
                      onClick={() => setPetSex("female")}
                      
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#FF8787" d="M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4q2.275 0 3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2h-2Zm1-8q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Z"/></svg>
                    <Text>Female</Text>
                    </Button>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel><Text variant={'noticesInputsHead'}>Location*:</Text></FormLabel>
                  <Input variant={'addNoticeForm'} placeholder="Type location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormControl>
                {selectedCategory === 'sell' && (
                   <FormControl>
                   <FormLabel><Text variant={'noticesInputsHead'}>Price*:</Text></FormLabel>
                   <Input variant={'addNoticeForm'} placeholder="Type price" value={price} onChange={(e) => setPrice(e.target.value)} />
                 </FormControl>
                )}
                  <FormLabel><Text variant={'noticesInputsHead'}>Load the pet’s image:</Text></FormLabel>
                  <FormControl
                                display={'flex'}
                                
                                position={'relative'}
                                // isInvalid={avatarError}
                            >
                                <FormLabel
                                    htmlFor="avatarURL"
                                    // border={avatarError ? '1px solid red' : ''}
                                    width={{ base: '208px', md: '182px' }}
                                    height={{ base: '208px', md: '182px' }}
                                    bg={'mainColor'}
                                    borderRadius={'40px'}
                                    margin={'0'}
                                ></FormLabel>
                                <Input
                                    id="avatarURL"
                                    display={'none'}
                                    type="file"
                                    // {...register('avatarURL')}
                                />
                                {/* {newImage && newImage[0] ? (
                                    <Image
                                        pointerEvents={'none'}
                                        borderRadius={'40px'}
                                        position={'absolute'}
                                        top={'50%'}
                                        left={'50%'}
                                        transform={'translate(-50%, -50%)'}
                                        width={{ base: '208px', md: '182px' }}
                                        height={{ base: '208px', md: '182px' }}
                                        src={URL.createObjectURL(newImage[0])}
                                        boxSize="182px"
                                        objectFit="cover"
                                    />
                                ) : ( */}
                                    <Icon
                                        as={TfiPlus}
                                        pointerEvents={'none'}
                                        position={'absolute'}
                                        top={'50%'}
                                        left={'22%'}
                                        transform={'translate(-50%, -50%)'}
                                        fontSize={'48px'}
                                    />
                               {/* )} */}
                                <FormErrorMessage
                                    position={'absolute'}
                                    bottom={'-20px'}
                                    left={'50%'}
                                    transform={'translateX(-50%)'}
                                >
                                    {/* {avatarError} */}
                                </FormErrorMessage>
                            </FormControl>
                <FormControl>
              <FormLabel><Text variant={'noticesInputsHead'}>Comments</Text></FormLabel>
              <Textarea
              variant={'addForm'}
                placeholder="Type comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormControl>
          </Stack>
        ) : null}
      </ModalBody>
      <ModalFooter mt={'40px'} flexDirection={{base: 'column', lg: 'row'}} alignItems={'baseline'} gap={{base: '12px', lg: '0px'}}>
        {step === 1 && (
          <Button mr={'20px'} w={{ base: '240px', lg: '180px' }} h={{ base: '40px', lg: '44px' }}  onClick={onClose} variant={"outlineTabBtn"}>
            Cancel
          </Button>
        )}
        {step > 1 && (
          <Button mr={{base: '0px', md: '20px'}}  w={{ base: '240px', lg: '180px' }} h={{ base: '40px', lg: '44px' }}  onClick={handlePreviousStep} variant={"outlineTabBtn"}>
            Back
          </Button>
        )}
        {step < 2 ? (
          <Button  w={{ base: '240px', lg: '180px' }} h={{ base: '40px', lg: '44px' }}  variant={'fullBGBtn'} onClick={handleNextStep}>
            Next
          </Button>
        ) : (
          <Button  w={{ base: '240px', lg: '180px' }} h={{ base: '40px', lg: '44px' }} type="submit" variant={'fullBGBtn'}>
            Done
          </Button>
        )}
      </ModalFooter>
    </form>
  </ModalContent>
</Modal>
);
};

export default ModalAddNotice;