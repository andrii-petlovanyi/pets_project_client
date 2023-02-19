import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  NoticesCategoriesList,
  NoticesCategoriesNav,
  NoticesSearch,
} from '../components/Notices';
import { useGetNoticesListQuery } from '../redux/notices/noticesApiSlice';

const Notices = () => {
  const [category, setCategory] = useState('sell'); /** category */
  const [search, setSearch] = useState(''); /** search */

  const { data, isLoading } = useGetNoticesListQuery({
    page: 1,
    limit: 10,
    search,
    category,
  });
  const { notices } = data || [];

  const onClick = e => {
    e.preventDefault();
    const { set } = e.target.dataset;
    setCategory(set);
    setSearch('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    setSearch(query);
  };

  return (
    <Box as="section">
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

export default Notices;
