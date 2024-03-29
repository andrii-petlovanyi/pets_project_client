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
import userApiSlice, {
  useAddToFavoriteMutation,
  useDeleteFromFavoriteMutation,
} from '../../../redux/user/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Toast from '../../../hooks/toast';
import userSelectors from '../../../redux/user/user-selectors';
import { useGetNoticeByIdQuery } from '../../../redux/notices/noticesApiSlice';
import placeholder from '../../../assets/placeholder.webp';

export const LearnMore = ({ noticeId }) => {
  const isAuth = useSelector(userSelectors.isAuth);

  const { favorites } = useSelector(userSelectors.user);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addFavorite] = useAddToFavoriteMutation();
  const [removeFavorite] = useDeleteFromFavoriteMutation();
  const isFavorite = favorites?.includes(noticeId);
  const dispatch = useDispatch();
  const { addToast } = Toast();

  const { data: res } = useGetNoticeByIdQuery(noticeId);
  const { notice } = res || {};

  const changeFavorite = async () => {
    try {
      if (!isAuth) {
        addToast({
          message: 'Please, authorize to be able to use this feature',
          type: 'warning',
        });

        return;
      }
      if (isFavorite) {
        const { data, error } = await removeFavorite(noticeId);

        if (error) {
          console.log('error:', error.message);
        }

        console.log('data:', data);

        addToast({
          message:
            'The notice was removed successfully from the favorites list!',
          type: 'success',
        });

        dispatch(userApiSlice.util.invalidateTags(['user']));
      } else {
        const { data, error } = await addFavorite(noticeId);

        if (error) {
          console.log('error:', error.message);
        }

        console.log('data:', data);

        addToast({
          message: 'The notice was added successfully to the favorites list!',
          type: 'success',
        });

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

  const handleClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = `tel:${notice?.owner?.phone}`;
    } else {
      window.location.href = `mailto:${notice?.owner?.email}`;
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
          overflow={'hidden'}
        >
          <Flex display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Image
              src={notice?.petImage ? notice?.petImage : placeholder}
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
              top={{ base: '80px', lg: '52px' }}
              css={{
                position: 'absolute',
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
              {changeCategoryName(notice?.category)}
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
                  pb={'0'}
                >
                  {notice?.title}
                </ModalHeader>
                <ModalBody
                  fontFamily={'Manrope'}
                  fontStyle={'normal'}
                  fontWeight="600"
                  fontSize={{ base: '14px', lg: '16px' }}
                  lineHeight={{ base: '19px', lg: '22px' }}
                  p={0}
                >
                  <Flex mt="20px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Name:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                      wordBreak={'break-word'}
                      w={'calc(100% - 118px)'}
                    >
                      {notice?.petName}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Birthday:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                    >
                      {notice?.birth}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Breed:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                      wordBreak={'break-word'}
                      w={'calc(100% - 118px)'}
                    >
                      {notice?.breed}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Place:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                      wordBreak={'break-word'}
                      w={'calc(100% - 118px)'}
                    >
                      {notice?.location}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Sex:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                    >
                      {notice?.petSex}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Email:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                      wordBreak={'break-all'}
                      w={'calc(100% - 118px)'}
                    >
                      {notice?.owner?.email}
                    </Text>
                  </Flex>
                  <Flex mt="8px">
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      lineHeight="22px"
                      w={{ base: '118px', lg: '121px' }}
                    >
                      Phone:
                    </Text>
                    <Text
                      fontSize={{ base: '14px', lg: '16px' }}
                      fontWeight="500"
                      lineHeight={{ base: '19px', lg: '22px' }}
                    >
                      {notice?.owner?.phone}
                    </Text>
                  </Flex>
                  {!!notice?.price && (
                    <Flex mt="8px">
                      <Text
                        fontSize="16px"
                        fontWeight="600"
                        lineHeight="22px"
                        w={{ base: '118px', lg: '121px' }}
                      >
                        Price:
                      </Text>
                      <Text
                        fontSize={{ base: '14px', lg: '16px' }}
                        fontWeight="500"
                        lineHeight={{ base: '19px', lg: '22px' }}
                        wordBreak={'break-word'}
                        w={'calc(100% - 118px)'}
                      >
                        {notice?.price}₴
                      </Text>
                    </Flex>
                  )}
                </ModalBody>
              </Box>
            </Box>
          </Flex>

          {!!notice?.comments && (
            <Flex mt={'28px'} mb={'32px'} pl={'20px'} pr={'24px'}>
              <Text fontWeight="500" wordBreak={'break-word'}>
                <Box
                  as="span"
                  fontSize={{ base: '14px', lg: '16px' }}
                  fontWeight="600"
                  lineHeight={{ base: '19px', lg: '22px' }}
                  letterSpacing="0.04em"
                  wordBreak={'break-word'}
                >
                  Comments:{' '}
                </Box>
                {notice?.comments}
              </Text>
            </Flex>
          )}
          <ModalFooter
            gap={'12px'}
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            pb={'32px'}
            pr={'40px'}
            pt={'0'}
          >
            <Button
              rightIcon={<MdFavorite />}
              variant={'outlineTabBtn'}
              textColor={'#F59256'}
              width={
                !isFavorite ? { base: '240px', lg: '160px' } : { lg: '240px' }
              }
              onClick={changeFavorite}
            >
              {!isFavorite ? (
                <Text mr={'13px'}>Add to</Text>
              ) : (
                <Text mr={'13px'}>Remove from</Text>
              )}
            </Button>
            <Button
              variant={'outlineTabActive'}
              width={{ base: '240px', lg: '160px' }}
              // as="a"
              // href={{ base: 'phone', lg: 'email' }}
              onClick={handleClick}
            >
              Contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

LearnMore.propTypes = {
  noticeId: PropTypes.string,
};
