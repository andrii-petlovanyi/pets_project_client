import { lazy } from 'react';

// export const Login = lazy(() => import('./Login'));
// export const Register = lazy(() => import('./Register'));
export const News = lazy(() => import('./News'));
export const NotFound = lazy(() => import('./NotFound'));
export const Notices = lazy(() => import('./Notices'));
export const OurFriends = lazy(() => import('./OurFriends'));
export const UserDashboard = lazy(() => import('./UserDashboard'));
export const Home = lazy(() => import('./Home'));

export * from './Login';
export * from './Register';
