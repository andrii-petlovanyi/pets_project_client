import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import { refresh } from '../../redux/user/userSlice';

export const AuthNav = () => {
  return (
    <>
      <Flex
        gap={{ base: '12px', xl: '20px' }}
        marginRight={{ lg: '60px', xl: '0' }}
        flexWrap={'wrap'}
      >

        <Button as={Link} to="login" variant="fullBGBtn" onClick={refresh()}>
          Login
        </Button>
        <Button as={Link} to="register" variant={'outlineTabBtn'} onClick={refresh()}>
          Registration
        </Button>
      </Flex>
    </>
  );
};
