import React from 'react';
import PropTypes from 'prop-types';
import { useGetNoticesListQuery } from '../../../redux/notices/noticesApiSlice';
import { useLocation } from 'react-router-dom';
import { NoticeCategoryItem } from '../../Notices';
import { Flex } from '@chakra-ui/react';

export const NoticesCategoriesList = ({ category }) => {
  const params = useLocation();
  let search = params.search.split('=').at(-1);

  const { data, isLoading } = useGetNoticesListQuery({
    page: 1,
    limit: 10,
    search,
    category,
  });
  const { notices } = data || [];

  return (
    // <div>
    //   {!isLoading ? (
    //     notices.length > 0 && notices.map(n => <h2 key={n._id}>{n.title}</h2>)
    //   ) : (
    //     <>Loading...</>
    //   )}
    // </div>
    <Flex as={'ul'} gap={'20px'}>
      {!isLoading ? (
        notices?.map(notice => {
          <NoticeCategoryItem key={notice._id} notice={notice} />;
        })
      ) : (
        <>Loading...</>
      )}
    </Flex>
  );
};

NoticesCategoriesList.propTypes = {
  category: PropTypes.string,
};
