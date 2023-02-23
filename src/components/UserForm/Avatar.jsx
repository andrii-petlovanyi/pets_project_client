import React, { useState } from 'react';
import {
  // Controller,
  useForm,
} from 'react-hook-form';
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
import UserPic from '../../assets/abstract_user.svg';
import userApiSlice, {
  useUpdateUserMutation,
} from '../../redux/user/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';

import userSelectors from '../../redux/user/user-selectors';

const UserAvatar = () => {
  // const [isDisabled, setIsDisabled] = useState(INITIAL_DISABLED);
  // console.log(isDisabled);
  // const [imagePreview, setImagePreview] = useState(null);
  const [avatarError, setAvatarError] = useState('');
  // console.log(setAvatarError);
  const user = useSelector(userSelectors.user);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();

  const {
    // control,
    handleSubmit,
    register,
    watch,
    reset,
    // formState: { errors },
  } = useForm();
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
      if (error) return console.log(error);
      dispatch(userApiSlice.util.invalidateTags(['user']));
      console.log(res);
      reset({ avatarURL: null });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(onSubmit);
  // const onSubmit1 = async data => {
  //   console.log(data);
  // };

  // const handleImageChange = event => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       setImagePreview(reader.result);
  //     };
  //     console.log(file);
  //   }
  // };
  return (
    <FormControl
      isInvalid={avatarError}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems="center"
      mb={'32px'}
      // webkit-align-items={'flex-start'}
      // position={'relative'}
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
        justifyContent="flex-end"
        position={'relative'}
        top={'-18px'}
        left={'-6px'}
      >
        <FormLabel
          htmlFor="avatarURL"
          margin={'0'}
          style={{ cursor: 'pointer' }}
          // h={'0'}
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
          <Flex>
            <IconButton
              onClick={handleSubmit(onSubmit)}
              minWidth={'32px'}
              height="32px"
              ml="0px"
              background="mainColor"
              backdropFilter="blur(2px)"
              borderRadius="50px"
              border="none"
              icon={<Icon as={GoCheck} boxSize={5} color={'labelColor'} />}
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
                  color={'labelColor'}
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

// import React, { useState } from 'react';
// import {
//   // Controller,
//   useForm,
// } from 'react-hook-form';
// import { GoCheck } from 'react-icons/go';
// import { MdOutlineDeleteOutline } from 'react-icons/md';
// import { MdPhotoCamera } from 'react-icons/md';
// import {
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   IconButton,
//   Image,
//   Input,
// } from '@chakra-ui/react';
// import { Box, Icon, Text } from '@chakra-ui/react';
// import UserPic from '../../assets/abstract_user.svg';
// import userApiSlice, {
//   useUpdateUserMutation,
// } from '../../redux/user/userApiSlice';
// import { useDispatch, useSelector } from 'react-redux';
// // import { userFormSchema } from '../../services/validation';
// // import { yupResolver } from '@hookform/resolvers/yup';
// import userSelectors from '../../redux/user/user-selectors';

// const UserAvatar = () => {
//   // const [isDisabled, setIsDisabled] = useState(INITIAL_DISABLED);
//   // console.log(isDisabled);
//   const [avatarError, setAvatarError] = useState('');
//   console.log(avatarError);
//   const user = useSelector(userSelectors.user);
//   // const [imagePreview, setImagePreview] = useState(null);
//   const [updateUser] = useUpdateUserMutation();
//   const dispatch = useDispatch();

//   const {
//     // control,
//     handleSubmit,
//     register,
//     // watch,
//     reset,
//     // formState: { errors },
//   } = useForm({
//     // defaultValues: {
//     //   avatarURL: '',
//     // },
//     // resolver: yupResolver(userFormSchema),
//   });
//   console.log(user);
//   // const newImage = watch('avatarURL');

//   const onSubmit = async data => {
//     console.log(data);
//     if (!data.avatarURL[0]) {
//       console.log(data.avatarURL[0]);
//       return setAvatarError('Avatar is required');
//     }
//     const formData = new FormData();
//     formData.append('avatarURL', data.avatarURL[0]);
//     try {
//       const { data: res, error } = await updateUser(formData);
//       if (error) return console.log(error);
//       dispatch(userApiSlice.util.invalidateTags(['user']));
//       console.log(res);
//       reset();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(onSubmit);
//   // const handleImageChange = event => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.readAsDataURL(file);
//   //     reader.onload = () => {
//   //       setImagePreview(reader.result);
//   //     };
//   //     console.log(file);
//   //   }
//   // };
//   return (
//     <form>
//       <input type="file" {...register('avatarURL')} />

//       <button
//         // type="submit"
//         onClick={handleSubmit(onSubmit)}
//       >
//         submit
//       </button>
//     </form>
//   );
// };

// export default UserAvatar;
