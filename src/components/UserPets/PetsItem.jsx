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
import PropTypes from 'prop-types';
import userApiSlice, {
  useDeleteMyPetsMutation,
} from '../../redux/user/userApiSlice';
import { useDispatch } from 'react-redux';
import Toast from '../../hooks/toast';

export const UserPetsItem = ({ pet = {} }) => {
  const { name, birth, breed, avatarURL, comment, _id } = pet;

  const [deleteMyPets, { isLoading }] = useDeleteMyPetsMutation();
  const dispatch = useDispatch();
  const { addToast } = Toast();

  const onDeletePet = async ({ _id: petId }) => {
    try {
      const { error } = await deleteMyPets(petId);
      if (error) addToast({ message: error.data.message, type: 'error' });
      addToast({ message: 'Deleted successfully', type: 'success' });
      dispatch(userApiSlice.util.invalidateTags(['user']));
    } catch (error) {
      addToast({ message: error.message, type: 'success' });
    }
  };
  return (
    <Card
      width={'100%'}
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
        src={avatarURL}
        alt={breed}
      />
      <CardBody p={0} ml={{ lg: '32px' }} mt={{ base: '20px', lg: '0' }}>
        <Stack>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Name: {name}
          </Text>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Date of birth: {birth}
          </Text>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Breed: {breed}
          </Text>
          <Text
            color={{ base: 'black', lg: 'textColor' }}
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight={{ base: '19px', lg: '22px' }}
            letterSpacing={'0.04em'}
          >
            Comment: {comment}
          </Text>
        </Stack>
        <IconButton
          onClick={() => {
            onDeletePet({ _id });
          }}
          variant={{ lg: 'secondIB' }}
          position="absolute"
          top={{ base: '272px', lg: '20px' }}
          right={{ base: '12px', lg: '20px' }}
          color={'labelColor'}
          isLoading={isLoading}
          icon={<MdOutlineDeleteOutline size={24} />}
        />
      </CardBody>
    </Card>
  );
};

UserPetsItem.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string,
    birth: PropTypes.string,
    breed: PropTypes.string,
    avatarURL: PropTypes.string,
    comment: PropTypes.string,
  }),
};

export default UserPetsItem;
