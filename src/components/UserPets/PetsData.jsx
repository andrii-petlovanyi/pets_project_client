import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import UserPetsList from './PetsList';
import AddPets from './AddPets';

export const UserPetsData = ({ ...props }) => {
  return (
    <Flex
      flexDirection={'column'}
      width={{ base: '100%', xl: 'calc((100vw / 3) * 2)' }}
      {...props}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{ base: '29px', lg: '24px' }}
      >
        <Heading
          fontWeight={500}
          fontSize={{ base: '20px', lg: '28px' }}
          lineHeight={'1.4'}
          letterSpacing={{ base: '0.04em', lg: '0' }}
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
