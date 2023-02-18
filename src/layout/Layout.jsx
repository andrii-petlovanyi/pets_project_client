import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'

export const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={false}>
                <Outlet />
            </Suspense>
        </div>
    )
}
