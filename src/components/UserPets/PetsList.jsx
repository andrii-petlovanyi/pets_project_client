import { Flex } from '@chakra-ui/react';
import React from 'react';

import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/user-selectors';
import UserPetsItem from './PetsItem';

export const UserPetsList = () => {
  const { pets } = useSelector(userSelectors.user);
  console.log(pets);

  return (
    <Flex
      width={'100%'}
      flexDirection={'column'}
      gap={{ base: '20px', xl: '22px' }}
    >
      {pets?.length > 0
        ? pets.map(pet => <UserPetsItem key={pet.avatarURL} pet={pet} />)
        : 'Sorry, no pets...'}
    </Flex>
  );
};
export default UserPetsList;
