import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import { HiPlus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { TfiPlus } from 'react-icons/tfi';
import DatePicker from 'react-datepicker';

import { dateToString, stringToDate } from '../../../services/dateFormat';
import { locationRegExp, priceRegexp } from '../../../services/validation';
import { useAddNoticeMutation } from '../../../redux/notices/noticesApiSlice';
import Toast from '../../../hooks/toast';
import { calendarFunc } from '../../UserForm/Calendar/Calendar';
import userSelectors from '../../../redux/user/user-selectors';
import { useSelector } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';

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
    .max(48, 'Max title length is 48 symbols')
    .required('Title is required'),
  petName: yup
    .string()
    .trim()
    .min(2, 'Minimal pet name length is 2 symbols')
    .max(16, 'Max pet name length is 16 symbols')
    .required('Pet name is required'),
  birth: yup.string().required('Birthday is required'),
  breed: yup
    .string()
    .trim()
    .min(2, 'Minimal breed length is 2 symbols')
    .max(16, 'Max breed length is 16 symbols')
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
    .matches(priceRegexp, 'Price must be greater than zero')
    .min(1, 'Minimal price length is 1 symbols')
    .max(10, 'Max price length is 100 symbols'),
  comment: yup
    .string()
    .trim()
    .min(8, 'Minimal password length is 8 symbols')
    .max(120, 'Max password length is 120 symbols')
    .required('Comment is required'),
});

export const ModalAddNew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector(userSelectors.isAuth);
  const [category, setCategory] = useState('sell');
  const [step, setStep] = useState(1);
  const [petSex, setPetSex] = useState('male');

  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const { addToast } = Toast();

  const {
    register,
    control,
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
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', category);
    formData.append('petName', data.petName);
    formData.append('breed', data.breed);
    formData.append('location', data.location);
    formData.append('petSex', petSex);
    formData.append('comments', data.comment);

    if (data.avatarURL[0]) {
      formData.append('petImage', data.avatarURL[0]);
    }

    if (category == 'sell') {
      formData.append('price', data.price);
    }

    if (category === 'sell' || category === 'for-free') {
      console.log(data.birth);
      formData.append('birth', data.birth);
    }

    try {
      const { data: res, error } = await addNotice(formData);
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
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

  const handleClick = () => {
    if (!isAuth) {
      addToast({
        message: 'You are not logged in! Please log in',
        type: 'warning',
      });
      return;
    }
    onOpen();
  };

  const onChooseTitle = () => {
    switch (category) {
      case 'for-free':
        return 'If you want to give your pet in good hands without paying you can create an advertisement. Please write information about the pet below';
      case 'lost-found':
        return 'If you lost or found a pet you can create an advertisement. Please write information about the pet below';
      default:
        return 'If you want to sell a pet you can create an advertisement. Please write information about the pet below';
    }
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
        pos={{ base: 'fixed', lg: 'initial' }}
        zIndex={{ base: 1, lg: 0 }}
        bottom={{ base: '20px' }}
        right={{ base: '20px' }}
      >
        Add pet
        <IconButton
          onClick={handleClick}
          variant={'mainIB'}
          icon={<HiPlus />}
        />
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
              gap={{ base: '15px' }}
              w="100%"
              as="form"
              onSubmit={handleSubmit(nextStep)}
            >
              <Text variant={'noticeModalText'}>{onChooseTitle()}</Text>
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
                  <Text variant={'noticesInputsHead'}>
                    Title of ad <span style={{ color: '#F59256' }}>*</span>
                  </Text>
                </FormLabel>
                <Input
                  placeholder={'Type title'}
                  variant={'addNoticeForm'}
                  {...register('title')}
                />
                <FormErrorMessage position="absolute" bottom="-20px">
                  {errors.title?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.petName}>
                <FormLabel htmlFor="petName">
                  <Text variant={'noticesInputsHead'}>
                    Name pet<span style={{ color: '#F59256' }}>*</span>
                  </Text>
                </FormLabel>
                <Input
                  placeholder={'Type name pet'}
                  variant={'addNoticeForm'}
                  {...register('petName')}
                />
                <FormErrorMessage position="absolute" bottom="-20px">
                  {errors.petName?.message}
                </FormErrorMessage>
              </FormControl>
              {category != 'lost-found' && (
                <FormControl isInvalid={errors.birth}>
                  <FormLabel htmlFor="birth">
                    <Text variant={'noticesInputsHead'}>
                      Date of birth<span style={{ color: '#F59256' }}>*</span>
                    </Text>
                  </FormLabel>
                  <Controller
                    name="birth"
                    control={control}
                    render={({ field }) => (
                      <Box
                        height={'48px'}
                        variant={'addNoticeForm'}
                        filter={'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}
                        borderRadius={'40px'}
                      >
                        <DatePicker
                          renderCustomHeader={calendarFunc}
                          onChange={date => {
                            field.onChange(dateToString(date));
                          }}
                          selected={field.value && stringToDate(field.value)}
                          dateFormat="dd.MM.yyyy"
                          maxDate={Date.now()}
                          wrapperClassName="date__picker"
                          placeholderText={'Type date of birth'}
                          popperPlacement={'top'}
                        />
                      </Box>
                    )}
                  />
                  <FormErrorMessage position="absolute" bottom="-20px">
                    {errors.birth?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
              <FormControl
                isInvalid={errors.breed}
                mb={{ base: '28px', lg: '40px' }}
              >
                <FormLabel htmlFor="breed">
                  <Text variant={'noticesInputsHead'}>
                    Breed<span style={{ color: '#F59256' }}>*</span>
                  </Text>
                </FormLabel>
                <Input
                  placeholder={'Type bread'}
                  variant={'addNoticeForm'}
                  {...register('breed')}
                />
                <FormErrorMessage position="absolute" bottom="-20px">
                  {errors.breed?.message}
                </FormErrorMessage>
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
              gap={{ base: '15px' }}
              w="100%"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl id="petSex" isInvalid={errors.petSex}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>
                    Sex<span style={{ color: '#F59256' }}>*</span>:
                  </Text>
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
                  <FormErrorMessage position="absolute" bottom="-20px">
                    {errors.petSex.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.location}>
                <FormLabel>
                  <Text variant={'noticesInputsHead'}>
                    Location<span style={{ color: '#F59256' }}>*</span>:
                  </Text>
                </FormLabel>
                <Input
                  {...register('location')}
                  variant={'addNoticeForm'}
                  placeholder="Type location"
                />
                <FormErrorMessage position="absolute" bottom="-20px">
                  {errors.location?.message}
                </FormErrorMessage>
              </FormControl>
              {category == 'sell' && (
                <FormControl isInvalid={errors.price}>
                  <FormLabel>
                    <Text variant={'noticesInputsHead'}>
                      Price<span style={{ color: '#F59256' }}>*</span>:
                    </Text>
                  </FormLabel>
                  <Input
                    {...register('price')}
                    variant={'addNoticeForm'}
                    placeholder="Type price"
                    required
                    title="Price field id required"
                  />
                  <FormErrorMessage position="absolute" bottom="-20px">
                    {errors.price?.message}
                  </FormErrorMessage>
                </FormControl>
              )}

              <FormLabel>
                <Text variant={'noticesInputsHead'}>Load the pet’s image:</Text>
              </FormLabel>
              <FormControl display={'flex'} justifyContent={'center'}>
                <FormLabel
                  htmlFor="avatarURL"
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
              </FormControl>
              <FormControl isInvalid={errors.comment}>
                <FormLabel
                  htmlFor="comments"
                  fontSize={{ base: '18px', md: '24' }}
                  lineHeight={'26px'}
                  fontWeight={'500'}
                  fontFamily={'Manrope'}
                  variant={'noticesInputsHead'}
                  wordBreak={'break-word'}
                >
                  Comments<span style={{ color: '#F59256' }}>*</span>
                </FormLabel>
                <Textarea variant={'addForm'} {...register('comment')} />
                <FormErrorMessage position="absolute" bottom="-20px">
                  {errors.comment?.message}
                </FormErrorMessage>
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
