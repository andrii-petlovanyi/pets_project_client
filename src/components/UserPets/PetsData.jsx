import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import UserPetsList from './PetsList';
import AddPets from './AddPets';

export const UserPetsData = () => {
  return (
    <Flex flexDirection={'column'} width={'100%'}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{ base: '29px', lg: '24px' }}
      >
        <Heading
          fontWeight={500}
          fontSize={{ base: '20px', lg: '28px' }}
          lineHeight={{ base: '27px', lg: '38px' }}
          letterSpacing={'0.04em'}
          color={{ base: 'black', lg: 'textColor' }}
        >
          My pets:
        </Heading>
        <AddPets />
      </Flex>
      <UserPetsList />
    </Flex>
  );
};
export default UserPetsData;
