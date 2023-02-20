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

export const UserPetsItem = ({ name, birth, breed, avatarURL, comment }) => {
  return (
    <Card
      direction={{ base: 'column', lg: 'row' }}
      padding={'20px'}
      borderRadius={{ base: '20px', lg: '40px' }}
      boxShadow={'secondShadow'}
    >
      <Image
        borderRadius={{ lg: '40px', base: '20px' }}
        height={{ lg: '161px', base: '240px' }}
        width={{ lg: '161px', base: '240px' }}
        mx="auto"
        objectFit={'cover'}
        src={avatarURL}
        alt={breed}
      />
      <CardBody>
        <Stack>
          <Text>NAME: {name} </Text>
          <Text>Date of birth: {birth} </Text>
          <Text>Breed: {breed} </Text>
          <Text>{comment}</Text>
        </Stack>
        <IconButton
          variant={'secondIB'}
          position="absolute"
          top={{ lg: '20px', base: '276px' }}
          right="20px"
          color={'labelColor'}
          icon={<MdOutlineDeleteOutline size={'24px'} />}
        />
      </CardBody>
    </Card>
  );
};
export default UserPetsItem;
