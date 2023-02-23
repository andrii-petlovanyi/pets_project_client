import React from 'react';
import PropTypes from 'prop-types';
import { useGetNoticesListQuery } from '../../../redux/notices/noticesApiSlice';
import { useLocation } from 'react-router-dom';
import { NoticeCategoryItem } from '../../Notices';
import { SimpleGrid } from '@chakra-ui/react';

export const NoticesCategoriesList = ({ category }) => {
  const params = useLocation();
  let search = params.search.split('=').at(-1);

  const { data, isLoading } = useGetNoticesListQuery({
    page: 1,
    limit: 12,
    search,
    category,
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

NoticesCategoriesList.propTypes = {
  category: PropTypes.string,
};
