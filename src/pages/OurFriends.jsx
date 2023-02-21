import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { FriendsCard } from '../components/OurFriends/FriendsCard';
import { useGetFriendsListQuery } from '../redux/friends/friendsApiSlice';
import OfferLoader from '../components/Loaders/CardLoader';

const OurFriends = () => {
  const { data, isLoading } = useGetFriendsListQuery();
  const { friends } = data || [];

  return (
    <>
      <Heading
        as={'h1'}
        variant={'main'}
        align={'center'}
        mt={{ base: '42px', lg: '88px', xl: '61px' }}
        mb={{ base: '28px', lg: '40px', xl: '60px' }}
      >
        Our friends
      </Heading>
      <Flex
        justifyContent={'center'}
        flexWrap={'wrap'}
        gap={{ base: '12px', lg: '32px', xl: '27px' }}
      >
        {!isLoading ? (
          friends.length > 0 &&
          friends.map(f => <FriendsCard key={f._id} friend={f} />)
        ) : (
          <>
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <OfferLoader key={index} />
              ))}
          </>
        )}
      </Flex>
    </>
  );
};

export default OurFriends;
