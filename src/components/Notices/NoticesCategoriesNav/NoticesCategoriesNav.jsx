import React from 'react';
import PropTypes from 'prop-types';

export const NoticesCategoriesNav = ({ onClick }) => {
  return (
    <div>
      <nav>
        <button type="button" onClick={onClick} data-set="sell">
          sell
        </button>
        <button type="button" onClick={onClick} data-set="lost-found">
          lost/found
        </button>
        <button type="button" onClick={onClick} data-set="for-free">
          in good hands
        </button>
        <button type="button" onClick={onClick} data-set="favorite">
          favorite ads
        </button>
        <button type="button" onClick={onClick} data-set="own">
          my ads
        </button>
      </nav>
    </div>
  );
};

NoticesCategoriesNav.propTypes = {
  onClick: PropTypes.func,
};
