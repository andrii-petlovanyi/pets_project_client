import React from 'react';
import { Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <>
      <Text
        as="p"
        fontSize={{ base: '28px', lg: '32px' }}
        fontFamily="Poppins"
        fontWeight="700"
        letterSpacing="0.07em"
        lineHeight="1.5"
      >
        pe
        <Text as="span" color={'mainOrange'}>
          t
        </Text>
        ly
      </Text>
    </>
  );
};
export default Logo;
