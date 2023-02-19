import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NoticesCategoriesNav = () => {
  return (
    <div>
      <nav>
        <Link
          as={NavLink}
          to="sell"
          variant={'tabLink'}
        >
          sell
        </Link>
        <Link
          as={NavLink}
          to="lost-found"
          variant={'tabLink'}
        >
          lost/found
        </Link>
        <Link
          as={NavLink}
          to="free"
          variant={'tabLink'}
        >
          in good hands
        </Link>
        <Link
          as={NavLink}
          to="favorites"

          variant={'tabLink'}
        >
          favorite ads
        </Link>
        <Link
          as={NavLink}
          to="owner"
          variant={'tabLink'}
        >
          my ads
        </Link>
      </nav>
    </div>
  );
};

NoticesCategoriesNav.propTypes = {
  onClick: PropTypes.func,
};
