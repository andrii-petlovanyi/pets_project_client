import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <Flex
        gap={{ base: '12px', xl: '20px' }}
        marginRight={{ lg: '60px', xl: '0' }}
      >
        <Button as={Link} to="login" variant="outlineTabActive">
          Login
        </Button>
        <Button as={Link} to="register" variant={'outlineTabBtn'}>
          Registration
        </Button>
      </Flex>
    </>
  );
};
