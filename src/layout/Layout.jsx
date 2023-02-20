import { Container } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderNew } from '../components/layout/Header2'
// import Header from '../components/layout/Header'

export const Layout = () => {
    return (
        <Container maxW={'1280px'}>
            {/* <Header /> */}
            <HeaderNew />
            <Suspense fallback={false}>
                <Outlet />
            </Suspense>
        </Container>
    )
}
