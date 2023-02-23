import React from 'react';
import { useGetUserNoticesListQuery } from '../../../redux/notices/noticesApiSlice';
import { useLocation } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/layout';
import { NoticeCategoryItem } from '../../Notices';

export const NoticesOwnerList = () => {
  const params = useLocation();
  let search = params.search.split('=').at(-1);

  const { data, isLoading } = useGetUserNoticesListQuery({
    page: 1,
    limit: 12,
    search,
  });
  const { notices } = data || [];

  return (
    <SimpleGrid
      as={'ul'}
      columns={{ base: 1, lg: 2, xl: 4 }}
      mt={{ base: '30px', lg: '60px' }}
      mb={{ base: '100px', xl: '200px' }}
      gap={'32px'}
    >
      {!isLoading ? (
        notices?.length > 0 &&
        notices?.map(notice => (
          <NoticeCategoryItem key={notice._id} notice={notice} />
        ))
      ) : (
        <>Loading...</>
      )}
    </SimpleGrid>
  );
};
