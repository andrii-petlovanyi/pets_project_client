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

export const UserPetsList = () => {
  const { pets } = useSelector(userSelectors.user);
  console.log(pets);
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      padding={'20px'}
      borderRadius={{ md: '40px', base: '20px' }}
      boxShadow={'secondShadow'}
    >
      <Image
        borderRadius={{ md: '40px', base: '20px' }}
        height={{ md: '161px', base: '240px' }}
        width={{ md: '161px', base: '240px' }}
        mx="auto"
        objectFit={'cover'}
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWqWnGvr_WwE82AWFri7NS4nJ1IvQpJBFOA&usqp=CAU'
        }
        alt="Cat"
      />
      <CardBody>
        <Stack>
          <Text>NAME: JACK </Text>
          <Text>Date of birth: 22.04.2018 </Text>
          <Text>Breed: Persian cat </Text>
          <Text>
            Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur{' '}
          </Text>
        </Stack>
        <IconButton
          variant={'secondIB'}
          position="absolute"
          top={{ md: '20px', base: '276px' }}
          right="20px"
          color={'labelColor'}
          icon={<MdOutlineDeleteOutline size={'24px'} />}
        />
      </CardBody>
    </Card>
  );
};
export default UserPetsList;
