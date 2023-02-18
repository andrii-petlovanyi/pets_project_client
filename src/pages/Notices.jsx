import React from 'react';
import {
  NoticesCategoriesList,
  NoticesCategoriesNav,
  NoticesSearch,
} from '../components/Notices';

const Notices = () => {
  return (
    <div>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </div>
  );
};

export default Notices;
