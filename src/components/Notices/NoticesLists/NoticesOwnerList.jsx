import React from 'react';
import { useGetUserNoticesListQuery } from '../../../redux/notices/noticesApiSlice'
import { useLocation } from 'react-router-dom';
// import { NoticeCategoryItem } from '../../Notices';

export const NoticesOwnerList = () => {
  const params = useLocation()
  let search = params.search.split('=').at(-1)

  const { data, isLoading } = useGetUserNoticesListQuery({
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
    //   {itemList?.map(item => (
    //     <NoticeCategoryItem key={item._id} item={item} />
    //   ))}
    // </ul>
  );
};

// {
//   itemList;
// }
