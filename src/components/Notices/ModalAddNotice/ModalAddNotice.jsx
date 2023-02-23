import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { birthdayRegExp } from '../../../services/validation';
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
} from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { TfiPlus } from 'react-icons/tfi';
// import noticesApiSlice, {
//   useAddNoticesMutation,
// } from "../../../redux/notices/noticesApiSlice";
// import { useDispatch } from 'react-redux';

const schemaStep1 = yup.object().shape({
  selectedCategory: yup.string().required('Category is required'),
  TittleAdd: yup
    .string()
    .trim()
    .min(2, 'Minimal title length is 2 symbols')
    .max(32, 'Max title length is 32 symbols')
    .required('Title is required'),
  petName: yup
    .string()
    .trim()
    .min(2, 'Minimal pet name length is 2 symbols')
    .max(32, 'Max pet name length is 32 symbols')
    .required('Pet name is required'),
  petBirth: yup
    .string()
    .matches(birthdayRegExp, 'Birthday must be in format: 01.01.2000')
    .required('Birthday is required'),
  petBreed: yup
    .string()
    .trim()
    .min(2, 'Minimal breed length is 2 symbols')
    .max(32, 'Max breed length is 32 symbols')
    .required('Breed is required'),
});

const schemaStep2 = yup.object().shape({
  location: yup
    .string()
    .trim()
    .min(2, 'Minimal location length is 2 symbols')
    .max(30, 'Max location length is 30 symbols')
    .required('Location is required'),
  price: yup
    .string()
    .trim()
    .min(1, 'Minimal price length is 1 symbols')
    .max(100, 'Max price length is 100 symbols'),
  comment: yup
    .string()
    .trim()
    .min(10, 'Minimal password length is 10 symbols')
    .max(320, 'Max password length is 320 symbols')
    .required('Comment is required'),
});

// eslint-disable-next-line react/prop-types
const ModalAddNotice = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [TittleAdd, setTittleAdd] = useState('');
  const [petName, setPetName] = useState('');
  const [petBirdth, setPetBirdth] = useState('');
  const [petBreed, setPetBreed] = useState('');
  // const [, setPetImage] = useState("");
  const [petSex, setPetSex] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [comment, setComment] = useState('');

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  // const [addNotice, { isLoading }] = useAddNoticesMutation();
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    // reset,
  } = useForm({
    resolver: yupResolver(step === 1 ? schemaStep1 : schemaStep2),
  });

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('category', data.selectedCategory);
    formData.append('title', data.TittleAdd);
    formData.append('petName', data.petName);
    formData.append('birth', data.petBirdth);
    formData.append('breed', data.petBreed);
    formData.append('petSex', data.petSex);
    formData.append('location', data.location);
    formData.append('petImage', data.avatarURL[0]);
    selectedCategory === 'sell' && formData.append('price', data.price);
    formData.append('comments', data.comment);
    console.log('formData', formData);
    // try {
    //   const { data: res, error } = await addNotice(formData);
    //   if (error) return console.log(error);
    //   // dispatch(noticesApiSlice.util.invalidateTags(['user']));
    //   console.log(res);
    //   onClose();
    //   reset();
    //   setStep(1);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'custom'}>
      <ModalOverlay />
      <ModalContent borderRadius={'40px'}>
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
        <ModalBody>
          {step === 1 ? (
            <Stack
              as={'form'}
              onSubmit={handleSubmit(handleNextStep)}
              spacing={4}
            >
              <Text variant={'noticeModalText'}>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur{' '}
              </Text>
              <FormControl isInvalid={errors.selectedCategory}>
                <Stack
                  display="flex"
                  flexWrap="wrap"
                  alignItems="baseline"
                  flexDirection="row"
                  gap="12px"
                >
                  <Button
                    w={{ base: '131px', lg: '162px' }}
                    h={{ base: '35px', lg: '47px' }}
                    fontSize={{ base: '14px', lg: '20px' }}
                    onClick={() => setSelectedCategory('lost/found')}
                    variant={
                      selectedCategory === 'lost/found'
                        ? 'fullBGBtn'
                        : 'outlineTabBtn'
                    }
                    {...register('selectedCategory')}
                  >
                    lost/found
                  </Button>
                  <Button
                    w={{ base: '155px', lg: '197px' }}
                    h={{ base: '35px', lg: '47px' }}
                    fontSize={{ base: '14px', lg: '20px' }}
                    onClick={() => setSelectedCategory('in good hands')}
                    variant={
                      selectedCategory === 'in good hands'
                        ? 'fullBGBtn'
                        : 'outlineTabBtn'
                    }
                    {...register('selectedCategory')}
                  >
                    in good hands
                  </Button>
                  <Button
                    w={{ base: '81', lg: '91px' }}
                    h={{ base: '35px', lg: '47px' }}
                    fontSize={{ base: '14px', lg: '20px' }}
                    onClick={() => setSelectedCategory('sell')}
                    variant={
                      selectedCategory === 'sell'
                        ? 'fullBGBtn'
                        : 'outlineTabBtn'
                    }
                    {...register('selectedCategory')}
                  >
                    sell
                  </Button>
                </Stack>
                <FormErrorMessage>
                  {errors.selectedCategory?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.TittleAdd}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Tittle of add</Text>
                </FormLabel>
                <Input
                  {...register('TittleAdd')}
                  variant={'addNoticeForm'}
                  placeholder="Type name"
                  value={TittleAdd}
                  onChange={e => setTittleAdd(e.target.value)}
                />
                <FormErrorMessage>{errors.TittleAdd?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.petName}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Name pet</Text>
                </FormLabel>
                <Input
                  {...register('petName')}
                  variant={'addNoticeForm'}
                  placeholder="Type name pet"
                  value={petName}
                  onChange={e => setPetName(e.target.value)}
                />
                <FormErrorMessage>{errors.petName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.petBirdth}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Date of birth</Text>
                </FormLabel>
                <Input
                  {...register('petBirdth')}
                  variant={'addNoticeForm'}
                  placeholder="Type date of birth"
                  value={petBirdth}
                  onChange={e => setPetBirdth(e.target.value)}
                />
                <FormErrorMessage>{errors.petBirdth?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.petBreed}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Breed</Text>
                </FormLabel>
                <Input
                  {...register('petBreed')}
                  variant={'addNoticeForm'}
                  placeholder="Type breed"
                  value={petBreed}
                  onChange={e => setPetBreed(e.target.value)}
                />
                <FormErrorMessage>{errors.petBreed?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          ) : step === 2 ? (
            <Stack as={'form'} onSubmit={handleSubmit(onSubmit)} spacing={4}>
              <FormControl isInvalid={errors.petSex}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>The sex*:</Text>
                </FormLabel>
                <Stack direction="row" spacing={4}>
                  <Button
                    textColor={petSex === 'male' && 'accentOrange'}
                    variant={'noticePetSexBtn'}
                    onClick={() => setPetSex('male')}
                    {...register('petSex')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#23c2ef"
                        d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4h6ZM9.5 11q-1.45 0-2.475 1.025T6 14.5q0 1.45 1.025 2.475T9.5 18q1.45 0 2.475-1.025T13 14.5q0-1.45-1.025-2.475T9.5 11Z"
                      />
                    </svg>
                    <Text>Male</Text>
                  </Button>
                  <Button
                    textColor={petSex === 'female' && 'accentOrange'}
                    variant={'noticePetSexBtn'}
                    onClick={() => setPetSex('female')}
                    {...register('petSex')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FF8787"
                        d="M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.238-1.888T6.5 9.45q0-2.275 1.613-3.862T12 4q2.275 0 3.888 1.588T17.5 9.45q0 2.025-1.263 3.563T13 14.9V17h2v2h-2v2h-2Zm1-8q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13Z"
                      />
                    </svg>
                    <Text>Female</Text>
                  </Button>
                </Stack>
                <FormErrorMessage>{errors.petSex?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.location}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Location*:</Text>
                </FormLabel>
                <Input
                  {...register('location')}
                  variant={'addNoticeForm'}
                  placeholder="Type location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
                <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
              </FormControl>
              {selectedCategory === 'sell' && (
                <FormControl isInvalid={errors.price}>
                  <FormLabel>
                    <Text variant={'noticesInputsHead'}>Price*:</Text>
                  </FormLabel>
                  <Input
                    {...register('price')}
                    variant={'addNoticeForm'}
                    placeholder="Type price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                  <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                </FormControl>
              )}
              <FormLabel>
                <Text variant={'noticesInputsHead'}>Load the pet’s image:</Text>
              </FormLabel>
              <FormControl
                display={'flex'}
                position={'relative'}
                // isInvalid={avatarError}
              >
                <FormLabel
                  htmlFor="avatarURL"
                  // border={avatarError ? '1px solid red' : ''}
                  width={{ base: '140px', md: '116px' }}
                  height={{ base: '140px', md: '116px' }}
                  bg={'mainColor'}
                  position={'relative'}
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
                  left={{ base: '20%', md: '15%', lg: '15%' }}
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
              <FormControl isInvalid={errors.comment}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Comments</Text>
                </FormLabel>
                <Textarea
                  variant={'addForm'}
                  placeholder="Type comment"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  {...register('comment')}
                />
                <FormErrorMessage>{errors.comment?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
          ) : null}
        </ModalBody>
        <ModalFooter
          mt={'40px'}
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={'baseline'}
          gap={{ base: '12px', lg: '0px' }}
        >
          {step === 1 && (
            <Button
              mr={'20px'}
              w={{ base: '240px', lg: '180px' }}
              h={{ base: '40px', lg: '44px' }}
              onClick={onClose}
              variant={'outlineTabBtn'}
            >
              Cancel
            </Button>
          )}
          {step > 1 && (
            <Button
              mr={{ base: '0px', md: '20px' }}
              w={{ base: '240px', lg: '180px' }}
              h={{ base: '40px', lg: '44px' }}
              onClick={handlePreviousStep}
              variant={'outlineTabBtn'}
            >
              Back
            </Button>
          )}
          {step < 2 ? (
            <Button
              w={{ base: '240px', lg: '180px' }}
              h={{ base: '40px', lg: '44px' }}
              variant={'fullBGBtn'}
              onClick={handleNextStep}
            >
              Next
            </Button>
          ) : (
            <Button
              w={{ base: '240px', lg: '180px' }}
              h={{ base: '40px', lg: '44px' }}
              type="submit"
              variant={'fullBGBtn'}
            >
              Done
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddNotice;
