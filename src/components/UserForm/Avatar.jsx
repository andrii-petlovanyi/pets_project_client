import React, { useState } from 'react';
import {
  // Avatar,
  //   Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
} from '@chakra-ui/react';
// import { AiOutlineUser } from 'react-icons/ai';
import UserPic from '../../assets/abstract_user.svg';
// import { FaRegUserCircle } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';

import { Box, Icon, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
const UserAvatar = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    // handleSubmit,
    //   formState: { errors },
  } = useForm();

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      console.log(file);
    }
  };
  return (
    <FormControl
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems="center"
      position={'relative'}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        mb={'32px'}
        w={'233px'}
        h={'233px'}
        backgroundColor={'#d9d7d7'}
        borderRadius={'50%'}
      >
        <Image
          borderRadius="full"
          // color="labelColor"
          src={imagePreview ? imagePreview : UserPic}
          width={'233x'}
          height={'233px'}
          boxSize="233px"
          objectFit="cover"
        />
      </Box>
      <FormLabel
        htmlFor="image"
        // width={'182px'}
        // height={'182px'}
        // bg={'mainColor'}
        // borderRadius={'40px'}
        margin={'0'}
        style={{ cursor: 'pointer' }}
      >
        <Input
          id="image"
          display={'none'}
          type="file"
          {...register('image')}
          onChange={handleImageChange}
        />
        {!imagePreview && (
          // <Icon
          //   as={MdPhotoCamera}
          //   pointerEvents={'none'}
          //   position={'absolute'}
          //   //   top={'50%'}
          //   //   left={'50%'}
          //   //   transform={'translate(-50%, -50%)'}
          //   fontSize={'48px'}
          // />
          <HStack>
            {/* <Button
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              padding={'0px'}
              position="relative"
              right={'11px'}
              backgroundColor={'white'}
              w={'100%'}
            > */}
            <Icon as={MdPhotoCamera} boxSize={5} color={'#F59256'} />
            <Text fontWeight={'400'} fontSize={'12px'} lineHeight={'1.8'}>
              Edit photo
            </Text>
            {/* </Button> */}
          </HStack>
        )}
      </FormLabel>{' '}
      {imagePreview && (
        <>
          <button
            onClick={() => {
              console.log(imagePreview);
            }}
          >
            V
          </button>
          <button
            onClick={() => {
              setImagePreview(null);
            }}
          >
            X
          </button>
        </>
      )}
    </FormControl>
  );
};

export default UserAvatar;

{
  /* <HStack>
              <Button
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                padding={'0px'}
                position="relative"
                right={'11px'}
                backgroundColor={'white'}
                w={'100%'}
              >
                <Icon as={MdPhotoCamera} boxSize={5} color={'#F59256'} />
                <Text fontWeight={'400'} fontSize={'12px'} lineHeight={'1.8'}>
                  Edit photo
                </Text>
              </Button>
            </HStack> */
}
