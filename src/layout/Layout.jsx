import { Container } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';

export const Layout = () => {
  return (
    <Container
      maxW={'1280px'}
      position={'relative'}
      padding={{ base: '16px 20px', lg: '24px 32px', xl: '20px 16px' }}
    >
      <Header />
      <Suspense fallback={false}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
