import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import './index.css';
import {
  Login,
  News,
  NotFound,
  Notices,
  OurFriends,
  Register,
  FinalRegister,
  UserDashboard,
} from './pages';
import UiKit from './pages/UiKit';
import { useGetUserQuery } from './redux/user/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from './redux/user/user-selectors';
import { refresh } from './redux/user/userSlice';
import {
  NoticesCategoriesList,
  NoticesFavoritesList,
  NoticesOwnerList,
} from './components/Notices';

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
            {/* <Route element={<PrivateRoute />}> */}
            <Route index path='/user' element={<UserDashboard />} />
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
              <Route path="favorite" element={<NoticesFavoritesList />} />
              <Route path="own" element={<NoticesOwnerList />} />
            </Route>
            <Route path="partners" element={<OurFriends />} />
            <Route path="uikit" element={<UiKit />} />
            {/* </Route> */}

            {/* <Route element={<PublicRoute />}> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="finalregister" element={<FinalRegister />} />
            {/* </Route> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}

export default App;
