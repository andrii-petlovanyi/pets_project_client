import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button as={Link} to="login" variant="outlineTabActive">
          Login
        </Button>
        <Button as={Link} to="register" variant={'outlineTabBtn'}>
          Registration
        </Button>
      </div>
    </>
  );
};
