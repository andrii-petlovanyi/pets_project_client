import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  CardHeader,
  Box,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { useGetFriendsListQuery } from '../redux/friends/friendsApiSlice';

const OurFriends = () => {
  const { data, isLoading } = useGetFriendsListQuery();
  const { friends } = data || [];

  return (
    <>
      <Heading
        fontSize={{ base: '24px', lg: '48px' }}
        align={'center'}
        mt={{ base: '42px', lg: '88px', xl: '61px' }}
        mb={{ base: '28px', lg: '40px', xl: '60px' }}
      >
        Our friends
      </Heading>
      <Flex flexWrap={'wrap'} gap={{ base: '12px', lg: '32px', xl: '27px' }} >
        {!isLoading ? (
          friends.length > 0 &&
          friends.map(f => (
            <Card
              w={{
                base: '280px',
                sm: '280px',
                lg: '336px',
                xl: '395px',
              }}
              h={{
                sm: '192px',
                lg: '246px',
                xl: '287px',
              }}
                  key={f._id}
                  
            >
              <CardHeader
                align={'center'}
                padding={{ base: '12px', lg: '14px', xl: '16px' }}
              >
                <Link
                  color={'mainOrange'}
                  fontSize={{ base: '12px', lg: '18px', xl: '20px' }}
                  fontWeight={'700'}
                  lineHeight={{ base: '14px', lg: '22px', xl: '27px' }}
                  key={f.url}
                >
                  {f.title}
                </Link>
              </CardHeader>
              <Flex>
                <Box
                  w={{
                    base: '110px',
                    lg: '120px',
                    xl: '158px',
                  }}
                  h={{
                    base: '78px',
                    lg: '85px',
                    xl: '112px',
                  }}
                  ml={'4px'}
                >
                  <Image src={f.imageUrl} alt="Partner's image" />
                </Box>

                <CardBody
                  fontSize={{ base: '12px', lg: '14px', xl: '16px' }}
                  lineHeight={{ base: '14px', lg: '19px', xl: '22px' }}
                  pl={{ base: '10px', lg: '16px' }}
                  pb={{ base: '8px', lg: '16px' }}
                  pr={{ base: '10px', lg: '16px' }}
                  pt={0}
                >
                  <Box>
                    <Text>Time:</Text>
                    <Text>09:00- 19:00</Text>
                  </Box>
                  <Box mt={'4px'}>
                    <Text>Address:</Text>
                    <Text>{f.address || '-------------------'}</Text>
                  </Box>
                  <Box mt={'4px'}>
                    <Text>Email:</Text>
                    <Text> {f.email || '-------------------'} </Text>
                  </Box>
                  <Box mt={'4px'}>
                    <Text>Phone:</Text>
                    <Text>{f.phone || '-------------------'}</Text>
                  </Box>
                </CardBody>
              </Flex>
            </Card>
          ))
        ) : (
          <>Loading...</>
        )}
      </Flex>
    </>
  );
};

export default OurFriends;
