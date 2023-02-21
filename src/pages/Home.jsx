import { Heading, Image, Box } from '@chakra-ui/react';
import React from 'react';
import girlWithDog from '../img/homePage/girlWithDog.webp';
import frame from '../img/homePage/frame.webp';
import vector from '../img/homePage/vector.webp';

const Home = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      pt={'60px'}
      minH={'calc(100vh - 64px)'}
      flexDirection={{ base: 'column', xl: 'row' }}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundImage: { base: vector, xl: frame },
        backgroundPositionY: 'bottom',
        bgRepeat: 'no-repeat',
        bgSize: '100%',
        bottom: '0',
        top: '0',
        right: 0,
        left: 0,
        zIndex: '-1',
      }}
    >
      <Heading
        as={'h1'}
        m={'0 auto'}
        mt={{ base: '0px', lg: '28px', xl: '32px' }}
        mb={{ base: '28px', lg: '40px', xl: '40px' }}
        alignSelf={{ base: 'flex-start' }}
        fontSize={{ base: '32px', lg: '68px' }}
        lineHeight={'1,47'}
      >
        Take good care of your small pets
      </Heading>
      <Image
        alignSelf={{ base: 'center', xl: 'flex-end' }}
        src={girlWithDog}
        alt="Girl with dog"
        w={{ base: '320px', lg: '645px', xl: '590px' }}
        h={{ base: '350px', lg: '715px', xl: '640px' }}
        objectFit="cover"
      />
    </Box>
  );
};

export default Home;
