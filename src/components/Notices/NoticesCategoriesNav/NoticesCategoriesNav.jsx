import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NoticesCategoriesNav = ({ onClick }) => {
  return (
    <div>
      <nav>
        <Link
          as={NavLink}
          to="sell"
          // onClick={onClick}
          // data-set="sell"
          variant={'tabLink'}
        >
          sell
        </Link>
        <Link
          as={NavLink}
          to="lost-found"
          // onClick={onClick}
          // data-set="lost-found"
          variant={'tabLink'}
        >
          lost/found
        </Link>
        <Button type="button" onClick={onClick} data-set="for-free">
          in good hands
        </Button>
        <Button type="button" onClick={onClick} data-set="favorite">
          favorite ads
        </Button>
        <Button type="button" onClick={onClick} data-set="own">
          my ads
        </Button>
      </nav>
    </div>
  );
};

NoticesCategoriesNav.propTypes = {
  onClick: PropTypes.func,
};
