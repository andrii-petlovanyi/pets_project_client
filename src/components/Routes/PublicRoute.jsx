import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from '../../redux/user/user-selectors';
import { useGetUserQuery } from '../../redux/user/userApiSlice';

function PublicRoute() {
  try {
    const isAuth = useSelector(authSelectors.isAuth);
    const path = Cookies.get('privateRoute');
    const { isLoading } = useGetUserQuery();

    if (!isAuth && !isLoading) return <Outlet />;

    if (isAuth && !isLoading) return <Navigate to={path ? path : '/'} />;
  } catch (error) {
    console.log(error);
  }
}

export default PublicRoute;
