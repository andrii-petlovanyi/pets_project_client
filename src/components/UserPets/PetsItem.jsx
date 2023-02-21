// import React from 'react';
// import {
//   Card,
//   CardBody,
//   Text,
//   Image,
//   Stack,
//   IconButton,
// } from '@chakra-ui/react';
// import { MdOutlineDeleteOutline } from 'react-icons/md';
// import { useDeleteMyPetsMutation } from '../../redux/user/userApiSlice';
// import { useDispatch } from 'react-redux';

// export const UserPetsItem = ({ pet = {} }) => {
//   const { name, birth, breed, avatarURL, comment } = pet;
//   const onDeletePet = petId => {
//     dispatch(useDeleteMyPetsMutation(petId));
//   };
//   return (
//     <Card
//       direction={{ base: 'column', lg: 'row' }}
//       pt={'16px'}
//       padding={'20px'}
//       borderRadius={{ base: '20px', lg: '40px' }}
//       boxShadow={'secondShadow'}
//     >
//       <Image
//         borderRadius={{ base: '20px', lg: '40px' }}
//         height={{ base: '240px', lg: '161px' }}
//         width={{ base: '240px', lg: '161px' }}
//         mx="auto"
//         objectFit={'cover'}
//         src={avatarURL}
//         alt={breed}
//       />
//       <CardBody p={0} ml={{ lg: '32px' }} mt={{ base: '20px', lg: '0' }}>
//         <Stack>
//           <Text
//             color={{ base: 'black', lg: 'textColor' }}
//             fontSize={{ base: '14px', lg: '16px' }}
//             lineHeight={{ base: '19px', lg: '22px' }}
//             letterSpacing={'0.04em'}
//           >
//             NAME: {name}{' '}
//           </Text>
//           <Text
//             color={{ base: 'black', lg: 'textColor' }}
//             fontSize={{ base: '14px', lg: '16px' }}
//             lineHeight={{ base: '19px', lg: '22px' }}
//             letterSpacing={'0.04em'}
//           >
//             Date of birth: {birth}{' '}
//           </Text>
//           <Text
//             color={{ base: 'black', lg: 'textColor' }}
//             fontSize={{ base: '14px', lg: '16px' }}
//             lineHeight={{ base: '19px', lg: '22px' }}
//             letterSpacing={'0.04em'}
//           >
//             Breed: {breed}{' '}
//           </Text>
//           <Text
//             color={{ base: 'black', lg: 'textColor' }}
//             fontSize={{ base: '14px', lg: '16px' }}
//             lineHeight={{ base: '19px', lg: '22px' }}
//             letterSpacing={'0.04em'}
//           >
//             {comment}
//           </Text>
//         </Stack>
//         <IconButton
//           onClick={() => {
//             onDeletePet({ _id?????????????????????????????????????? });
//           }}
//           variant={{ lg: 'secondIB' }}
//           position="absolute"
//           top={{ base: '272px', lg: '20px' }}
//           right={{ base: '12px', lg: '20px' }}
//           color={'labelColor'}
//           icon={<MdOutlineDeleteOutline size={24} />}
//         />
//       </CardBody>
//     </Card>
//   );
// };

// UserPetsItem.propTypes = {
//   pet: PropTypes.shape({
//     name: PropTypes.string,
//     birth: PropTypes.string,
//     breed: PropTypes.string,
//     avatarURL: PropTypes.string,
//     comment: PropTypes.string,
//   }),
// };

// export default UserPetsItem;
