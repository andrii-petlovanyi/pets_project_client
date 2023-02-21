import React from 'react';

import {
  Skeleton,
  Card,
  CardHeader,
  CardFooter,
  Flex,
  CardBody,
} from '@chakra-ui/react';

const NewsLoader = () => {
  return (
    <div>
      <Card
        display={'block'}
        m={{ base: '0 auto', lg: '28px 0 0 0' }}
        w={{ base: '280px', lg: '336px', xl: '395px' }}
        h={'266px'}
        // overflow={'hidden'}
        color={'textColor'}
        bg={'mainColor'}
        boxShadow={'none'}
        borderRadius={'0px'}
      >
        <Skeleton height="4px" />
        <CardHeader p={'0px'} mb={'4'} mt={'4px'}>
          <Skeleton height="66px" />
        </CardHeader>
        <CardBody p={'0px'} h={'110px'} mb={{ base: '5', lg: '10' }}>
          <Skeleton height="110px" />
        </CardBody>
        <CardFooter p={'0'}>
          <Flex w={'395px'} justify={'space-between'}>
            <Skeleton height="20px" w={'85px'} />
            <Skeleton height="20px" w={'72px'} />
          </Flex>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsLoader;
