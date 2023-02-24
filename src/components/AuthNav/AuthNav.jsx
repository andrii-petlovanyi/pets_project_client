import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const AuthNav = ({ changeDisplay }) => {
  return (
    <>
      <Flex
        gap={{ base: '12px', xl: '20px' }}
        marginRight={{ lg: '60px', xl: '0' }}
        flexWrap={'wrap'}
      >
        <Button
          as={Link}
          to="login"
          variant="fullBGBtn"
          onClick={() => changeDisplay('none')}
        >
          Login
        </Button>
        <Button
          as={Link}
          to="register"
          variant={'outlineTabBtn'}
          onClick={() => changeDisplay('none')}
        >
          Registration
        </Button>
      </Flex>
    </>
  );
};

AuthNav.propTypes = {
  changeDisplay: PropTypes.func,
};
