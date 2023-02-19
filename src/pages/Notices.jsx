import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import { useSearchParams } from 'react-router-dom';
import {
  NoticesCategoriesList,
  NoticesCategoriesNav,
  NoticesSearch,
} from '../components/Notices';
import { useGetNoticesListQuery } from '../redux/notices/noticesApiSlice';

const Notices = prop => {
  const [category, setCategory] = useState(prop);
  const [search, setSearch] = useState('');
  // const [, setSearchParams] = useSearchParams(category);

  useEffect(() => {
    setCategory(prop);
  }, [category]);

  const { data, isLoading } = useGetNoticesListQuery({
    page: 1,
    limit: 10,
    search,
    category,
  });
  const { notices } = data || [];

  console.log(
    'notices',
    useGetNoticesListQuery({
      page: 1,
      limit: 10,
      search,
      category: 'sell',
    })
  );

  const onClick = e => {
    e.preventDefault();
    // const { set } = e.target.dataset;
    // setCategory(set);
    // setSearchParams(set);
    setSearch('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    setSearch(query);
  };

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
      <NoticesCategoriesNav onClick={onClick} />
      <NoticesCategoriesList itemList={notices} />

      {!isLoading ? (
        notices.length > 0 && notices.map(n => <h2 key={n._id}>{n.title}</h2>)
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

Notices.propTypes = {
  category: PropTypes.string,
};

export default Notices;
