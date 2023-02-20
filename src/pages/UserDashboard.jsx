// import { Box, Button, Typography } from '@mui/material';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useForm, Controller } from 'react-hook-form';
import { Input, InputGroup } from '@chakra-ui/input';
import { Button, HStack, Image, Box, Text } from '@chakra-ui/react';
import { MdPhotoCamera } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import React, { useState } from 'react';
import { ButtonUserForm } from '../components/UserForm/IconButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { calendarFunc } from '../components/UserForm/Calendar';

const UserDashboard = () => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      birthday: '',
      phone: '',
      city: '',
    },
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
    console.log(data);

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

      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        display={'flex'}
        flexDirection={'column'}
        maxW={'411'}
        p={'20px 16px'}
        background={'mainColor'}
        boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
        borderRadius={'0px 40px 40px 0px'}
      >
        <Box
          display={'flex'}
          alignItems={'flex-end'}
          justifyContent={'flex-end'}
          mb={'32px'}
        >
          <Image
            borderRadius="full"
            fallbackSrc="https://via.placeholder.com/233"
          />
          <HStack>
            <Button
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              padding={'5px'}
              position="relative"
              right={'11px'}
              backgroundColor={'white'}
              w={'100%'}
              leftIcon={<MdPhotoCamera color={'#F59256'} w={18} h={18} />}
            >
              <Text
                color={'rgba(17, 17, 17, 0.6)'}
                fontFamily={'body'}
                fontWeight={'400'}
                fontSize={'12px'}
                lineHeight={'1.8'}
                letterSpacing={'0.04em'}
              >
                Edit photo
              </Text>
            </Button>
          </HStack>
        </Box>
        <InputGroup
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-around'}
          mb={'15'}
        >
          <FormLabel name="name" display={'flex'} alignItems={'center'} m={'0'}>
            <Text mb={'0'} mr={'0'} w={'107px'}>
              Name:
            </Text>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  backgroundColor={isDisabled.name ? 'white' : 'mainColor'}
                  border={
                    isDisabled.name
                      ? 'white'
                      : '1px solid rgba(245, 146, 86, 0.5)'
                  }
                  borderRadius={'40px'}
                  // outline={'0'}
                  _hover={{ cursor: 'auto', backgroundColor: 'white' }}
                  maxW={'216'}
                  maxH={'32'}
                  p={'4px 12px'}
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
        </InputGroup>
        <InputGroup
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-around'}
          mb={'15'}
        >
          <FormLabel display={'flex'} alignItems={'center'} m={'0'}>
            <Text mb={'0'} mr={'0'} w={'107px'}>
              Email:
            </Text>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={'form'}
                  maxW={'216'}
                  maxH={'32'}
                  p={'4px 12px'}
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
        </InputGroup>
        <InputGroup
          display={'flex'}
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
            <Text mb={'0'} mr={'0'} w={'107px'}>
              Birthday:
            </Text>
            {/* <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={'form'}
                  maxW={'216'}
                  maxH={'32'}
                  p={'4px 12px'}
                  disabled={isDisabled.birthday}
                />
              )}

            /> */}
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                // <Calendar />
                <DatePicker
                  renderCustomHeader={calendarFunc}
                  disabled={isDisabled.birthday}
                  onChange={date => field.onChange(date)}
                  selected={field.value}
                  dateFormat="dd.MM.yyyy"
                  maxDate={Date.now()}
                />
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
        </InputGroup>
        <InputGroup
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-around'}
          mb={'15'}
        >
          <FormLabel display={'flex'} alignItems={'center'} m={'0'}>
            <Text mb={'0'} mr={'0'} w={'107px'}>
              Phone:
            </Text>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={'form'}
                  maxW={'216'}
                  maxH={'32'}
                  p={'4px 12px'}
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
        </InputGroup>
        <InputGroup
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-around'}
          mb={'15'}
        >
          <FormLabel display={'flex'} alignItems={'center'} m={'0'}>
            <Text mb={'0'} mr={'0'} w={'107px'}>
              City:
            </Text>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  variant={'form'}
                  maxW={'216'}
                  maxH={'32'}
                  p={'4px 12px'}
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
        </InputGroup>
        <HStack>
          <Button
            mb={'18px'}
            backgroundColor={'white'}
            display="flex"
            alignItems="center"
            letterSpacing="0.04em"
            leftIcon={<IoIosLogOut color={'#F59256'} w={18} h={18} />}
          >
            <Text
              color={'rgba(17, 17, 17, 0.6)'}
              fontFamily={'body'}
              fontWeight="500"
              fontSize="16px"
              lineHeight="1.4"
            >
              Log Out
            </Text>
          </Button>
        </HStack>
      </FormControl>
    </>
  );
};

export default UserDashboard;
