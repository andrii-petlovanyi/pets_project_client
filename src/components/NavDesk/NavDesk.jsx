import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavDesk = ({ ...props }) => {
  return (
    <Box
      as={'nav'}
      display={'flex'}
      gap={'80px'}
      alignItems={'center'}
      fontFamily={'Manrope'}
      {...props}
    >
      <Link variant={'headerLink'} as={NavLink} to="news">
        News
      </Link>
      <Link variant={'headerLink'} as={NavLink} to="notices">
        Find pet
      </Link>
      <Link variant={'headerLink'} as={NavLink} to="partners">
        Our friends
      </Link>
    </Box>
  );
};
