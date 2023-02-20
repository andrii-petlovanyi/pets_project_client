import { Box } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavDesk = () => {
  return (
    <>
      <Box
        as={'nav'}
        display={'flex'}
        gap={'80px'}
        alignItems={'center'}
        fontFamily={'Manrope'}
        color={'thirdTextColor'}
        fontWeight={'500'}
        lineHeight={'1.35'}
      >
        <NavLink to="news">News</NavLink>
        <NavLink to="notices">Find pet</NavLink>
        <NavLink to="partners">Our friends</NavLink>
        <NavLink to="uikit">UI Kit</NavLink>
      </Box>
    </>
  );
};
