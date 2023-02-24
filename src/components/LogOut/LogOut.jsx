import React from 'react';
import PropTypes from 'prop-types';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { PopoverLogOut } from '../Popover/Popover';
import { useLogOutUserMutation } from '../../redux/user/userApiSlice';
import { logOut } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export const LogOut = ({ changeDisplay }) => {
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await logOutUser();
      dispatch(logOut());
      changeDisplay('none');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <LogOutBtn
        handleLogOut={handleLogOut}
        display={{ base: 'flex', lg: 'none' }}
      />
      <PopoverLogOut
        handleLogOut={handleLogOut}
        display={{ base: 'none', lg: 'flex' }}
      />
    </>
  );
};

LogOut.propTypes = {
  handleLogOut: PropTypes.func,
  changeDisplay: PropTypes.func,
};
