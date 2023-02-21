import { Flex } from '@chakra-ui/react';
import React from 'react';
import UserForm from '../components/UserForm/UserForm';
import UserPetsData from '../components/UserPets/PetsData';

const UserDashboard = () => {
  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: '46px', lg: '20px', xl: '32px' }} py={{ xl: '58px' }}>
      <UserForm />
      <UserPetsData />
    </Flex>
  );
};

export default UserDashboard;
