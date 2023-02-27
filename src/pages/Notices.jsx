import { Box, Heading } from '@chakra-ui/react';
import React, { Suspense, useEffect } from 'react';
import { NoticesCategoriesNav, NoticesSearch } from '../components/Notices';
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import '../components/UserForm/Calendar/Calendar.styled.css';
import 'react-datepicker/dist/react-datepicker.css';

const Notices = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/');

  const [, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    setSearchParams(() => query);
  };

  useEffect(() => {
    if (location.length == 2) {
      navigate('sell');
    }
  }, [location]);

  return (
    <Box
      as="section"
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Heading as="h1" variant={'main'}>
        Find your favorite pet
      </Heading>

      <NoticesSearch onSubmit={onSubmit} />
      <NoticesCategoriesNav />

      <Suspense fallback={false}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Notices;
