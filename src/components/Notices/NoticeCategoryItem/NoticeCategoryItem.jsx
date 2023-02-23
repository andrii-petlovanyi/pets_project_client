import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Text,
  Image,
  Container,
  Box,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import {
  MdFavorite,
  MdOutlineDeleteOutline,
  MdOutlineFavoriteBorder,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { calculateAnimalAge } from '../../../services/yearsCalc';

import { useDispatch, useSelector } from 'react-redux';
import userSelectors from '../../../redux/user/user-selectors';
import { useDeleteNoticeMutation } from '../../../redux/notices/noticesApiSlice';
import userApiSlice, {
  useAddToFavoriteMutation,
  useDeleteFromFavoriteMutation,
} from '../../../redux/user/userApiSlice';

export const NoticeCategoryItem = ({ notice }) => {
  const { _id: userId, favorites } = useSelector(userSelectors.user);
  const {
    _id: noticeId,
    category,
    title,
    birth,
    breed,
    location,
    price,
    petImage,
    owner,
  } = notice;

  const [removeNotice] = useDeleteNoticeMutation();
  const [addFavorite] = useAddToFavoriteMutation();
  const [removeFavorite] = useDeleteFromFavoriteMutation();
  const isFavorite = favorites.includes(noticeId);
  const dispatch = useDispatch();

  const deleteNotice = async () => {
    try {
      const { data, error } = await removeNotice(noticeId);
      if (error) {
        console.log('error:', error.message);
      }
      console.log('data:', data);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const changeFavorite = async () => {
    try {
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
    <Card
      maxW={{ base: '280px', lg: '336px', xl: '288px' }}
      boxShadow="7px 4px 14px rgba(49, 21, 4, 0.07)"
      borderRadius="0px 0px 40px 40px"
    >
      <CardBody p="0">
        <Box>
          <Image
            src={petImage ? petImage : '#'}
            w={{ base: '280px', lg: '336px', xl: '288px' }}
            h="288"
            objectFit="cover"
            alt={title}
            position="relative"
          />
          <Text
            lineHeight={{ base: '15px', lg: '16px' }}
            css={{
              position: 'absolute',
              top: 20,
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
          <IconButton
            onClick={changeFavorite}
            type="button"
            variant={'cardFavIB'}
            icon={isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
            css={{
              position: 'absolute',
              right: 12,
              top: 12,
            }}
          />
          {/* <IconButton variant={'cardFavIB'} icon={<MdFavorite />} css={{
                        position: 'absolute', right: 12, top: 12,
                    }}/> */}
        </Box>

        <Container
          mt="20px"
          pr={{ base: '29px', lg: '85px', xl: '37px' }}
          pl="20px"
        >
          <Heading
            size="md"
            fontSize="28px"
            fontWeight="700"
            lineHeight="38px"
            letterSpacing="-0.01em"
          >
            {title}
          </Heading>
          <Flex mt="20px">
            <Text fontSize="16px" fontWeight="500" lineHeight="22px">
              Breed:
            </Text>
            <Text ml="37px" fontSize="16px" fontWeight="500" lineHeight="22px">
              {breed}
            </Text>
          </Flex>
          <Flex mt="8px">
            <Text fontSize="16px" fontWeight="500" lineHeight="22px">
              Place:
            </Text>
            <Text ml="40px" fontSize="16px" fontWeight="500" lineHeight="22px">
              {location}
            </Text>
          </Flex>
          <Flex mt="8px">
            <Text fontSize="16px" fontWeight="500" lineHeight="22px">
              Age:
            </Text>
            <Text ml="52px" fontSize="16px" fontWeight="500" lineHeight="22px">
              {calculateAnimalAge(birth)}
            </Text>
          </Flex>
          {category === 'sell' ? (
            <Flex mt="8px">
              <Text fontSize="16px" fontWeight="500" lineHeight="22px">
                Price:
              </Text>
              <Text
                ml="44px"
                fontSize="16px"
                fontWeight="500"
                lineHeight="22px"
              >
                {price ? price : ''}
              </Text>
            </Flex>
          ) : (
            ''
          )}
        </Container>
      </CardBody>
      <CardFooter
        display={'flex'}
        flexDirection={'column'}
        h={'120px'}
        justifyContent={'center'}
      >
        <Button type="button" variant={'outlineCardBtn'} m="0 auto">
          Learn more
        </Button>
        {userId === owner ? (
          <Button
            onClick={deleteNotice}
            type="button"
            m="0 auto"
            mt="12px"
            variant={'outlineCardBtn'}
          >
            <Text mr={'13px'}>Delete</Text>{' '}
            <MdOutlineDeleteOutline size={'20px'} />
          </Button>
        ) : (
          ''
        )}
      </CardFooter>
    </Card>
  );
};

NoticeCategoryItem.propTypes = {
  notice: PropTypes.object,
};
