import React from 'react';
import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/user-selectors';
// import UserPetsItem from './PetsItem';

export const UserPetsList = () => {
  const { pets } = useSelector(userSelectors.user);
  console.log(pets);

  return (
    // pets.length > 0 &&
    // pets.map(pet => <UserPetsItem key={pet.avatarURL} pet={pet} />)

    // НИЖЧЕ КОД ВИДАЛИТИ, А ЗАКОМЕНТОВАНИЙ РОЗКОМЕНТУВАТЬ
    <Card
      direction={{ base: 'column', lg: 'row' }}
      pt={'16px'}
      padding={'20px'}
      borderRadius={{ base: '20px', lg: '40px' }}
      boxShadow={'secondShadow'}
    >
      <Image
        borderRadius={{ base: '20px', lg: '40px' }}
        height={{ base: '240px', lg: '161px' }}
        width={{ base: '240px', lg: '161px' }}
        mx="auto"
        objectFit={'cover'}
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWqWnGvr_WwE82AWFri7NS4nJ1IvQpJBFOA&usqp=CAU'
        }
        alt="Cat"
      />
      <CardBody p={0} ml={{ lg: '32px' }} mt={{ base: '20px', lg: '0' }}>
        <Stack spacing={'12px'}>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            NAME: Jack{' '}
          </Text>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Date of birth: 22.04.2018{' '}
          </Text>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Breed: Persian cat{' '}
          </Text>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur{' '}
          </Text>
        </Stack>
        <IconButton
          variant={{ lg: 'secondIB' }}
          position="absolute"
          top={{ base: '272px', lg: '20px' }}
          right={{ base: '12px', lg: '20px' }}
          color={'labelColor'}
          icon={<MdOutlineDeleteOutline size={24} />}
        />
      </CardBody>
    </Card>
  );
};
export default UserPetsList;
