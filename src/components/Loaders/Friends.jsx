import { Card,Box, Skeleton, SkeletonCircle, CardHeader } from '@chakra-ui/react';
const React = require('react');

const OfferLoader = () => {
  return (
    <>
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
        bg={'mainColor'}
        color={'black'}
      >
        <CardHeader
          align={'center'}
          padding={{ base: '12px', lg: '14px', xl: '16px' }}
        >
          <Skeleton height="20px" w={'240px'} />
        </CardHeader>
        <Box
          position="absolute"
          top="60px"
          left="10px"
          display="flex"
          w={'120px'}
          alignItems="center"
        >
          <SkeletonCircle size="20" />
        </Box>
        <Box
          position="absolute"
          top="60px"
          right="10px"
          gap="10px"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          w={{
            base: '140px',
            lg: '200px',
            xl: '250px',
          }}
        >
          <Skeleton
            height={{
              base: '10px',
              lg: '15px',
              xl: '25px',
            }}
            w={'100%'}
          />
          <Skeleton
            height={{
              base: '10px',
              lg: '15px',
              xl: '25px',
            }}
            w={'100%'}
          />
          <Skeleton height={{
              base: '10px',
              lg: '15px',
              xl: '25px',
            }} w={'100%'} />
          <Skeleton height={{
              base: '10px',
              lg: '15px',
              xl: '25px',
            }} w={'100%'} />
          <Skeleton height={{
              base: '10px',
              lg: '15px',
              xl: '25px',
            }} w={'100%'} />
        </Box>
        
      </Card>
    </>
  );
};

export default OfferLoader;
