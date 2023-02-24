import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { GoCheck } from 'react-icons/go';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { MdPhotoCamera } from 'react-icons/md';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
} from '@chakra-ui/react';
import { Box, Icon, Text } from '@chakra-ui/react';
import Toast from '../../hooks/toast';
import UserPic from '../../assets/abstract_user.svg';
import userApiSlice, {
  useUpdateUserMutation,
} from '../../redux/user/userApiSlice';

import userSelectors from '../../redux/user/user-selectors';

const UserAvatar = () => {
  const [avatarError, setAvatarError] = useState('');
  const user = useSelector(userSelectors.user);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const { addToast } = Toast();

  const { handleSubmit, register, watch, reset } = useForm();
  console.log(user);
  const newImage = watch('avatarURL');

  const onSubmit = async data => {
    console.log(data);
    if (!data.avatarURL[0]) {
      console.log(data.avatarURL[0]);
      return setAvatarError('Avatar is required');
    }
    const formData = new FormData();
    formData.append('avatarURL', data.avatarURL[0]);
    try {
      const { data: res, error } = await updateUser(formData);
      if (error) addToast({ message: error.data.message, type: 'error' });
      addToast({ message: res.message, type: 'success' });
      dispatch(userApiSlice.util.invalidateTags(['user']));
      console.log(res);
      reset({ avatarURL: null });
    } catch (error) {
      addToast({ message: error.message, type: 'success' });
    }
  };

  return (
    <FormControl
      isInvalid={avatarError}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems="center"
      mb={'32px'}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        w={'233px'}
        h={'233px'}
        backgroundColor={'#d9d7d7'}
        borderRadius={'50%'}
      >
        <Image
          borderRadius="full"
          src={
            newImage && newImage[0]
              ? URL.createObjectURL(newImage[0])
              : user.avatarURL
              ? user.avatarURL
              : UserPic
          }
          width={'233x'}
          height={'233px'}
          boxSize="233px"
          objectFit="cover"
        />

        <FormErrorMessage
          position={'absolute'}
          bottom={'-20px'}
          left={'50%'}
          transform={'translateX(-50%)'}
        >
          {avatarError}
        </FormErrorMessage>
      </Box>
      <Flex
        w={'100%'}
        display={'flex'}
        justifyContent={'flex-end'}
        position={'relative'}
        top={{ xl: '-18px' }}
        left={{ xl: '-6px' }}
        mt={{ base: '12px', lg: '8px', xl: '0px' }}
      >
        <FormLabel
          htmlFor="avatarURL"
          margin={'0'}
          style={{ cursor: 'pointer' }}
        >
          <Input
            id="avatarURL"
            display={'none'}
            type="file"
            {...register('avatarURL')}
          />
          {!newImage && (
            <Flex padding={'3px 6px'}>
              <Icon as={MdPhotoCamera} boxSize={5} color={'#F59256'} />
              <Text fontWeight={'400'} fontSize={'12px'} lineHeight={'1.8'}>
                Edit photo
              </Text>
            </Flex>
          )}
        </FormLabel>
        {newImage && (
          <Flex
            w={'100%'}
            display={'flex'}
            // justifyContent={{ base: 'space-around', lg: 'flex-end' }}
            justifyContent={'flex-end'}
            position={'relative'}
            top={{ xl: '-18px' }}
            left={{ xl: '-6px' }}
            mt={{ base: '12px', lg: '8px', xl: '0px' }}
          >
            <IconButton
              onClick={handleSubmit(onSubmit)}
              minWidth={'32px'}
              height="32px"
              ml="0px"
              background="mainColor"
              backdropFilter="blur(2px)"
              borderRadius="50px"
              border="none"
              icon={<Icon as={GoCheck} boxSize={5} color={'mainOrange'} />}
            />
            <IconButton
              onClick={() => {
                reset({ avatarURL: null });
              }}
              minWidth={'32px'}
              height="32px"
              ml="8px"
              background="mainColor"
              backdropFilter="blur(2px)"
              borderRadius="50px"
              border="none"
              icon={
                <Icon
                  as={MdOutlineDeleteOutline}
                  boxSize={5}
                  color={'mainOrange'}
                />
              }
            />
          </Flex>
        )}
      </Flex>
    </FormControl>
  );
};

export default UserAvatar;
