import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavDesk = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: '80px',
          alignItems: 'center',
          fontFamily: 'Manrope',
          color: '#181C27',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '1.35',
          letterSpacing: '0.04em',
        }}
      >
        <NavLink to="news">News</NavLink>
        <NavLink to="notices">Find pet</NavLink>
        <NavLink to="partners">Our friends</NavLink>
        <NavLink to="uikit">UI Kit</NavLink>
      </nav>
    </>
  );
};
