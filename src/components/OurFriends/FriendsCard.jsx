import { getDay } from 'date-fns';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { ScheduleMenu } from './ScheduleMenu';

export const FriendsCard = ({ friend = {} }) => {
  const { title, url, imageUrl, address, email, phone, workDays, _id } = friend;

  const result = getDay(new Date(Date.now())) - 1;
  console.log(result);

  return (
    <Card
      w={{
        base: '280px',
        lg: '336px',
        xl: '395px',
      }}
      h={{
        base: '192px',
        lg: '246px',
        xl: '287px',
      }}
      bg={'white'}
      color={'black'}
    >
      <CardHeader
        align={'center'}
        padding={{ base: '12px', lg: '14px', xl: '16px' }}
      >
        <Link variant={'friends'} href={url} target={'_blank'}>
          {title}
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
          <Image src={imageUrl} alt="Partner's image" />
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
            <ScheduleMenu workDays={workDays} key={_id} />
          </Box>
          <Box mt={'4px'}>
            <Text>Address:</Text>
            <Text>{address || '-------------------'}</Text>
          </Box>
          <Box mt={'4px'}>
            <Text>Email:</Text>
            <Text> {email || '-------------------'} </Text>
          </Box>
          <Box mt={'4px'}>
            <Text>Phone:</Text>
            <Text>{phone || '-------------------'}</Text>
          </Box>
        </CardBody>
      </Flex>
    </Card>
  );
};

FriendsCard.propTypes = {
  friend: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    workDays: PropTypes.arrayOf(PropTypes.object),
  }),
};
