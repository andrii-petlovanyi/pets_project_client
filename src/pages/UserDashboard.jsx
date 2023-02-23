import { Flex } from '@chakra-ui/react';
import React from 'react';
// import UserAvatar from '../components/UserForm/Avatar';
import UserForm from '../components/UserForm/UserForm';
import UserPetsData from '../components/UserPets/PetsData';
import LearnMore from './LearnMore';

const UserDashboard = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={{ base: '46px', lg: '20px', xl: '32px' }}
      py={{ xl: '58px' }}
    >
      <UserForm />
      <UserPetsData />
      <LearnMore />
    </Flex>
  );
};

export default UserDashboard;
