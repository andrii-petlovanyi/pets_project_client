import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Toast from '../../hooks/toast';

import UserAvatar from './Avatar';
import { calendarFunc } from './Calendar/Calendar';
import { ButtonUserForm } from '../UserForm/IconButton';
import { userFormSchema } from '../../services/validation';
import { dateToString, stringToDate } from '../../services/dateFormat';
import './Calendar/Calendar.styled.css';
import userSelectors from '../../redux/user/user-selectors';
import { useUpdateUserMutation } from '../../redux/user/userApiSlice';

const INITIAL_DISABLED = {
  name: true,
  email: true,
  birthday: true,
  phone: true,
  city: true,
};

const UserForm = () => {
  const [isDisabled, setIsDisabled] = useState(INITIAL_DISABLED);
  const [updateUser] = useUpdateUserMutation();
  const user = useSelector(userSelectors.user);
  const { addToast } = Toast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      birthday: stringToDate(user.birthday),
      phone: user.phone,
      city: user.city,
    },
    resolver: yupResolver(userFormSchema),
  });

  const handleEdit = data => {
    setIsDisabled({ ...INITIAL_DISABLED, [data]: false });
  };

  const onSubmit = async data => {
    const newData = {
      ...data,
      birthday: dateToString(data.birthday),
    };
    try {
      const { data: res, error } = await updateUser(newData);
      if (error)
        return addToast({ message: error.data.message, type: 'error' });
      addToast({ message: res.message, type: 'success' });
      setIsDisabled({ ...INITIAL_DISABLED });
    } catch (error) {
      addToast({ message: error.message, type: 'success' });
    }
  };

  return (
    <>
      <Flex flexDirection={'column'} width={'100%'}>
        <Heading
          mb={'24px'}
          fontWeight={500}
          fontSize={{ base: '20px', lg: '28px' }}
          lineHeight={'1.4'}
          letterSpacing={{ base: '0.04em', lg: '0' }}
          color={{ base: 'black', lg: 'textColor' }}
        >
          My information:
        </Heading>
        <FormControl
          onSubmit={handleSubmit(onSubmit)}
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row-reverse', xl: 'column' }}
          maxW={{ xl: '411px' }}
          width={'100%'}
          p={{ base: '16px 20px', lg: '24px 40px 24px 32px', xl: '16px 20px' }}
          background={'white'}
          boxShadow={{
            base: '7px 4px 14px rgba(0, 0, 0, 0.11)',
            lg: '7px 4px 14px rgba(49, 21, 4, 0.07)',
          }}
          borderRadius={{ base: '20px', lg: '0px 40px 40px 0px' }}
        >
          <UserAvatar />
          <Flex
            display={'flex'}
            flexDirection={'column'}
            mr={{ lg: '52px', xl: '0' }}
          >
            <InputGroup
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={'15'}
            >
              <FormLabel
                name="name"
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                m={'0'}
                width={'100%'}
              >
                <Text variant={'textLabelUserForm'}>Name:</Text>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderRadius={'40px'}
                      variant={
                        isDisabled.name ? 'userInfoDisabled' : 'userInfoActive'
                      }
                      disabled={isDisabled.name}
                    />
                  )}
                />

                {isDisabled.name ? (
                  <ButtonUserForm
                    handleClick={handleEdit}
                    name={'name'}
                    flag={isDisabled}
                  />
                ) : (
                  <ButtonUserForm
                    handleClick={handleSubmit(onSubmit)}
                    name={'name'}
                    flag={isDisabled}
                  />
                )}
              </FormLabel>
              <Text color={'red.500'} fontSize={'12px'}>
                {errors.name?.message}
              </Text>
            </InputGroup>
            <InputGroup
              display={'flex'}
              flexDirection="column"
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={'15'}
            >
              <FormLabel
                htmlFor={'email'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                m={'0'}
                width={'100%'}
              >
                <Text variant={'textLabelUserForm'}>Email:</Text>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderRadius={'40px'}
                      variant={
                        isDisabled.email ? 'userInfoDisabled' : 'userInfoActive'
                      }
                      disabled={isDisabled.email}
                    />
                  )}
                />
                {isDisabled.email ? (
                  <ButtonUserForm
                    handleClick={handleEdit}
                    name={'email'}
                    flag={isDisabled}
                  />
                ) : (
                  <ButtonUserForm
                    handleClick={handleSubmit(onSubmit)}
                    name={'email'}
                    flag={isDisabled}
                  />
                )}
              </FormLabel>
              <Text color={'red.500'} fontSize={'12px'}>
                {errors.email?.message}
              </Text>
            </InputGroup>
            <InputGroup
              display={'flex'}
              flexDirection="column"
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={'15'}
            >
              <FormLabel
                htmlFor={'birthday'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                m={'0'}
                width={'100%'}
              >
                <Text variant={'textLabelUserForm'}>Birthday:</Text>
                <Controller
                  name="birthday"
                  control={control}
                  render={({ field }) => (
                    <Box style={{ width: '216px', height: '32px' }}>
                      <DatePicker
                        renderCustomHeader={calendarFunc}
                        disabled={isDisabled.birthday}
                        onChange={date => {
                          field.onChange(date);
                        }}
                        selected={field.value}
                        dateFormat="dd.MM.yyyy"
                        maxDate={Date.now()}
                      />
                    </Box>
                  )}
                />
                {isDisabled.birthday ? (
                  <ButtonUserForm
                    handleClick={handleEdit}
                    name={'birthday'}
                    flag={isDisabled}
                  />
                ) : (
                  <ButtonUserForm
                    handleClick={handleSubmit(onSubmit)}
                    name={'birthday'}
                    flag={isDisabled}
                  />
                )}
              </FormLabel>
              <Text color={'red.500'} fontSize={'12px'}>
                {errors.birthday?.message}
              </Text>
            </InputGroup>
            <InputGroup
              display={'flex'}
              flexDirection="column"
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={'15'}
            >
              <FormLabel
                htmlFor={'phone'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                m={'0'}
                width={'100%'}
              >
                <Text variant={'textLabelUserForm'}>Phone:</Text>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderRadius={'40px'}
                      variant={
                        isDisabled.phone ? 'userInfoDisabled' : 'userInfoActive'
                      }
                      disabled={isDisabled.phone}
                    />
                  )}
                />
                {isDisabled.phone ? (
                  <ButtonUserForm
                    handleClick={handleEdit}
                    name={'phone'}
                    flag={isDisabled}
                  />
                ) : (
                  <ButtonUserForm
                    handleClick={handleSubmit(onSubmit)}
                    name={'phone'}
                    flag={isDisabled}
                  />
                )}
              </FormLabel>
              <Text color={'red.500'} fontSize={'12px'}>
                {errors.phone?.message}
              </Text>
            </InputGroup>
            <InputGroup
              display={'flex'}
              flexDirection="column"
              alignItems={'center'}
              justifyContent={'space-around'}
            >
              <FormLabel
                htmlFor={'city'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                m={'0'}
                width={'100%'}
              >
                <Text variant={'textLabelUserForm'}>City:</Text>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderRadius={'40px'}
                      variant={
                        isDisabled.city ? 'userInfoDisabled' : 'userInfoActive'
                      }
                      disabled={isDisabled.city}
                    />
                  )}
                />
                {isDisabled.city ? (
                  <ButtonUserForm
                    handleClick={handleEdit}
                    name={'city'}
                    flag={isDisabled}
                  />
                ) : (
                  <ButtonUserForm
                    handleClick={handleSubmit(onSubmit)}
                    name={'city'}
                    flag={isDisabled}
                  />
                )}
              </FormLabel>
              <Text color={'red.500'} fontSize={'12px'}>
                {errors.city?.message}
              </Text>
            </InputGroup>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
};

export default UserForm;
