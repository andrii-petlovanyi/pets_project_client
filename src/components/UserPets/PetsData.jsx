import React from 'react';
import { Heading, Button, IconButton } from '@chakra-ui/react';
import { HiPlus } from 'react-icons/hi';

export const UserPetsData = () => {
  return (
    <>
      <Heading mb={'20px'}>My pets:</Heading>
      <Button variant={'clearAddBtn'}>
        Add pet
        <IconButton variant={'mainIB'} icon={<HiPlus />} />
      </Button>
      <UserPetsList />
    </>
  );
};
export default UserPetsData;
