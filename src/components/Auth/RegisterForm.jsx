import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterUserMutation } from '../../redux/user/userApiSlice';
import * as yup from 'yup';
import {
  Button,
  Input,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Stack,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { register as userRegister } from '../../redux/user/userSlice';

const schemaStep1 = yup.object().shape({
  email: yup
    .string()
    .min(6, 'Minimal email length is 6 symbols')
    .max(32, 'Max email length is 32 symbols')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Minimal password length is 8 symbols')
    .max(32, 'Max password length is 32 symbols')
    .required('Password is required'),
  cpassword: yup
    .string()
    .min(8, 'Minimal password length is 8 symbols')
    .max(32, 'Max password length is 32 symbols')
    .required('Please repeat password')
    .oneOf([yup.ref('password')], 'Password do not match'),
});

const schemaStep2 = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Minimal name length is 3 symbols')
    .max(32, 'Max name length is 32 symbols')
    .required('Name is required'),
  city: yup
    .string()
    .min(3, 'Minimal city length is 3 symbols')
    .max(32, 'Max city length is 32 symbols')
    .required('City is required'),
  phone: yup.string().required('Phone number is required'),
});

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(step === 1 ? schemaStep1 : schemaStep2),
  });

  const onSubmit = async data => {
    delete data.cpassword;

    try {
      const { data: res, error } = await registerUser(data);
      if (error) return console.log(error);
      console.log(res);
      dispatch(userRegister(res.user));
      reset();
      navigate('/user');
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
      <Flex
        maxW={'608px'}
        width={'100%'}
        bg={{ base: 'none', lg: 'white' }}
        boxShadow={{ base: 'none', lg: 'secondShadow' }}
        borderRadius={{ base: '', lg: '40px' }}
        padding={{ base: '0', lg: '60px 80px' }}
        flexDirection={'column'}
      >
        <Heading variant={'authForm'} mx={'auto'} mb={'40px'}>
          Registration
        </Heading>
        {step === 1 && (
          <Stack
            gap={{ base: '16px', md: '28px' }}
            w="100%"
            as="form"
            onSubmit={handleSubmit(nextStep)}
          >
            <FormControl isInvalid={errors.email}>
              <Input
                variant={'authForm'}
                placeholder={'Email'}
                {...register('email')}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <InputGroup>
                <Input
                  variant={'authForm'}
                  placeholder={'Password'}
                  type={show ? 'text' : 'password'}
                  {...register('password')}
                />
                <InputRightElement>
                  <IconButton
                    mt={{ base: '0', lg: '10px' }}
                    mr={'10px'}
                    // fontSize={'20px'}
                    variant={'authFormIcon'}
                    icon={show ? <BiShow /> : <BiHide />}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.cpassword}>
              <InputGroup>
                <Input
                  variant={'authForm'}
                  placeholder={'Confirm password'}
                  type={show ? 'text' : 'password'}
                  {...register('cpassword')}
                />
                <InputRightElement>
                  <IconButton
                    mt={{ base: '0', lg: '10px' }}
                    mr={'10px'}
                    // fontSize={'20px'}
                    variant={'authFormIcon'}
                    icon={show ? <BiShow /> : <BiHide />}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.cpassword?.message}</FormErrorMessage>
            </FormControl>

            <Button
              height={{ base: '44px', lg: '48px' }}
              type="submit"
              variant={'fullBGBtn'}
            >
              Next
            </Button>
          </Stack>
        )}
        {step === 2 && (
          <Stack
            gap={'20px'}
            w="100%"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl isInvalid={errors.name}>
              <Input
                variant={'authForm'}
                type={'text'}
                placeholder={'Name'}
                {...register('name')}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.city}>
              <Input
                variant={'authForm'}
                type={'text'}
                placeholder={'City'}
                {...register('city')}
              />
              <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.phone}>
              <Input
                variant={'authForm'}
                type={'text'}
                placeholder={'Phone'}
                {...register('phone')}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>
            <Flex
              pt={'20px'}
              flexDirection={'column'}
              justifyContent={'center'}
              gap={{ base: '12px', lg: '16px' }}
            >
              <Button
                height={{ base: '44px', lg: '48px' }}
                width={'100%'}
                variant={'fullBGBtn'}
                type="submit"
                isLoading={isLoading}
              >
                Register
              </Button>
              <Button
                height={{ base: '44px', lg: '48px' }}
                width={'100%'}
                variant={'outlineTabBtn'}
                onClick={prevStep}
              >
                Back
              </Button>
            </Flex>
          </Stack>
        )}
        <Box
          mx={'auto'}
          mt={'40px'}
          fontSize={'12px'}
          lineHeight={'16px'}
          display={'flex'}
          gap={'5px'}
        >
          Already have an account?
          <Link as={NavLink} to={'/login'} display={'flex'}>
            <Text color="#3091EB">Login</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default RegisterForm;
