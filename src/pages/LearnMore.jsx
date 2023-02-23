import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Flex,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';
import userApiSlice, { useAddToFavoriteMutation, useDeleteFromFavoriteMutation } from '../redux/user/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Toast from '../hooks/toast';
import userSelectors from '../redux/user/user-selectors';



// export const UserPetsItem = ({ pet = {} }) => {
//   const { name, birth, breed, avatarURL, comment, _id } = pet;
const LearnMore = ({ notice }) => {
  const isAuth = useSelector(userSelectors.isAuth);

  const { favorites } = useSelector(userSelectors.user);
  const {
    _id: noticeId,
    category,
    title,
    petName,
    birth,
    breed,
    location,
    petSex,
    email,
    phone,
    price,
    petImage,
    comments,
  } = notice;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addFavorite] = useAddToFavoriteMutation();
  const [removeFavorite] = useDeleteFromFavoriteMutation();
  const isFavorite = favorites?.includes(noticeId);
  const dispatch = useDispatch();
  const { addToast } = Toast();

  const changeFavorite = async () => {
    try {
      if (!isAuth) {
        addToast({ message: "Please, authorize to be able to use this feature" });
      }
      if (isFavorite) {
        const { data, error } = await removeFavorite(noticeId);
        if (error) {
          console.log('error:', error.message);
        }
        console.log('data:', data);
        dispatch(userApiSlice.util.invalidateTags(['user']));
      } else {
        const { data, error } = await addFavorite(noticeId);
        if (error) {
          console.log('error:', error.message);
        }
        console.log('data:', data);
        dispatch(userApiSlice.util.invalidateTags(['user']));
      }
    } catch (error) {
      console.log('error:', error);
    }
  };

  const changeCategoryName = category => {
    switch (category) {
      case 'sell':
        return 'Sell';
      case 'for-free':
        return 'In good hands';
      case 'lost-found':
        return 'Lost/found';
    }
  };

  return (
    <>
      <Button onClick={onOpen} variant={'outlineCardBtn'}>
        Learn More
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="background: rgba(17, 17, 17, 0.6)"
          backdropFilter="blur(10px)"
          alignItems={'center'}
        />
        <ModalContent
          maxW={{ base: '280px', lg: '704px' }}
          width={'100%'}
          borderRadius={{ base: '20px', lg: '40px' }}
          padding={{ base: '0', lg: '' }}
        >
          <Flex display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Image
              src={petImage ? petImage : '#'}
              objectFit="cover"
              height={{ base: '240px', lg: '328px' }}
              width={{ base: '240px', lg: '288px' }}
              marginLeft={{ base: '20px', lg: '' }}
              marginTop={{ base: '60px', lg: '32px' }}
              borderRadius={'0px 0px 40px 40px'}
              marginRight={{ base: '20px', lg: '' }}
              alignItems={{ base: '0', lg: '' }}
            />
            <Text
              lineHeight={{ base: '15px', lg: '16px' }}
              css={{
                position: 'absolute',
                top: 52,
                left: 20,
                borderRadius: '0 14px 14px 0',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(2px)',
                width: 158,
                height: 28,
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '0.04em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {changeCategoryName(category)}
            </Text>
            <Box
              flex={{ base: 'none', md: '' }}
              bg="white"
              p={{ base: '4', lg: '' }}
              marginTop={'0'}
            >
              <Box>
                <ModalCloseButton size={'36px'} top={'24px'} right={'24px'} />
                <ModalHeader
                  fontFamily={'Manrope'}
                  fontStyle={'normal'}
                  fontWeight={'700'}
                  fontSize={{ base: '24px', lg: '28px' }}
                  lineHeight={{ base: '33px', lg: '38px' }}
                  maxW={'321px'}
                  pb={"0"}
                >
                  {title}
                </ModalHeader>
                <ModalBody
                  fontFamily={'Manrope'}
                  fontStyle={'normal'}
                  fontWeight={'600'}
                  fontSize={{ base: '14px', lg: '16px' }}
                  lineHeight={{ base: '19px', lg: '22px' }}
                >
                  <Flex mt="20px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Name:
                    </Text>
                    <Text ml="71px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {petName}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Birthday:
                    </Text>
                    <Text ml="51px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {birth}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Breed:
                    </Text>
                    <Text ml="70px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {breed}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Place:
                    </Text>
                    <Text ml="73px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {location}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      The sex:
                    </Text>
                    <Text ml="56px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {petSex}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Email:
                    </Text>
                    <Text ml="74px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {email}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Phone:
                    </Text>
                    <Text ml="66px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {phone}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text fontSize="16px" fontWeight="600" lineHeight="22px">
                      Price:
                    </Text>
                    <Text ml="76px" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {price}$
                    </Text>
                  </Flex>
                </ModalBody>
              </Box>
            </Box>
          </Flex>

          <Flex mt={'28px'}
            mb={"32px"}
            pl={'20px'}
            pr={"24px"}>
            <Text fontSize="16px" fontWeight="600" lineHeight="24px" letterSpacing="0.04em">Comments:</Text>
            <Text fontWeight="500" ml={'5px'}>{comments}</Text>
          </Flex>
          <ModalFooter
            gap={'12px'}
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            pb={"32px"}
            pr={"40px"}
            pt={'0'}
          >
            <Button
              rightIcon={<MdFavorite />}
              variant={'outlineTabBtn'}
              textColor={'#F59256'}
              width={!isFavorite ? { base: '240px', lg: "160px" } : { lg: "240px" }}
              onClick={changeFavorite}
            >
              {!isFavorite ? <Text mr={'13px'}>
                Add to
              </Text> : <Text mr={'13px'}>
                Remove from
              </Text>}
            </Button>
            <Button
              variant={'outlineTabActive'}
              width={{ base: '240px', lg: '160px' }}
              as="a"
              href={{ base: 'phone', lg: 'email' }}
            >
              Contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

LearnMore.propTypes = {
  notice: PropTypes.object,
};
export default LearnMore;
