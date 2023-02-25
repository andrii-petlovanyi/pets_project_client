import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
  Input,
  FormErrorMessage,
  Flex,
  Text,
  Button,
  Image,
  Textarea,
  Icon,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { birthdayRegExp, locationRegExp } from '../../../services/validation';
import { TfiPlus } from 'react-icons/tfi';
import { useAddNoticeMutation } from '../../../redux/notices/noticesApiSlice';
import Toast from '../../../hooks/toast'
import { isBefore } from 'date-fns';

const schemaStep1Off = yup.object().shape({
  title: yup
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
  breed: yup
    .string()
    .trim()
    .min(2, 'Minimal breed length is 2 symbols')
    .max(32, 'Max breed length is 32 symbols')
    .required('Breed is required'),
});

const schemaStep1 = yup.object().shape({
  title: yup
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
  birth: yup
    .string()
    .matches(birthdayRegExp, 'Birthday must be in format: 01.01.2000')
    .test('date', 'Birth date must be earlier than today', (value) => {
    const date = new Date(value);
    return isBefore(date, new Date());
  }),
  breed: yup
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
    .matches(locationRegExp, 'Location must be in format Country,City')
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

const ModalAddNew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [avatarError, setAvatarError] = useState('');
  const [category, setCategory] = useState('sell');
  const [step, setStep] = useState(1);
  const [petSex, setPetSex] = useState('male');

  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const { addToast } = Toast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(
      step === 1
        ? category == 'lost-found'
          ? schemaStep1Off
          : schemaStep1
        : schemaStep2
    ),
  });

  const newImage = watch('avatarURL');

  const onSubmit = async data => {
    if (!data.avatarURL[0]) {
      return setAvatarError('Avatar is required');
    }
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', category);
    formData.append('petName', data.petName);
    formData.append('breed', data.breed);
    formData.append('location', data.location);
    formData.append('petSex', petSex);
    formData.append('comments', data.comment);
    formData.append('petImage', data.avatarURL[0]);

    if (category == 'sell') {
      formData.append('price', data.price);
    }

    if (category === 'sell' || category === 'for-free') {
      formData.append('birth', data.birth);
    }

    try {
      const { data: res, error } = await addNotice(formData);
      if (error) return addToast({ message: error.data.message, type: 'error' });
      addToast({ message: res.message, type: 'success' });
      onClose();
      reset();
      setStep(1);
    } catch (error) {
      addToast({ message: error.message, type: 'success' });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleCLose = () => {
    reset();
    onClose();
    setStep(1);
  };

  return (
    <>
      <Box
        color={'textColor'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'27px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'12px'}
        minW={'129px'}
        h={'44px'}
        ml={'auto'}
        pos={{ base: "fixed", lg: 'initial' }}
        zIndex={{base: 1, lg: 0}}
        bottom={{base: '20px'}}
        right={{ base: '20px' }}
      >
        Add pet
        <IconButton onClick={onOpen} variant={'mainIB'} icon={<HiPlus />} />
      </Box>

      <Modal isOpen={isOpen} onClose={handleCLose} size={'custom'}>
        <ModalOverlay />
        <ModalContent bg={'white'} borderRadius={{ base: '20px', md: '40px' }}>
          <IconButton
            position={'absolute'}
            top={{ base: '20px', xl: '24px' }}
            right={{ base: '20px', xl: '24px' }}
            icon={<MdClose />}
            variant={'secondIB'}
            onClick={onClose}
          />
          <Heading
            as={'h2'}
            variant={'modalAddTitle'}
            textAlign={'center'}
            mb={'10px'}
          >
            Add pet
          </Heading>
          {step === 1 && (
            <Stack
              gap={{ base: '10px' }}
              w="100%"
              as="form"
              onSubmit={handleSubmit(nextStep)}
            >
              <Text variant={'noticeModalText'}>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur{' '}
              </Text>
              <FormControl id="category" isInvalid={errors.category}>
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
                    onClick={() => setCategory('lost-found')}
                    variant={
                      category === 'lost-found' ? 'fullBGBtn' : 'outlineTabBtn'
                    }
                    {...register('selectedCategory')}
                  >
                    lost/found
                  </Button>
                  <Button
                    w={{ base: '155px', lg: '197px' }}
                    h={{ base: '35px', lg: '47px' }}
                    fontSize={{ base: '14px', lg: '20px' }}
                    onClick={() => setCategory('for-free')}
                    variant={
                      category === 'for-free' ? 'fullBGBtn' : 'outlineTabBtn'
                    }
                    {...register('selectedCategory')}
                  >
                    in good hands
                  </Button>
                  <Button
                    w={{ base: '81', lg: '91px' }}
                    h={{ base: '35px', lg: '47px' }}
                    fontSize={{ base: '14px', lg: '20px' }}
                    onClick={() => setCategory('sell')}
                    variant={
                      category === 'sell' ? 'fullBGBtn' : 'outlineTabBtn'
                    }
                    {...register('selectedCategory')}
                  >
                    sell
                  </Button>
                </Stack>
              </FormControl>
              <FormControl isInvalid={errors.title}>
                <FormLabel htmlFor="title">
                  <Text variant={'noticesInputsHead'}>Title of ad</Text>
                </FormLabel>
                <Input
                  placeholder={'Type title'}
                  variant={'addNoticeForm'}
                  {...register('title')}
                />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.petName}>
                <FormLabel htmlFor="petName">
                  <Text variant={'noticesInputsHead'}>Name pet</Text>
                </FormLabel>
                <Input
                  placeholder={'Type name pet'}
                  variant={'addNoticeForm'}
                  {...register('petName')}
                />
                <FormErrorMessage>{errors.petName?.message}</FormErrorMessage>
              </FormControl>
              {category != 'lost-found' && (
                <FormControl isInvalid={errors.birth}>
                  <FormLabel htmlFor="birth">
                    <Text variant={'noticesInputsHead'}>Date of birth</Text>
                  </FormLabel>
                  <Input
                    placeholder={'Type date of birth'}
                    variant={'addNoticeForm'}
                    type="text"
                    {...register('birth')}
                  />
                  <FormErrorMessage>{errors.birth?.message}</FormErrorMessage>
                </FormControl>
              )}
              <FormControl
                isInvalid={errors.breed}
                mb={{ base: '28px', lg: '40px' }}
              >
                <FormLabel htmlFor="breed">
                  <Text variant={'noticesInputsHead'}>Breed</Text>
                </FormLabel>
                <Input
                  placeholder={'Type bread'}
                  variant={'addNoticeForm'}
                  {...register('breed')}
                />
                <FormErrorMessage>{errors.breed?.message}</FormErrorMessage>
              </FormControl>
              <Flex
                pt={'20px'}
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent={{ base: 'center', lg: 'center' }}
                gap={{ base: '12px', lg: '20px' }}
              >
                <Button
                  type="button"
                  width={{ base: '100%', lg: '180px' }}
                  h={{ base: '40px', lg: '44px' }}
                  variant={'outlineTabBtn'}
                  onClick={handleCLose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  width={{ base: '100%', lg: '180px' }}
                  h={{ base: '40px', lg: '44px' }}
                  variant={'fullBGBtn'}
                >
                  Next
                </Button>
              </Flex>
            </Stack>
          )}
          {step === 2 && (
            <Stack
              gap={{ base: '10px' }}
              w="100%"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl id="petSex" isInvalid={errors.petSex}>
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
                    <Text variant={'noticesPetSex'}>Male</Text>
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
                    <Text variant={'noticesPetSex'}>Female</Text>
                  </Button>
                </Stack>
                {errors.petSex && (
                  <FormErrorMessage>{errors.petSex.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.location}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>Location*:</Text>
                </FormLabel>
                <Input
                  {...register('location')}
                  variant={'addNoticeForm'}
                  placeholder="Type location"
                />
                <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
              </FormControl>
              {category == 'sell' && (
                <FormControl isInvalid={errors.price}>
                  <FormLabel>
                    <Text variant={'noticesInputsHead'}>Price*:</Text>
                  </FormLabel>
                  <Input
                    {...register('price')}
                    variant={'addNoticeForm'}
                    placeholder="Type price"
                  />
                  <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                </FormControl>
              )}

              <FormLabel>
                <Text variant={'noticesInputsHead'}>Load the pet’s image:</Text>
              </FormLabel>
              <FormControl
                display={'flex'}
                justifyContent={'center'}
                isInvalid={avatarError}
              >
                <FormLabel
                  htmlFor="avatarURL"
                  border={avatarError ? '1px solid red' : ''}
                  width={{ base: '140px', md: '150px' }}
                  height={{ base: '140px', md: '150px' }}
                  bg={'mainColor'}
                  borderRadius={'40px'}
                  margin={'0'}
                  position={'relative'}
                  mr={'auto'}
                >
                  <Input
                    id="avatarURL"
                    display={'none'}
                    type="file"
                    h={'100%'}
                    {...register('avatarURL')}
                  />
                  {newImage && newImage[0] ? (
                    <Image
                      pointerEvents={'none'}
                      borderRadius={'40px'}
                      position={'absolute'}
                      top={'50%'}
                      left={'50%'}
                      transform={'translate(-50%, -50%)'}
                      width={{ base: '140px', md: '150px' }}
                      height={{ base: '140px', md: '150px' }}
                      src={URL.createObjectURL(newImage[0])}
                      boxSize="182px"
                      objectFit="cover"
                    />
                  ) : (
                    <Icon
                      as={TfiPlus}
                      pointerEvents={'none'}
                      position={'absolute'}
                      top={'50%'}
                      left={'50%'}
                      transform={'translate(-50%, -50%)'}
                      fontSize={'48px'}
                    />
                  )}
                </FormLabel>
                <FormErrorMessage
                  position={'absolute'}
                  bottom={'-20px'}
                  left={'50%'}
                  transform={'translateX(-50%)'}
                >
                  {avatarError}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.comment}>
                <FormLabel
                  htmlFor="comments"
                  fontSize={{ base: '18px', md: '24' }}
                  lineHeight={'26px'}
                  fontWeight={'500'}
                  fontFamily={'Manrope'}
                  variant={'noticesInputsHead'}
                >
                  Comments
                </FormLabel>
                <Textarea variant={'addForm'} {...register('comment')} />
                <FormErrorMessage>{errors.comment?.message}</FormErrorMessage>
              </FormControl>
              <Flex
                pt={'20px'}
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent={{ base: 'center', lg: 'center' }}
                gap={{ base: '12px', lg: '20px' }}
              >
                <Button
                  width={{ base: '100%', lg: '180px' }}
                  h={{ base: '40px', lg: '44px' }}
                  variant={'outlineTabBtn'}
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  width={{ base: '100%', lg: '180px' }}
                  h={{ base: '40px', lg: '44px' }}
                  variant={'fullBGBtn'}
                  type="submit"
                  isLoading={isLoading}
                >
                  Done
                </Button>
              </Flex>
            </Stack>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddNew;
