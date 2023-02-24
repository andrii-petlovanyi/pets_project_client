import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { HiUserCircle } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/user-selectors';
import { LogOut } from '../LogOut/LogOut';
import PropTypes from 'prop-types';
export const UserMenu = ({ changeDisplay = () => {} }) => {
  const { name } = useSelector(userSelectors.user);
  return (
    <Box
      display={'flex'}
      gap={'12px'}
      marginRight={{ lg: '60px', xl: '0' }}
      alignItems="center"
      flexWrap={' wrap'}
      justifyContent={'center'}
    >
      <Button
        as={NavLink}
        to="/user"
        onClick={() => changeDisplay('none')}
        variant="fullBGBtn"
        gap="12px"
      >
        <HiUserCircle size={'28px'} />
        {name}
      </Button>
      <LogOut />
    </Box>
  );
};
export default UserMenu;

UserMenu.propTypes = {
  changeDisplay: PropTypes.func,
};
