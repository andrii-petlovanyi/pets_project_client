import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <Flex
        gap={{ base: '12px', xl: '20px' }}
        marginRight={{ lg: '60px', xl: '0' }}
        flexWrap={'wrap'}
      >
        <Button as={NavLink} to="/login" variant="fullBGBtn">
          Login
        </Button>
        <Button as={NavLink} to="/register" variant={'outlineTabBtn'}>
          Registration
        </Button>
      </Flex>
    </>
  );
};
