import { Box, Heading } from '@chakra-ui/react';
import React, { Suspense, useEffect } from 'react';
import {
  NoticesCategoriesNav,
  NoticesSearch,
} from '../components/Notices';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Notices = () => {
  const navigate = useNavigate()
  const location = useLocation().pathname.split('/')

  // const [search, setSearch] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams)
  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target)
    // const query = e.target[0].value;
    // setSearchParams(() => query);
  };

  useEffect(() => {
    if (location.length == 2) {
      navigate('sell')
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
      {/* <NoticeCategoryItem /> */}

      <NoticesSearch onSubmit={onSubmit} />
      <NoticesCategoriesNav />
      {/* <NoticesCategoriesList itemList={notices} /> */}
      <Suspense fallback={false}>
        <Outlet />
      </Suspense>
    </Box>
  );
};



export default Notices;



