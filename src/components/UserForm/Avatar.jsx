import React, { useState } from 'react';
import {
  //   Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import { MdPhotoCamera } from 'react-icons/md';
import { Image, Box, Icon, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
const Avatar = () => {
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
        alignItems={'flex-end'}
        justifyContent={'flex-end'}
        mb={'32px'}
        w={'233px'}
        h={'233px'}
      >
        <Image
          borderRadius="full"
          fallbackSrc="https://via.placeholder.com/233"
          src={imagePreview}
          width={'233px'}
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

export default Avatar;

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
