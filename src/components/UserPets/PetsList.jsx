import { Flex } from '@chakra-ui/react';
import React from 'react';

import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/user-selectors';
import UserPetsItem from './PetsItem';

export const UserPetsList = () => {
  const { pets } = useSelector(userSelectors.user);

  return (
    <Flex
      width={'100%'}
      flexDirection={{ base: 'row', lg: 'column' }}
      flexWrap={'wrap'}
      gap={{ base: '20px', xl: '22px' }}
      justifyContent={'center'}
    >
      {pets?.length > 0
        ? pets.map(pet => <UserPetsItem key={pet.avatarURL} pet={pet} />)
        : 'Sorry, no pets...'}
    </Flex>
  );
};
export default UserPetsList;
