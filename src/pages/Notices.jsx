import React, { useState } from 'react';
import {
  //   NoticesCategoriesList,
  NoticesCategoriesNav,
  NoticesSearch,
} from '../components/Notices';

const Notices = () => {
  const [, setCategory] = useState('sell'); /** category */
  const [, setSearch] = useState(''); /** search */

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
      {/* <NoticesCategoriesList itemList={category + search} /> */}
    </div>
  );
};

export default Notices;
