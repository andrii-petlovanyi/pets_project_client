import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ModalAddNew } from '../../Notices';
import { useSelector } from 'react-redux';
import userSelectors from '../../../redux/user/user-selectors';

export const NoticesCategoriesNav = () => {
  const isAuth = useSelector(userSelectors.isAuth);

  return (
    <Box display={'flex'} gap={'30px'} w="100%">
      <Box as="nav" display={'flex'} flexWrap={'wrap'} gap={'12px'}>
        <Link as={NavLink} to="sell" variant={'tabLink'}>
          sell
        </Link>
        <Link as={NavLink} to="lost-found" variant={'tabLink'}>
          lost/found
        </Link>
        <Link as={NavLink} to="for-free" variant={'tabLink'}>
          in good hands
        </Link>
        {isAuth && (
          <>
            <Link as={NavLink} to="favorite" variant={'tabLink'}>
              favorite ads
            </Link>
            <Link as={NavLink} to="own" variant={'tabLink'}>
              my ads
            </Link>
          </>
        )}
      </Box>
      <ModalAddNew />
    </Box>
  );
};

NoticesCategoriesNav.propTypes = {
  onClick: PropTypes.func,
};
