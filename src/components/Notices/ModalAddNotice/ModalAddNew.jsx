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
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { birthdayRegExp } from '../../../services/validation';
import { TfiPlus } from 'react-icons/tfi';
import { useAddNoticeMutation } from '../../../redux/notices/noticesApiSlice';

const schemaStep1 = yup.object().shape({
  // category: yup.string().oneOf(['lost-found', 'for-free', 'sell']),
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
    .required('Birthday is required'),
  breed: yup
    .string()
    .trim()
    .min(2, 'Minimal breed length is 2 symbols')
    .max(32, 'Max breed length is 32 symbols')
    .required('Breed is required'),
});

const schemaStep2 = yup.object().shape({
  petSex: yup.string().trim().oneOf(['male', 'female']),
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

const ModalAddNew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [avatarError, setAvatarError] = useState('');
  const [category, setCategory] = useState('sell');
  const [step, setStep] = useState(1);

  const [addNotice, { isLoading }] = useAddNoticeMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(step === 1 ? schemaStep1 : schemaStep2),
  });

  const newImage = watch('avatarURL');

  const onSubmit = async data => {
    if (!data.avatarURL[0]) {
      return setAvatarError('Avatar is required');
    }
    console.log(category);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', category);
    formData.append('petName', data.petName);
    formData.append('breed', data.breed);
    formData.append('location', data.location);
    formData.append('birth', data.birth);
    formData.append('petSex', data.petSex);
    formData.append('comments', data.comment);
    formData.append('petImage', data.avatarURL[0]);

    if (data.category == 'sell') {
      formData.append('price', data.price);
    }

    try {
      const { data: res, error } = await addNotice(formData);
      if (error) return console.log(error);
      console.log(res);
      onClose();
      reset();
      setStep(1);
    } catch (error) {
      console.log(error);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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
      >
        Add pet
        <IconButton onClick={onOpen} variant={'mainIB'} icon={<HiPlus />} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={'custom'}>
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
            mb={{ base: '28px', lg: '40px' }}
          >
            Add pet
          </Heading>
          {step === 1 && (
            <Stack
              gap={{ base: '16px', md: '28px' }}
              w="100%"
              as="form"
              onSubmit={handleSubmit(nextStep)}
            >
              {/* <FormControl id="category" isInvalid={errors.category}>
                <FormLabel>Category</FormLabel>
                <RadioGroup name="category">
                  <Radio s value="lost-found" {...register('category')}>
                    Lost/Found
                  </Radio>
                  <Radio value="for-free" {...register('category')}>
                    In Good Hands
                  </Radio>
                  <Radio value="sell" {...register('category')}>
                    Sell
                  </Radio>
                </RadioGroup>
                {errors.category && (
                  <FormErrorMessage>{errors.category.message}</FormErrorMessage>
                )}
              </FormControl> */}
              <Box display={'flex'} gap={'10px'}>
                <Button
                  w={{ base: '131px', lg: '162px' }}
                  h={{ base: '35px', lg: '47px' }}
                  fontSize={{ base: '14px', lg: '20px' }}
                  onClick={() => setCategory('lost-found')}
                  variant={
                    category === 'lost-found' ? 'fullBGBtn' : 'outlineTabBtn'
                  }
                >
                  lost/found
                </Button>
                <Button
                  w={{ base: '131px', lg: '162px' }}
                  h={{ base: '35px', lg: '47px' }}
                  fontSize={{ base: '14px', lg: '20px' }}
                  onClick={() => setCategory('for-free')}
                  variant={
                    category === 'for-free' ? 'fullBGBtn' : 'outlineTabBtn'
                  }
                >
                  for-fre
                </Button>
                <Button
                  w={{ base: '131px', lg: '162px' }}
                  h={{ base: '35px', lg: '47px' }}
                  fontSize={{ base: '14px', lg: '20px' }}
                  onClick={() => setCategory('sell')}
                  variant={category === 'sell' ? 'fullBGBtn' : 'outlineTabBtn'}
                >
                  sell
                </Button>
              </Box>
              <FormControl isInvalid={errors.title}>
                <FormLabel htmlFor="title">Title of ad</FormLabel>
                <Input
                  placeholder={'Type title'}
                  variant={'addNoticeForm'}
                  {...register('title')}
                />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.petName}>
                <FormLabel htmlFor="petName">Name pet</FormLabel>
                <Input
                  placeholder={'Type name pet'}
                  variant={'addNoticeForm'}
                  {...register('petName')}
                />
                <FormErrorMessage>{errors.petName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.birth}>
                <FormLabel htmlFor="birth">Date of birth</FormLabel>
                <Input
                  placeholder={'Type date of birth'}
                  variant={'addNoticeForm'}
                  type="text"
                  {...register('birth')}
                />
                <FormErrorMessage>{errors.birth?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.breed}
                mb={{ base: '28px', lg: '40px' }}
              >
                <FormLabel htmlFor="breed">Breed</FormLabel>
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
                  variant={'fullBGBtn'}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  width={{ base: '100%', lg: '180px' }}
                  variant={'outlineTabBtn'}
                >
                  Next
                </Button>
              </Flex>
            </Stack>
          )}
          {step === 2 && (
            <Stack
              gap={'20px'}
              w="100%"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl id="petSex" isInvalid={errors.petSex}>
                <FormLabel>The sex*:</FormLabel>
                <RadioGroup name="petSex">
                  <Radio value="male" {...register('petSex')}>
                    male
                  </Radio>
                  <Radio value="female" {...register('petSex')}>
                    female
                  </Radio>
                </RadioGroup>
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

              <Text
                mx={'auto'}
                fontSize={{ base: '16px', md: '20px' }}
                lineHeight={{ base: '22px', md: '27px' }}
              >
                Load the pets image:
              </Text>
              <FormControl
                display={'flex'}
                justifyContent={'center'}
                position={'relative'}
                isInvalid={avatarError}
              >
                <FormLabel
                  htmlFor="avatarURL"
                  border={avatarError ? '1px solid red' : ''}
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
                    width={{ base: '208px', md: '182px' }}
                    height={{ base: '208px', md: '182px' }}
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
                  variant={'outlineTabBtn'}
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  width={{ base: '100%', lg: '180px' }}
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
