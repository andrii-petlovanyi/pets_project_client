import React from 'react';
import { Heading, Box, IconButton } from '@chakra-ui/react';
import { HiPlus } from 'react-icons/hi';
import UserPetsList from './PetsList';

export const UserPetsData = () => {
  return (
    <>
      <Heading mb={'20px'}>My pets:</Heading>
      <Box
        color={'textColor'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'27px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'12px'}
      >
        Add pet
        <IconButton variant={'mainIB'} icon={<HiPlus />} />
      </Box>
      <UserPetsList />
    </>
  );
};
export default UserPetsData;
