import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { MdPhotoCamera } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import {
  Box,
  Flex,
  Heading,
  // Button, HStack, Image, Box, Icon,
  Text,
} from '@chakra-ui/react';
import { calendarFunc } from './Calendar/Calendar';
import { ButtonUserForm } from '../UserForm/IconButton';
import { userFormSchema } from '../../services/validation';
// import Avatar from './Avatar';
import './Calendar/Calendar.styled.css';

import UserAvatar from './Avatar';

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      birthday: '',
      phone: '',
      city: '',
    },
    resolver: yupResolver(userFormSchema),
  });

  const INITIAL_DISABLED = {
    name: true,
    email: true,
    birthday: true,
    phone: true,
    city: true,
  };

  const [isDisabled, setIsDisabled] = useState(INITIAL_DISABLED);

  const handleEdit = data => {
    // console.log(data);
    setIsDisabled({ ...INITIAL_DISABLED, [data]: false });
  };

  const onSubmit = data => {
    console.log(data);
    setIsDisabled({ ...INITIAL_DISABLED });
  };

  return (
    <>
      {/* <FormControl>
        <Input value={'data'} variant={open ? 'userInfoActive' : 'userInfoDisabled'} />
        <IconButton variant={'style'} color={!oneInput ?? 'grey'} icon={open ? <MdPlace /> : <Md10K />} />
      </FormControl> */}
      <Flex flexDirection={'column'} width={'100%'}>
        <Heading mb={'24px'}>My information:</Heading>
        <FormControl
          onSubmit={handleSubmit(onSubmit)}
          display={'flex'}
          flexDirection={'column'}
          maxW={'411'}
          p={'20px 16px 67px 16px'}
          background={'white'}
          boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
          borderRadius={'0px 40px 40px 0px'}
        >
          <UserAvatar />
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
              alignItems={'center'}
              m={'0'}
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
            <FormLabel display={'flex'} alignItems={'center'} m={'0'}>
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
              alignItems={'center'}
              m={'0'}
            >
              <Text variant={'textLabelUserForm'}>Birthday:</Text>
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  // <Calendar />
                  <Box
                    style={{ width: '216px', height: '32px' }}
                    // variant={
                    //   isDisabled.birthday ? 'userInfoDisabled' : 'userInfoActive'
                    // }
                  >
                    <DatePicker
                      renderCustomHeader={calendarFunc}
                      disabled={isDisabled.birthday}
                      onChange={date => field.onChange(date)}
                      selected={field.value}
                      dateFormat="dd.MM.yyyy"
                      maxDate={Date.now()}
                      wrapperClassName="datePicker"
                      //   borderRadius={'40px'}
                      //   variant={
                      //     isDisabled.birthday ? 'userInfoDisabled' : 'userInfoActive'
                      //   }
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
            <FormLabel display={'flex'} alignItems={'center'} m={'0'}>
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
            <FormLabel display={'flex'} alignItems={'center'} m={'0'}>
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
        </FormControl>
      </Flex>
    </>
  );
};

export default UserForm;
