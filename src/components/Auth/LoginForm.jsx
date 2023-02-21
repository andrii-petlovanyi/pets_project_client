import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { useLogInUserMutation } from '../../redux/user/userApiSlice';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/user/userSlice';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email must be in format: email@domain.com')
    .min(6, 'Minimal email length is 6 symbols')
    .max(32, 'Max email length is 32 symbols')
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'Minimal password length is 8 symbols')
    .max(32, 'Max password length is 32 symbols')
    .required('Password is required'),
});

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [logInUser, { isLoading }] = useLogInUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      const { data: res, error } = await logInUser(data);
      if (error) return console.log(error);
      console.log(res);
      dispatch(logIn(res));
      reset();
      navigate('/user');
    } catch (error) {
      console.log(error);
    }
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
          Login
        </Heading>
        <Stack
          gap={{ base: '16px', md: '28px' }}
          w="100%"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
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
                  variant={'authFormIcon'}
                  icon={show ? <BiShow /> : <BiHide />}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button
            height={{ base: '44px', lg: '48px' }}
            type="submit"
            variant={'fullBGBtn'}
            isLoading={isLoading}
          >
            Login
          </Button>
        </Stack>

        <Box
          mx={'auto'}
          mt={'40px'}
          fontSize={'12px'}
          lineHeight={'16px'}
          display={'flex'}
          gap={'5px'}
        >
          Do not have an account?
          <Link as={NavLink} to={'/register'} display={'flex'}>
            <Text color="#3091EB">Register</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default LoginForm;
