import React from 'react';
import { useSelector } from 'react-redux';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';

export const NoticesCategoriesList = () => {
  const petCards = useSelector(); // жду редакс
  const visiblePetCards = useSelector(); // жду редакс

  return (
    <div>
      {petCards &&
        visiblePetCards.map(item => (
          <NoticeCategoryItem key={item._id} item={item} />
        ))}
    </div>
  );
};
