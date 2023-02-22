import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetFavoritesListQuery } from '../../../redux/user/userApiSlice';
import { NoticeCategoryItem } from '../../Notices';
import { SimpleGrid } from '@chakra-ui/layout';

export const NoticesFavoritesList = () => {
  const params = useLocation();
  let search = params.search.split('=').at(-1);

  const { data, isLoading } = useGetFavoritesListQuery({
    page: 1,
    limit: 10,
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
        notices?.favorites?.length > 0 &&
        notices?.favorites?.map(notice => (
          <NoticeCategoryItem key={notice._id} notice={notice} />
        ))
      ) : (
        <>Loading...</>
      )}
    </SimpleGrid>
  );
};
