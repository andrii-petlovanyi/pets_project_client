import { Box } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/authBg.webp';
import RegisterForm from '../components/Auth/RegisterForm';

const Register = () => {
  return (
    <Box
      minH={'calc(100vh - 64px)'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      _after={{
        content: '""',
        position: 'absolute',
        backgroundImage: bg,
        backgroundPositionY: 'bottom',
        bgRepeat: 'no-repeat',
        bgSize: '100%',
        bottom: '0',
        top: '0',
        right: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
