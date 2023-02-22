import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import './index.css';
import {
  Home,
  News,
  NotFound,
  Notices,
  OurFriends,
  UserDashboard,
} from './pages';
import { useGetUserQuery } from './redux/user/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from './redux/user/user-selectors';
import { refresh } from './redux/user/userSlice';
import {
  NoticesCategoriesList,
  NoticesFavoritesList,
  NoticesOwnerList,
} from './components/Notices';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(userSelectors.getToken);
  const { data, isLoading } = useGetUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (!data) return;

    dispatch(refresh(data));
  }, [data]);

  return (
    !isLoading && (
      <Suspense fallback={false}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<Home />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/user" element={<UserDashboard />} />
            </Route>
            <Route path="news" element={<News />} />
            <Route path="notices" element={<Notices />}>
              <Route
                path="sell"
                element={<NoticesCategoriesList category={'sell'} />}
              />
              <Route
                path="lost-found"
                element={<NoticesCategoriesList category={'lost-found'} />}
              />
              <Route
                path="for-free"
                element={<NoticesCategoriesList category={'for-free'} />}
              />
              <Route element={<PrivateRoute />}>
                <Route path="favorite" element={<NoticesFavoritesList />} />
                <Route path="own" element={<NoticesOwnerList />} />
              </Route>
            </Route>
            <Route path="friends" element={<OurFriends />} />

            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}

export default App;
