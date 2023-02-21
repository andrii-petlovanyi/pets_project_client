import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetFavoritesListQuery } from '../../../redux/user/userApiSlice';
// import { NoticeCategoryItem } from '../../Notices';

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
    <div>
      {!isLoading ? (
        notices?.length > 0 && notices.map(n => <h2 key={n._id}>{n.title}</h2>)
      ) : (
        <>Loading...</>
      )}
    </div>

    // <ul>
    //   {notices?.map(notice => (
    //     <NoticeCategoryItem key={notice._id} notice={notice} />
    //   ))}
    // </ul>
  );
};

// {
//   itemList;
// }
