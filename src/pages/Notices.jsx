import React, { useState } from 'react';
import {
  NoticeCategoryItem,
  //   NoticesCategoriesList,
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
    category
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
    <div>
      <h1>Find your favorite pet</h1>

      <NoticesSearch onSubmit={onSubmit} />
      <NoticesCategoriesNav onClick={onClick} />
      <NoticeCategoryItem />
      {/* <NoticesCategoriesList itemList={category + search} /> */}

      {!isLoading
        ? notices.length > 0 && notices.map(n => <h2 key={n._id}>{n.title}</h2>)
        : <>Loading...</>
      }

    </div>
  );
};

export default Notices;
