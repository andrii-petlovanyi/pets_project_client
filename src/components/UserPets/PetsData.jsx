import React from 'react';
import { Flex, Heading, } from '@chakra-ui/react';
import UserPetsList from './PetsList';
import AddPets from './AddPets';

export const UserPetsData = () => {
  return (
    <Flex flexDirection={'column'} width={'100%'}>
      <Flex justifyContent={'space-between'} >
        <Heading mb={'20px'}>My pets:</Heading>
        <AddPets />
      </Flex>
      <UserPetsList />
    </Flex>
  );
};
export default UserPetsData;
