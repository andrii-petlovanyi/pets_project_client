import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetFavoritesListQuery } from '../../../redux/user/userApiSlice';
import { NoticeCategoryItem } from '../../Notices';
import { SimpleGrid } from '@chakra-ui/layout';
import { PaginationBar } from '../../../services/pagination';
import usePagination from '../../../hooks/usePagination';

export const NoticesFavoritesList = () => {
  const params = useLocation();
  let search = params.search.split('=').at(-1);
  const { page, setPage, setTotalCount, countPage, perPage } = usePagination();

  const { data, isLoading } = useGetFavoritesListQuery({
    page,
    limit: perPage,
    search,
  });
  const { notices, totalCount } = data || [];
  useEffect(() => {
    setTotalCount(totalCount);
  }, [totalCount]);

  return (
    <>
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
      {countPage > 1 && (
        <PaginationBar
          // mb={{ base: '40px', xl: '80px' }}
          currentPage={page}
          countPage={countPage}
          setPage={setPage}
        />
      )}
    </>
  );
};
